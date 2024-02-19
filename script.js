const mainContainer = document.createElement('div');
const htmlBody = document.querySelector('body');
const button = document.createElement('button');
const buttonText = document.createTextNode('Click me!');

button.appendChild(buttonText);
htmlBody.appendChild(mainContainer);
htmlBody.appendChild(button);
mainContainer.setAttribute('class', 'mainContainer');

let rows = 16;
let columns = 16;

function createGrid() {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('div');
        mainContainer.appendChild(row);
        row.style.flex = '1 0 auto';
        row.style.display = 'flex';

        for (let j = 0; j < columns; j++) {
            let column = document.createElement('div');
            mainContainer.childNodes[i].appendChild(column);
            column.style.flex = '1 0 auto';
            column.setAttribute('class', 'box');

        }
    }
    
}



createGrid();

const boxes = document.querySelectorAll('.mainContainer .box');
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


let rowNodeList = document.querySelectorAll('.mainContainer > div');
function removeBoxes() {
    for ( let i = rowNodeList.length - 1 ; i >= 0 ; i-- ) {
        rowNodeList[i].remove();
    }
}