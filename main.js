const container = document.querySelector(".container")
// let square = document.querySelectorAll(".square");
let square = document.getElementsByClassName("square");
let div = document.createElement("div");
div.classList.add("square");

// creates 2500 divs (squares)
function createGrid() {
    for (let i = 0; i < 2500; i++) {
        container.appendChild(div.cloneNode(true));
    }
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

// clear button -- returns all squares to white colour
function reset() {
    clearGrid();
    createGrid();
    makeBlack();
}
    
// // create a 25 by 25 grid
// function grid25() {}