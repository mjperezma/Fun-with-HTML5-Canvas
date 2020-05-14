'use strict';
const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(ev) {
  if (!isDrawing) return;

  console.log(ev);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(ev.offsetX, ev.offsetY);
  ctx.stroke();

  [lastX, lastY] = [ev.offsetX, ev.offsetY];

  hue++;
}
canvas.addEventListener('mousedown', (ev) => {
  isDrawing = true;
  [lastX, lastY] = [ev.offsetX, ev.offsetY];
});
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
