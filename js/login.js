const CLASSNAME_HIDDEN = "hidden";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const loginResult = document.querySelector("#login-result");
const loginResultName = loginResult.querySelector("#login-name");
const btnLogout = loginResult.querySelector("#logout-btn");

const savedUsername = localStorage.getItem("username");
if (savedUsername !== null) {
  printUsername(savedUsername);
} else {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginInput.value = "";
}

function printUsername(name) {
  loginResult.classList.remove(CLASSNAME_HIDDEN);
  loginResultName.innerText = name;
}

loginForm.addEventListener("submit", onLoginSubmit);
btnLogout.addEventListener("click", onLogoutSubmit);

function onLoginSubmit(event) {
  event.preventDefault();
  const inputName = loginInput.value;
  loginInput.value = "";
  if (inputName === "") {
    alert("username is empty!");
  } else if (inputName.length > 20) {
    alert("username is too long!");
  } else {
    if (localStorage.getItem("username") === null) {
      console.log("username : ", inputName);
      loginForm.classList.add(CLASSNAME_HIDDEN);
      localStorage.setItem("username", inputName);
      printUsername(inputName);
    }
  }
}
function onLogoutSubmit(event) {
  event.preventDefault();
  loginInput.value = "";
  localStorage.removeItem("username");
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginResult.classList.add(CLASSNAME_HIDDEN);
  loginResultName.textContent = "";
  loginInput.value = "";
}
