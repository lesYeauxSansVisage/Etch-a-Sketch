export const container = document.getElementById("container")!;

const colors = ["#111", "#222", "#333", "#444", "#555"];

export function createBoxes(boxNumber: number): void {
  for (let i = 0; i < boxNumber; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.append(box);
  }
}

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
