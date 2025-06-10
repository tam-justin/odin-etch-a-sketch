const sizeSlider = document.getElementById("size-slider");
const sizeText = document.getElementById("board-size");
const board = document.getElementById("board");

let mode = "singleColor";

let border = false;

const singleButton = document.getElementById("single");
const colorPicker = document.getElementById("color-wheel");
const rainbowButton = document.getElementById("rainbow");
const eraserButton = document.getElementById("eraser");
const clearButton = document.getElementById("clear");
const borderButton = document.getElementById("border");

function activate(newMode){
    if(mode === "singleColor"){
        singleButton.classList.remove("active");
    }else if(mode === "rainbow"){
        rainbowButton.classList.remove("active");
    }else if(mode === "eraser"){
        eraserButton.classList.remove("active");
    }

    if(newMode === "singleColor"){
        singleButton.classList.add("active");
        mode = "singleColor";
    }else if(newMode === "rainbow"){
        rainbowButton.classList.add("active");
        mode = "rainbow";
    }else if(newMode === "eraser"){
        eraserButton.classList.add("active");
        mode = "eraser";
    }
}

singleButton.addEventListener("click", () => {
    activate("singleColor");
})

rainbowButton.addEventListener("click", () => {
    activate("rainbow");
})

eraserButton.addEventListener("click", () => {
    activate("eraser");
})

borderButton.addEventListener("click", () => {
    if(border == true){
        const arr = document.querySelectorAll(".units");
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove("border");
        }
        borderButton.textContent = "show border";
        border = false;
    }else{
        const arr = document.querySelectorAll(".units");
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.add("border");
        }
        borderButton.textContent = "hide border";
        border = true;
    }
})

function createBoard(size){
    for(let i = 0; i < size*size; i++){
        const unit = document.createElement("div");
        unit.classList.add("units");
        if(border == true){
            unit.classList.add("border");
        }
        board.appendChild(unit);
    }
}

function updateSize(size){
    board.innerHTML = "";
    document.documentElement.style.setProperty('--size', size);
    createBoard(size);
}

sizeSlider.addEventListener("input", () => {
    sizeText.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;
    updateSize(sizeSlider.value);
});


document.onload(createBoard(16));