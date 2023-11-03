const gridContainer = document.querySelector(".grid-container");

//number of rows and columns
let gridSize = 16;

function makeGrid(color) {
  for (i = 0; i < gridSize ** 2; i++) {
    const block = document.createElement("div");
    block.classList.add("grid-item");
    block.style.cssText =
      "border: 1px solid black; background-color: " + color + "; height: 25px; width: 25px;";
    gridContainer.appendChild(block);
  }
}

makeGrid("white");

const yellowButton = document.querySelector(".yellow-button");
const clearButton = document.querySelector(".clear-button");

function changeBgToYellow() {
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((element) => {
    element.style.backgroundColor = "#FFD801";
  });
}

function clearGrid() {
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((element) => {
    element.style.backgroundColor = "white";
  });
}
yellowButton.addEventListener("click", changeBgToYellow);
clearButton.addEventListener("click", clearGrid);
