
function createGameBoard() {
    let gameSection = document.querySelector("game-section");
  for (let i = 0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList.add('square', 'empty');

    square.addEventListener('click',function() { if(this.classList.contains("empty")){
        console.log("square is empty");
        makeMoves(this);

    }else{
        console.log("square is not empty");
    }
});
gameSection.appendChild(square); 



function resetGame() {
  let squares = gameSection.querySelectorAll ('square');
 squares.forEach(square => {
     square.classList.add('empty');
     square.textContent = '';
  });
  currentPlayer = 'X';
  gameSection.textContent = '';
}

button.addEventListener('click', resetGame);

createGameBoard();