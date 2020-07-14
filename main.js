const container = document.querySelector(".container")

let div = document.createElement("div");
div.classList.add("square");

// creates 2500 divs (squares)
for (let i = 0; i < 2500; i++) {
    container.appendChild(div.cloneNode(true));
}
////

let square = document.querySelectorAll(".square");

for (let i = 0 ; i < square.length; i++) {
    square[i].onmouseover=function(){square[i].classList.add("colour")};
}
//// This is another way to write this for loop
// for (let i in square) {
//     square[i].onmouseover=function(){square[i].classList.add("colour")};
// }
