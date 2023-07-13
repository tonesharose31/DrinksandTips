const gameSection = document.getElementById("game-section");

let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
 
function createGameBoard() {
    gameSection.innerHTML = '';

    for(let i=0; i<9; i++) {
        const square = document.createElement('div');
        square.classList.add("square", "empty");
        square.addEventListener('click', () => squareClicked(i));
        gameSection.appendChild(square);
    }
}

function squareClicked(index){
    if(gameBoard[index]=== ""){
        gameBoard[index] = currentPlayer;
        const squares = gameSection.getElementsByClassName('square');
        const square = squares[index];
        square.textContent = currentPlayer;
        square.classList.remove('empty');

        currentPlayer = currentPlayer === 'X'? 'O' : 'x';
        gameSection.textContent = `Player ${currentPlayer}'s turn`; 
    }
}
createGameBoard();
