import { createBoxes, container, getRandomColor } from "./whiteBoard.js";
const clearBtn = document.getElementById("clear");
const decreaseBtn = document.getElementById("decrease-size");
const increaseBtn = document.getElementById("increase-size");

let boxGridSize = 10;

createBoxes(100);

container.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target.classList.contains("box") &&
        target.classList.contains("hovered")) {
        target.style.backgroundColor = getRandomColor();
        target.classList.add("hove red");
    }
});

clearBtn.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.classList.remove("hovered");
        box.style.backgroundColor = "#FFF";
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
