const gridContainer = document.querySelector(".grid-container");

const rainbowButton = document.querySelector(".rainbow-button");
const yellowButton = document.querySelector(".yellow-button");
const clearButton = document.querySelector(".clear-button");
const bigButton = document.querySelector(".big-button");
const mediumButton = document.querySelector(".medium-button");
const smallButton = document.querySelector(".small-button");
const toggle = document.getElementById("rainbow-toggle");
const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("click", painting);
toggle.addEventListener("click", randomPainting);
rainbowButton.addEventListener("click", randomPainting);
yellowButton.addEventListener("click", rubberDuck);
clearButton.addEventListener("click", clearGrid);
bigButton.addEventListener("click", bigGrid);
mediumButton.addEventListener("click", mediumGrid);
smallButton.addEventListener("click", smallGrid);


//number of rows and columns
let gridSize = 16;
var paintColor = document.getElementById("color-picker").value;

document.getElementById("color-picker").onchange = function () {
  paintColor = this.value;
};

function makeGrid(gridNumber, elementSize) {
  gridSize = gridNumber;

  for (i = 0; i < gridSize ** 2; i++) {
    const block = document.createElement("div");
    block.classList.add("grid-item");
    block.style.cssText =
      "border-left: 1px solid black; border-top: 1px solid black; background-color: white; height: " +
      elementSize +
      "px; width: " +
      elementSize +
      "px;";
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    gridContainer.appendChild(block);
  }
}

function deleteGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function smallGrid() {
  changeGridSize(20, 25);
  painting();
}

function mediumGrid() {
  changeGridSize(40, 12.1);
  painting();
}

function bigGrid() {
  changeGridSize(80, 5.65);
  painting();
}

function rubberDuck() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    element.style.backgroundColor = "#FFD801";
  });
  painting();
}

function clearGrid() {
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((element) => {
    element.style.backgroundColor = "white";
  });
  painting();
}

function changeGridSize(newSize, elementSize) {
  //delete initial grid
  deleteGrid();
  //make new grid
  makeGrid(newSize, elementSize);
}

function painting() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    element.addEventListener(
      "mouseover",
      () => (element.style.backgroundColor = paintColor)
    );
  });
  toggle.checked = false;
}

function randomPainting() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((element) => {
    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + randomR + ", " + randomG + ", " + randomB + ")";
    element.addEventListener(
      "mouseover",
      () => (element.style.backgroundColor = randomColor)
    );
  });
  toggle.checked = true;
}

function start() {
  makeGrid(20, 25);
  painting();
}

start();
