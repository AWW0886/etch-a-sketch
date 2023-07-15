const container = document.querySelector('#container');

//const button = document.querySelector('#reset');
//    button.addEventListener('click', () => {
//        resetGrid();
//        let x = prompt();
//        confirmLength();
//        createGrid(x);
//    });

//function resetGrid() {
//    document.getElementsByName('div').reset();
//}

function createGrid(x) {
    for (let i = 0; i < x ** 2; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = ((720 / x) - 2) + "px";
        square.style.height = ((720 / x) - 2) + "px";
        container.appendChild(square);
    
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = 'steelblue';
        });
    }
//    let clear = document.getElementById("clear");
//    clear.onclick = function() {
//    let squares = document.getElementsByClassName('square');
//        for (let i = 0; i < x ** 2; i++) {
//            squares[i].style.backgroundColor = 'white';
//        }
//    }
}

function clearGrid() {
    let clear = document.getElementById("clear");
    //clear.onclick = function() {
    let squares = document.getElementsByClassName('square');
        for (let i = 0; i < x ** 2; i++) {
            squares[i].style.backgroundColor = 'white';
        }
    //}
}

function confirmLength() {
    while (x < 1 || x > 100 || isNaN(x)) {
        alert("Must be a number from 1 to 100.");
        x = prompt();
    }
}

let x = prompt();
confirmLength();
createGrid(x);