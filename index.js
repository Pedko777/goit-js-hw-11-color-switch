const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};


let intervalId;

const changeColor = () => {
  let color = randomIntegerFromInterval(0, colors.length -1);
  refs.body.bgColor = colors[color];
};

const startChangeBgColor = () => {
  refs.startBtn.disabled = true;
  intervalId = setInterval(changeColor, 1000);
};

const stopChangeBgColor = () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', startChangeBgColor);
refs.stopBtn.addEventListener('click', stopChangeBgColor);