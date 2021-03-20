const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  startBtn: document.querySelector(`button[data-action="start"]`),
  stopBtn: document.querySelector(`button[data-action="stop"]`),
  bodyRef: document.querySelector("body")
};
refs.startBtn.addEventListener("click", startChange);
refs.stopBtn.addEventListener("click", stopChange);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(el) {
  const indx = randomIntegerFromInterval(0, colors.length);
  el.style.backgroundColor = colors[`${indx}`];
}
let timerId = null;

function startChange() {
  timerId = setInterval(() => {
    changeColor(refs.bodyRef);
  }, 1000);
  refs.startBtn.disabled = true;

  refs.startBtn.removeEventListener("click", startChange);
  refs.stopBtn.addEventListener("click", stopChange);
}

function stopChange() {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.removeEventListener("click", stopChange);
  refs.startBtn.addEventListener("click", startChange);
}
