const container = document.querySelector(".container");
// let square = document.querySelectorAll(".square");
let square = document.getElementsByClassName("square");
let newSquare = document.createElement("div");
newSquare.classList.add("square");

// creates 25x25 divs (squares)
function createGrid(gridSize=25) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        container.appendChild(newSquare.cloneNode(true));
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}
createGrid();

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// adds black colour when mouse moves over square
function makeBlack() {
    for (let i = 0 ; i < square.length; i++) {
        square[i].onmouseover=function(){square[i].classList.add("colour")};
    }
}
makeBlack();
//// This is another way to write this for loop
// for (let i in square) {
//     square[i].onmouseover=function(){square[i].classList.add("colour")};
// }



// Clear button -- returns all squares to white colour and returns current grid size
function reset() {
    let currentGridSize = Math.sqrt(square.length);
    clearGrid();
    createGrid(currentGridSize);
    makeBlack();
}

// create a 25 by 25 grid
function grid25() {
    clearGrid();
    createGrid(25);
    makeBlack();
}

// create a 50 by 50 grid
function grid50() {
    clearGrid();
    createGrid(50);
    makeBlack();
}

// create a 75 by 75 grid
function grid75() {
    clearGrid();
    createGrid(75);
    makeBlack();
}

// create custom grid
function customGrid() {
    gridNum = prompt("How many squares per side for your grid?", 25);
    clearGrid();
    createGrid(gridNum);
    makeBlack(); 

}