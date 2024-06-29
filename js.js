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

function createGrid(sliderValue){
    for(let i = 0; i < (sliderValue ** 2); i++){
        const div = document.createElement("div");
        div.classList.add("newDiv");
        const newHeight = 348 / sliderValue;
        div.style.height = newHeight + 'px';
        div.style.width = newHeight + 'px';
        divContainer.appendChild(div);
    }
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