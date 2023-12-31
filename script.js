const container = document.querySelector('#gridContainer');

function createGrid(x) {
    for (let i = 0; i < x ** 2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = ((720 / x) - 2) + "px";
        square.style.height = ((720 / x) - 2) + "px";
        square.style.backgroundColor = 'white';
        gridContainer.appendChild(square);
    }
}

function colorGrey() {
    for (let i = 0; i < x ** 2; i++) {
        let square = document.querySelector('.square');
        console.log(gridContainer.appendChild(square));
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'dimgrey';
        });
    }
}

function colorRandom() {
    for (let i = 0; i < x ** 2; i++) {
        let square = document.querySelector('.square');
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        console.log(gridContainer.appendChild(square));
        square.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
        });
    }
}

function resetGrid() {
    let reset = document.getElementById('reset');
    let squares = document.getElementsByClassName('square');
    
    for (let i = squares.length - 1; i >= 0; i--) {
        console.log(squares[i].remove());
    }
    let x = prompt("Enter a number from 1 to 100 for the length.");
    confirmLength();
    createGrid(x);
}

function clearGrid() {
    let clear = document.getElementById('clear');
    let squares = document.getElementsByClassName('square');
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = 'white';
        }
}

function confirmLength() {
    while (x < 1 || x > 100 || isNaN(x)) {
        alert("Must be a number from 1 to 100.");
        x = prompt();
    }
}

let x = prompt("Enter a number from 1 to 100 for the length.");
confirmLength();
createGrid(x);


// - Function below disabled for now -
//function myFunction() {
//    document.body.classList.toggle('switch-on');
//}