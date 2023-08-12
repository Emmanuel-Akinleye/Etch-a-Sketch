let colour  = 'black'
let click = true;
const populateBoard = (size) =>  {
    var board = document.querySelector('.board')
    var squares = document.querySelectorAll('div')
    squares.forEach((div) => div.remove);
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    

    var amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.addEventListener("mouseover", colourSquare)
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square); 
    }
}
populateBoard(16)
const changeSize = (input) => {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none'
        populateBoard(input);
    }
    else {
        document.querySelector('.error').style.display = 'Flex';
        alert("Wrong Input"); 
    }
}



function colourSquare() {
    if (click) {
        if (colour === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else {
            this.style.backgroundColor = colour
        }
    }
}
const changeColour = (choice) => {
    colour = choice;
}
const reset = () => {
    var board = document.querySelector('.board')
    var squares = document.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click) {
            document.querySelector('.mode').textContent = "Mode: Colouring";
        }
        else  {
            document.querySelector('.mode').textContent = "Mode: Not Colouring";
        }
    }
})