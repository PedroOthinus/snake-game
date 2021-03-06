import { getInputDirection } from "./movement.js";

let newSegments = 0;

const snakeBody = [
  { x: 10, y: 11 },
  { x: 11, y: 11 },
  { x: 12, y: 11 },
];

export const SNAKE_SPEED = 5;

export function updateSnake() {
  addSegments();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  const inputDirection = getInputDirection();

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake(rate) {
  newSegments += rate;
}

export function onSnake(position) {
  return snakeBody.some((segment) => {
    return equalPositions(segment, position);
  });
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1] };
  }
  newSegments = 0;
}
