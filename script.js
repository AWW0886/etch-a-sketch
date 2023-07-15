const container = document.querySelector('#container');

function createGrid(x) {
    for (let i = 0; i < x ** 2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = ((720 / x) - 2) + "px";
        square.style.height = ((720 / x) - 2) + "px";
        container.appendChild(square);
    
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = 'steelblue';
        });
    }
}

function getLength() {
    while (x < 1 || x > 100 || isNaN(x)) {
        alert("Must be a number from 1 to 100.");
        x = prompt();
    }
} 

let x = prompt();
getLength();
createGrid(x);

//const div = document.querySelector('square');
//div.addEventListener('mouseover', () => {
//    div.style.backgroundColor = "blue";
//});