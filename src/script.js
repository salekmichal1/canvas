'use strict';
const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

function draw() {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
  }
}
draw();
