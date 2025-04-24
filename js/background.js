const bgImages = [
  "clouds-414198_1280.jpg ",
  "clouds-1282314_1280.jpg ",
  "desert-7970677_1280.jpg ",
  "iceberg-404966_1280.jpg ",
  "iceberg-7994536_1280.jpg ",
  "landscape-5561678_1280.jpg ",
  "landscape-8336497_1280.jpg ",
  "mountain-7511116_1280.jpg ",
  "mountain-8187621_1280.jpg ",
  "mountains-736886_1280.jpg ",
  "mountains-7939056_1280.jpg ",
  "purple-669046_1280.jpg ",
  "sea-7086932_1280.jpg ",
  "sky-7136828_1280.jpg ",
  "sunset-7504891_1280.jpg ",
  "sunset-8569636_1280.jpg ",
  "thunderstorm-3441687_1280.jpg",
];

document.body.style.backgroundImage = `url(./img/bg/${bgImages[0]})`;

const bgPanel = document.createElement("div");
bgPanel.classList.add("bg-panel");
document.body.prepend(bgPanel);

const curImage = `./img/bg/${bgImages[0]}`;
const bgImage = document.createElement("img");
bgImage.src = curImage;
bgImage.classList.add("image");

const cardBox = document.querySelector("#todo-list-box");
document.body.insertBefore(bgImage, cardBox);

const bgImageHr = document.createElement("hr");
bgImageHr.style.border = "1px solid green";
document.body.insertBefore(bgImageHr, cardBox);

let index = 0;
setInterval(() => {
  index = ++index % bgImages.length;
  const curImage = bgImages[index];
  document.body.style.backgroundImage = `url(./img/bg/${curImage})`;
  bgImage.src = `./img/bg/${curImage}`;
}, 5000);
