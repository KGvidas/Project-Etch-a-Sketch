document.addEventListener('DOMContentLoaded', (event) => {
    // Get references to DOM elements
    const slider = document.getElementById('myRange');
    const divContainer = document.querySelector(".forDivContainer");
    const sliderValueDiv = document.querySelector(".sliderValueDiv");
    const colorPicker = document.getElementById("colorPicker");
    const colorPickerBtn = document.querySelector(".color-picker");
    const colorBgBtn = document.querySelector(".color-pickerBG");
    const colorBgPicker = document.getElementById("color-pickerBG");
    const eraserBtn = document.querySelector(".eraser");
    const clearBtn = document.querySelector(".clear")

    // Initialize brush color and background color
    let brushColor = colorPicker.value;
    let bgColor = "#f3f3f3"; // Default background color

    // Event listener for slider input
    slider.addEventListener('input', function() {
        const value = (this.value - this.min) / (this.max - this.min) * 100;
        this.style.background = `linear-gradient(to right, #eeb100 ${value}%, #f3f3f3 ${value}%)`;
        let sliderValue = slider.value;
        resetGrid();
        updateSliderValue(sliderValue);
        createGrid(sliderValue);
    });

    // Event listener for color picker input
    colorPicker.addEventListener("input", () => {
        brushColor = colorPicker.value;
    });

    // Event listener for color picker button click
    colorPickerBtn.addEventListener('click', () => colorPicker.click());

    // Event listener for background color picker button click
    colorBgBtn.addEventListener('click', () => colorBgPicker.click());

    // Event listener for background color picker input
    colorBgPicker.addEventListener("input", () => {
        bgColor = colorBgPicker.value; 
        updateBgColor(bgColor);
    });

    // Event listener for eraser button click
    eraserBtn.addEventListener("click", () => {
        brushColor = bgColor;
    });

    // Event listener for clear button click
    clearBtn.addEventListener("click", () => {
        let allDivs = document.querySelectorAll(".newDiv");
        allDivs.forEach(element => {
            element.style.backgroundColor = bgColor;
        });

    }
    )
    // Function to create the grid
    function createGrid(sliderValue) {
        const gridSize = sliderValue ** 2;
        const newSize = 348 / sliderValue;
        const gridElements = createGridElements(gridSize, newSize, bgColor);
        appendGridElements(gridElements);
        addHoverEffect(gridElements);
    }

    // Function to create grid elements
    function createGridElements(gridSize, newSize, bgColor) {
        const gridElements = [];
        for (let i = 0; i < gridSize; i++) {
            const div = document.createElement("div");
            div.classList.add("newDiv");
            styleGridElement(div, newSize, bgColor);
            gridElements.push(div);
        }
        return gridElements;
    }

    // Function to style grid elements
    function styleGridElement(div, newSize, bgColor) {
        div.style.height = `${newSize}px`;
        div.style.width = `${newSize}px`;
        div.style.backgroundColor = bgColor;
    }

    // Function to append grid elements to the container
    function appendGridElements(gridElements) {
        gridElements.forEach(div => divContainer.appendChild(div));
    }

    // Function to add hover effect to grid elements
    function addHoverEffect(gridElements) {
        gridElements.forEach((div) => {
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = brushColor;
            });
        });
    }

    // Function to reset the grid
    function resetGrid() {
        let allDivs = document.querySelectorAll(".newDiv");
        allDivs.forEach(element => {
            element.parentNode.removeChild(element);
        });
    }

    // Function to update the slider value display
    function updateSliderValue(sliderValue) {
        sliderValueDiv.textContent = sliderValue + " x " + sliderValue;
    }

    // Function to update the background color of all grid elements
    function updateBgColor(bgColor) {
        let allDivs = document.querySelectorAll(".newDiv");
        allDivs.forEach(div => {
            div.style.backgroundColor = bgColor;
        });
    }

    // Function to initialize the container with a single default div
    function initializeContainer() {
        const defaultDiv = document.createElement("div");
        defaultDiv.classList.add("newDiv");
        defaultDiv.style.height = '348px';
        defaultDiv.style.width = '348px';
        divContainer.appendChild(defaultDiv);
        addHoverEffect([defaultDiv]);
    }

    // Initialize the container on page load
    initializeContainer();
});
