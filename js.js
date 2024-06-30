// Make the slider fill up with color
document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.getElementById('myRange');
    
    slider.addEventListener('input', function() {
      const value = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #eeb100 ${value}%, #f3f3f3 ${value}%)`;
    });
  });
  
let divContainer = document.querySelector(".forDivContainer")  
let slider = document.getElementById('myRange');
let sliderValueDiv = document.querySelector(".sliderValueDiv");

slider.addEventListener("input", () =>{
let sliderValue = slider.value
resetGrid(divContainer)
updateSliderValue(sliderValue)
createGrid(sliderValue);
})

function createGrid(sliderValue) {
    const gridSize = sliderValue ** 2;
    const newSize = 348 / sliderValue;
    const gridElements = createGridElements(gridSize, newSize);
    appendGridElements(gridElements);
    addHoverEffect(gridElements);
}

function createGridElements(gridSize, newSize) {
    const gridElements = [];
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("newDiv");
        styleGridElement(div, newSize);
        gridElements.push(div);
    }
    return gridElements;
}

function styleGridElement(div, newSize) {
    div.style.height = `${newSize}px`;
    div.style.width = `${newSize}px`;
}

function appendGridElements(gridElements) {
    const divContainer = document.querySelector(".forDivContainer");
    gridElements.forEach(div => divContainer.appendChild(div));
}

function addHoverEffect(gridElements) {
    gridElements.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.classList.add("hovered");
        });
    });
}

function resetGrid(divContainer) {
    let allDivs = document.querySelectorAll(".newDiv");
    allDivs.forEach(element => {
        element.parentNode.removeChild(element);
    });
}

function updateSliderValue(sliderValue){
    sliderValueDiv.textContent = sliderValue + " x " + sliderValue;
}

