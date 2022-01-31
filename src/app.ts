import { createBoxes, container, getRandomColor } from "./whiteBoard.js";

const clearBtn = document.getElementById("clear")!;
const decreaseBtn = document.getElementById("decrease-size")!;
const increaseBtn = document.getElementById("increase-size")!;

// Create a function and an event listener that create the boxes
//
// Change the background color according to the selected color

let boxGridSize = 10;

createBoxes(100);

container.addEventListener("mouseover", (e) => {
  const target = e.target as HTMLDivElement;
  if (
    target.classList.contains("box") &&
    !target.classList.contains("hovered")
  ) {
    target.style.backgroundColor = getRandomColor();
    target.classList.add("hovered");
  }
});

clearBtn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.remove("hovered");
    (box as HTMLDivElement).style.backgroundColor = "#FFF";
  });
});

increaseBtn.addEventListener("click", () => {
  if (boxGridSize >= 2) {
    boxGridSize -= 1;
    container.innerHTML = "";
    createBoxes(boxGridSize ** 2);
    container.style.gridTemplateColumns = `repeat(${boxGridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${boxGridSize}, 1fr)`;
  }
});

decreaseBtn.addEventListener("click", () => {
  boxGridSize += 1;
  container.innerHTML = "";
  createBoxes(boxGridSize ** 2);
  container.style.gridTemplateColumns = `repeat(${boxGridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${boxGridSize}, 1fr)`;
});
