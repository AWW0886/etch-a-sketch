const container = document.querySelector('#container');

function createGrid(x) {
    for (let i = 0; i < x ** 2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = ((720 / x) - 2) + "px";
        square.style.height = ((720 / x) - 2) + "px";
        container.appendChild(square);
    //if (input === 1) {
        square.addEventListener('mouseover', function(e) {
            //e.target.style.backgroundColor = 'steelblue';
            e.target.style.backgroundColor = randomColor();
        });
    //} else if (input === 2) {
    //    square.addEventListener('mouseover', function(e) {
    //        e.target.style.backgroundColor = 'steelblue';
            //e.target.style.backgroundColor = randomColor();
    //    });        
    //}
}
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = 'rgb('+ r +','+ g +','+ b +')';
    return rgbColor; 
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

function colorChoice() {
    //while (isNaN(color)){
    //    alert("Please enter either 1 or 2.")
    //    input = prompt();
    //}
    if (color === 1) {
        return color;
    } else {
        alert("Please enter either 1 or 2.")
        color = prompt();
    }
}


let x = prompt("Enter a number from 1 to 100 for the length.");
confirmLength();
//let color = prompt("Choose 1 for blue, or 2 for random.");
//colorChoice();
createGrid(x);