const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");
const decreaseBtn = document.getElementById("decrease-size");
const increaseBtn = document.getElementById("increase-size");

const colors = ["#111", "#222", "#333", "#444", "#555"];

// Create a function and an event listener that create the boxes
//
// Change the background color according to the selected color

let boxGridSize = 10;

createBoxes(100);

container.addEventListener("mouseover", (e) => {
  if (
    e.target.classList.contains("box") &&
    !e.target.classList.contains("hovered")
  ) {
    e.target.style.backgroundColor = getRandomColor();
    e.target.classList.add("hovered");
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

function createBoxes(boxNumber) {
  for (let i = 0; i < boxNumber; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
  }
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
