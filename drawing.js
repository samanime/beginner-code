const canvas = document.createElement('canvas');
const rootElement = document.querySelector('#root');

rootElement.appendChild(canvas);

canvas.width = 800;
canvas.height = 500;

const ctx = canvas.getContext('2d');
//
// const image = new Image();
// image.src = './smiley.png';
//
// image.addEventListener('load', () => {
//   ctx.drawImage(image, 100, 100);
// });

ctx.fillStyle = '#69C';
ctx.strokeStyle = '#333';
ctx.lineWidth = 3;

const radius = 50;
const width = 500;
const height = 100;
const x = 100;
const y = 100;

ctx.beginPath();
ctx.moveTo(x + radius, y);
ctx.lineTo(x + width - radius, y);
ctx.arc(x + width - radius, y + radius, radius, 3 / 2  * Math.PI, 2 * Math.PI);
ctx.lineTo(x + width, y + height - radius);
ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2);
ctx.lineTo(x + radius, y + height);
ctx.arc(x + radius, y + height - radius, radius, Math.PI / 2, Math.PI);
ctx.lineTo(x, y + radius);
ctx.arc(x + radius, y + radius, radius, Math.PI, 3 / 2 * Math.PI);
ctx.closePath();

ctx.fill();
ctx.stroke();

ctx.fillStyle = '#F00';
ctx.fillRect(20, 20, 100, 100);

ctx.strokeStyle = '#030';
ctx.beginPath();
ctx.arc(300, 300, 100, 0, 2 * Math.PI);
ctx.closePath();
ctx.stroke();