const display = document.querySelector('#display');
const inputSize = document.querySelector('#input-size');
const inputFont = document.querySelector('#input-font');
const inputColor = document.querySelector('#input-color');
const inputBgColor = document.querySelector('#input-bg-color');
const inputText = document.querySelector('#enter-text');

const showSize = document.querySelector('#show-size');
const showFont = document.querySelector('#show-font');
const showColor = document.querySelector('#show-color');
const showBgColor = document.querySelector('#show-bg-color');

function changeFontSize() {
  const fontSize = `${inputSize.value}px`;
  showSize.innerHTML = fontSize;
  display.style.fontSize = fontSize;
}
function changeFont() {
  const font = inputFont.value;
  showFont.innerHTML = font;
  display.style.fontFamily = font;
  console.log(font);
}
function changeColor() {
  const color = inputColor.value;
  showColor.innerHTML = color;
  display.style.color = color;
}
function changeBgColor() {
  const color = inputBgColor.value;
  showBgColor.innerHTML = color;
  display.style.backgroundColor = color;
}
function changeText() {
  const text = inputText.value;
  display.innerHTML = text;
}
inputSize.addEventListener('input', changeFontSize);
inputFont.addEventListener('input', changeFont);
inputColor.addEventListener('input', changeColor);
inputBgColor.addEventListener('input', changeBgColor);
inputText.addEventListener('input', changeText);
