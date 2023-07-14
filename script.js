const container = document.querySelector('#container');

function createGrid(x) {
    for (let i = 0; i < x ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = ((720 / x) - 2) + "px";
        square.style.height = ((720 / x) - 2) + "px";
        container.appendChild(square);
    }
}

function getLength() {
    //let x = prompt();
    while (x < 1 || x > 100) {
        alert("Number must be from 1 to 100.");
        x = prompt();
    }
}

let x = prompt();
getLength();
createGrid(x);