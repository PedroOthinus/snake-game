import { randomGridPosition } from "./grid.js";
import { onSnake, expandSnake } from "./snake.js";

let food = createRandomFoodPosition();
const EXPANSION_RATE = 1;

export function updateFood() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = createRandomFoodPosition();
  }
}

export function drawFood(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function createRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
