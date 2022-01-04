import { SNAKE_SPEED, drawSnake, updateSnake } from "./snake.js";

const gameBoard = document.getElementById("game-board");

function update() {
  updateSnake();
}

function draw() {
  drawSnake(gameBoard);
}

let lastRenderTime = 0;

function gameLoop(currentTime) {
  window.requestAnimationFrame(gameLoop);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(gameLoop);
