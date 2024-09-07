const container = document.getElementById('container');
const gridRange = document.getElementById('rangeInput');
const colorInput = document.getElementById('color-input');
const clearBtn = document.querySelector('.clear-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const rainbowColors = [
    '#FF5733', 
    '#FF8D1A', 
    '#FFC107', 
    '#FFEB3B', 
    '#CDDC39', 
    '#4CAF50', 
    '#009688', 
    '#00BCD4', 
    '#2196F3', 
    '#3F51B5', 
    '#673AB7', 
    '#9C27B0', 
    '#E91E63', 
    '#F44336', 
    '#C2185B', 
    '#D32F2F', 
    '#F57C00', 
    '#00796B', 
    '#0288D1', 
    '#7B1FA2'  
];


let isRainbowMode = false;

function updateValue(val) {
    document.getElementById('rangeValue').textContent = val;
    createGrid(val);
}

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}

const createGrid = (rangeVal) => {
    container.innerHTML = '';
    const containerWidth = container.offsetWidth;
    const gridItemSize = containerWidth / rangeVal;
    for (let i = 0; i < rangeVal * rangeVal; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        gridItem.style.border = '1px solid lightgrey'
        container.appendChild(gridItem);  
    
        gridItem.addEventListener('mouseover', () => {
            if (isRainbowMode) {
                gridItem.style.backgroundColor = getRandomColor();
            } else {
                gridItem.style.backgroundColor = `${colorInput.value}`;
            }
        });
    }
}

const clearGrid = () => {
    const gridItems = container.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.style.backgroundColor = 'white';
    })
}

const toggleRainbowMode = () => {
    isRainbowMode = !isRainbowMode;
    if (isRainbowMode) {
        rainbowBtn.classList.add('active');
    } else {
        rainbowBtn.classList.remove('active');
    }
}

clearBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', toggleRainbowMode);

createGrid(gridRange.value);



