const fps = 60;

let lastTick;
let speed = 100; // pixels / second
let x = 100;
let y = 100;
let keysDown = [];

const canvas = document.createElement('canvas');
const rootElement = document.querySelector('#root');

rootElement.appendChild(canvas);

canvas.width = 800;
canvas.height = 500;

const ctx = canvas.getContext('2d');

const image = new Image();
image.src = './smiley.png';

rootElement.tabIndex = -1;
rootElement.addEventListener('keydown', (event) => {
  if (!keysDown.includes(event.key)) {
    keysDown.push(event.key);
  }
});

rootElement.addEventListener('keyup', (event) => {
  const index = keysDown.indexOf(event.key);

  if (index > -1) {
    keysDown.splice(index, 1);
  }
});

const start = () => {
  lastTick = Date.now();

  tick();
};

image.addEventListener('load', start);

const tick = () => {
  const now = Date.now();
  const sinceLast = now - lastTick;
  lastTick = now;

  let xDirection = 0;
  let yDirection = 0;
  if (keysDown.includes('ArrowRight')) {
    xDirection += 1;
  }

  if (keysDown.includes('ArrowLeft')) {
    xDirection -= 1;
  }

  if (keysDown.includes('ArrowUp')) {
    yDirection -= 1;
  }

  if (keysDown.includes('ArrowDown')) {
    yDirection += 1;
  }

  x += xDirection * speed * sinceLast / 1000;
  y += yDirection * speed * sinceLast / 1000;

  draw();

  setTimeout(tick, 1000 / fps);
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(image, x, y);
};