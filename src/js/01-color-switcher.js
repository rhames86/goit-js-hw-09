function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', () => {
  startButton.disabled = true; // Desactivar el botón Start
  stopButton.disabled = false;
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false; // Volver a activar el botón Start
  stopButton.disabled = true;
  //   document.body.style.backgroundColor = ''; //Si quiero dejar el fondo en blanco
});
