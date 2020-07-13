const container = document.querySelector(".container")

let div = document.createElement("div");
div.classList.add("box");

// container.appendChild(div);

for (let i = 0; i < 256; i++) {
    container.appendChild(div.cloneNode(true));
}