const container = document.querySelector('#container');

function createDiv() {
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = 'Let\'s make a grid!';

            container.appendChild(content);
        }
    }
}

createDiv();