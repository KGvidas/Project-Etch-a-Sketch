document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.getElementById('myRange');
    
    slider.addEventListener('input', function() {
      const value = (this.value - this.min) / (this.max - this.min) * 100;
      this.style.background = `linear-gradient(to right, #eeb100 ${value}%, #f3f3f3 ${value}%)`;
    });
  });
  