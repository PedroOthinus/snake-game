export const SNAKE_SPEED = 2;
const snakeBody = [{ x: 1, y: 1 }];

export function updateSnake() {
  console.log("Update");
}

export function drawSnake(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.x;
    snakeElement.style.gridColumnStart = segment.y;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });

  console.log("Draw");
}
