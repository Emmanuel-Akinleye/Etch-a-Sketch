const populateBoard = (size) =>  {
    var board = document.querySelector('.board')
    var squares = document.querySelectorAll('div')
    squares.forEach((div) => div.remove);
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    var amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement('beforeend', square); 
    }
}
populateBoard(16)
const changeSize = (input) => {
    if (input >= 2 || input <= 100) {
        populateBoard(input);
    }
    else {
        alert("Wrong Input"); 
    }
}

