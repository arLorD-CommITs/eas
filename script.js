const mainContainer = document.createElement('div');
const htmlBody = document.querySelector('body');

htmlBody.appendChild(mainContainer);
mainContainer.setAttribute('class', 'mainContainer');

for (let i = 0; i < 256; i++) {
    let box = document.createElement('div');
    mainContainer.appendChild(box);
}

const boxes = document.querySelectorAll('mainContainer div');
boxes.forEach(function(item) {
    item.addEventListener('mouseover', mouseOver());
});

function mouseOver(){
    alert('hovered');
    //let colorRandomizer = '#' + Math.floor(Math.random()*16777215).toString(16); 
    //this.style.backgroundColor = colorRandomizer;
}