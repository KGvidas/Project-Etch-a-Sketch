// Make the slider fill up with color
document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.getElementById('myRange');
    
    slider.addEventListener('input', function() {
      const value = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #eeb100 ${value}%, #f3f3f3 ${value}%)`;
    });
  });
  
let slider = document.getElementById('myRange');
let sliderValueDiv = document.querySelector(".sliderValueDiv");

slider.addEventListener("input", () =>{
let sliderValue = slider.value
sliderValueDiv.textContent = sliderValue + " x " + sliderValue;
})