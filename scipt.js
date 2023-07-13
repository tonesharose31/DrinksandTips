
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
}
}


function resetGame() {
  let squares = document.querySelectorAll ('.square');
 squares.forEach(square => {
     square.classList.add('empty');
     square.textContent = '';
  });
 isxPlayerTurn = true;

}

let letsPlayButton = document.querySelector('button');
letsPlayButton.addEventListener("click",letsPlay);

function makeMoves(square){
    if(square.classList.contains("empty")){
        if(isxPlayerTurn){
            square.textContent = "X";

        }else{
            square.textContent = "O";
        }
        square.classList.remove("empty");
        isxPlayerTurn = !isxPlayerTurn;

    }
    
let isxPlayerTurn = true;
    createGameBoard();
}