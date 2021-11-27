const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");

const colors = ["#111", "#222", "#333", "#444", "#555"];

// Create a function and an event listener that create the boxes
//
// Change the background color according to the selected color

let boxSize = 0;

createBoxes(100);

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
  if (boxes) {
    boxes.forEach((box) => {
      box.classList.remove("hovered");
      box.style.backgroundColor = "#FFF";
    });
  }
});
