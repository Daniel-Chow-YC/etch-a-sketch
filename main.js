const container = document.querySelector(".container")

let div = document.createElement("div");
div.classList.add("box");

// container.appendChild(div);

for (let i = 0; i < 2500; i++) {
    container.appendChild(div.cloneNode(true));
}

let box = document.querySelectorAll(".box");


for (let i = 0 ; i < box.length; i++) {
    box[i].onmouseover=function(){box[i].classList.add("colour")};
}
// for (let i in box) {
//     box[i].onmouseover=function(){box[i].classList.add("colour")};
// }
