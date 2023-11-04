const gridContainer = document.querySelector(".grid-container");

//number of rows and columns
let gridSize = 16;

function makeGrid(gridNumber, elementSize) {
  gridSize = gridNumber;

  for (i = 0; i < gridSize ** 2; i++) {
    const block = document.createElement("div");
    block.classList.add("grid-item");
    block.style.cssText =
      "border-left: 1px solid black; border-top: 1px solid black; background-color: white; height: " + elementSize + "px; width: " + elementSize + "px;";
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    gridContainer.appendChild(block);
  }
}

function smallGrid() {
  changeGridSize(20, 25);
}

function mediumGrid() {
  changeGridSize(40, 12.1);
}

function bigGrid() {
  changeGridSize(80, 5.65);
}



//initial Grid
makeGrid(20, 25);

const yellowButton = document.querySelector(".yellow-button");
const clearButton = document.querySelector(".clear-button");
const bigButton = document.querySelector(".big-button");
const mediumButton = document.querySelector(".medium-button");
const smallButton = document.querySelector(".small-button");


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
bigButton.addEventListener("click", bigGrid);
mediumButton.addEventListener("click", mediumGrid);
smallButton.addEventListener("click", smallGrid);

function changeGridSize(newSize, elementSize) {
  //delete initial grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  //make new grid
  makeGrid(newSize, elementSize);
}



