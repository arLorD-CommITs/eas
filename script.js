const mainContainer = document.createElement('div');
const htmlBody = document.querySelector('body');
const button = document.createElement('button');
const buttonText = document.createTextNode('Click me!');

button.appendChild(buttonText);
htmlBody.appendChild(mainContainer);
htmlBody.appendChild(button);
mainContainer.setAttribute('class', 'mainContainer');

let nOfBoxes = 256;

function createGrid(nOfBoxes) {
    for (let i = 0; i < nOfBoxes; i++) {
        let box = document.createElement('div');
        mainContainer.appendChild(box);
    }
}

createGrid(nOfBoxes);


const boxes = document.querySelectorAll('.mainContainer div');
boxes.forEach(function(item) {
    item.addEventListener('mouseover', function () {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });
});

button.addEventListener('click', function() {
    let popUp = prompt('How many squares per side would you like the new grid to have?');
    Math.floor(+popUp);

    if (popUp > 100) {
        alert('Please enter a value less than 100');
    } else if (popUp <= 100 && popUp >= 1) {
        removeBoxes();
    } else {
        alert('Invalid input');
    }
});

function removeBoxes() {
    for ( let i = boxes.length - 1; i >= 0; i-- ) {
        boxes[i].remove()
    }
}