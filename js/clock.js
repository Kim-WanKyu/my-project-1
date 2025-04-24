const clock = document.querySelector("#clock");
const clockDate = clock.querySelector("#clock-date");
const clockTime = clock.querySelector("#clock-time");

const clockIntervalId = setInterval(clockInterval, 1000);

function getClockTime(date) {
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${HH}:${mm}:${ss}`;
}
function getClockDate(date) {
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${MM}/${dd}`;
}

function clockInterval() {
  const date = new Date();
  clockDate.innerText = getClockDate(date);
  clockTime.innerText = getClockTime(date);
}
