class todoObj {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}

// html elements.
const todoListBox = document.querySelector("#todo-list-box");
const todoListForm = todoListBox.querySelector("#todo-list-form");
const todoListInput = todoListForm.querySelector("#todo-list-input");
const todoListBtn = todoListForm.querySelector("#todo-list-btn");
const todoListList = todoListBox.querySelector("#todo-list-list");

const todoArray = [];

const submitTodo = (e) => {
  e.preventDefault();

  // check input.
  const text = todoListInput.value;
  if (text === null || text === "" || text.length === 0) {
    return;
  }

  // flush input.
  todoListInput.value = "";

  // create todo object.
  const newTodo = new todoObj(Date.now(), text);

  // add input todo to todoArray.
  todoArray.push(newTodo);

  // save todoList.
  saveTodoList();

  // make and add list.
  addTodoList(newTodo);
};

todoListForm.addEventListener("submit", submitTodo);

// add list.
const addTodoList = (newTodo) => {
  // create element.
  const newList = document.createElement("li");
  const newListTxt = document.createElement("span");
  // set values.
  newList.id = newTodo.id;
  newListTxt.textContent = newTodo.text;
  newList.append(newListTxt);
  // add btnX to list.
  const btnX = makeBtnX(newList);
  newList.prepend(btnX);

  // add event to toggle btnX.
  newList.addEventListener("click", () => {
    toggleBtnX(btnX);
  });

  todoListList.append(newList);
};

// make button.
const makeBtnX = (list) => {
  // element.
  const btnX = document.createElement("span");
  btnX.textContent = "⊗";

  btnX.classList.add("x-btn");
  btnX.classList.add("hidden");

  // add event to delete list.
  btnX.addEventListener("click", () => {
    deleteTodoList(list);
  });

  return btnX;
};

// delete list.
const deleteTodoList = (list) => {
  list.remove();
  const selectedIndex = todoArray.findIndex((item) => {
    return item.id.toString() === list.id;
  });
  todoArray.splice(selectedIndex, 1);

  saveTodoList();
};

// toggle button.
const toggleBtnX = (btn) => {
  if (btn.classList.contains("hidden")) {
    btn.classList.remove("hidden");
    btn.classList.add("inline-block");
  } else if (btn.classList.contains("inline-block")) {
    btn.classList.remove("inline-block");
    btn.classList.add("hidden");
  }
};

// save.
const saveTodoList = () => {
  localStorage.setItem("todo", JSON.stringify(todoArray));
};

// load.
const loadTodoList = () => {
  const item = localStorage.getItem("todo");
  if (item !== null) {
    const parsed = JSON.parse(localStorage.getItem("todo"));

    todoArray.splice(0);
    
    parsed.forEach((item) => {
      todoArray.push(item);
      addTodoList(item);
    });
  }
};

// load todo-list to array.
loadTodoList();
