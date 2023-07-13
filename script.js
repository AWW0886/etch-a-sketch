const container = document.querySelector('#container');

//function createSquare() {
//    let square = document.createElement('div');
//    square.classList.add('square');
//    content.appendChild(square);
//}

function createGrid(x) {
    for (let i = 0; i < x ** 2; i++) {
        //const content = document.createElement('div');
        //content.classList.add('content');
        //content.textContent = 'Let\'s make a grid!';
        //content.textContent = 'Hi!';

        //container.appendChild(content);
        //for (j = 0; j < x; j++) {
            const content = document.createElement('div');
            content.classList.add('content');
            content.style.width = (720 / x) + "px";
            content.style.height = (720 / x) + "px";
            //content.textContent = 'Bye!';
 
            container.appendChild(content);
            //createSquare();
        //}
    }
}

let x = prompt();
createGrid(x);