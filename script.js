const gameSection = document.querySelector('.game-section');
const resetButton = document.querySelector('#reset-button');


let currentPlayer = 'X';
let gameBoard = Array(9).fill('');

function createGameBoard() {
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList.add('square', 'empty');
    square.addEventListener('click', () => handleSquareClick(square, i));
    gameSection.appendChild(square);
  }
}

function handleSquareClick(square, index) {
  if (square.classList.contains('empty')) {
    square.textContent = currentPlayer;
    square.classList.remove('empty');
    gameBoard[index] = currentPlayer;

    if (checkWinner()) {
      announceWinner();
    } else if (checkTie()) {
      announceTie();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }

  return false;
}

function checkTie() {
  return gameBoard.every(square => square !== '');
}

function announceWinner() {
  gameSection.removeEventListener('click', handleSquareClick);
  gameSection.textContent = `Player ${currentPlayer} wins!`;
}

function announceTie() {
  gameSection.removeEventListener('click', handleSquareClick);
  gameSection.textContent = "It's a tie!";
}

function resetGame() {
  gameBoard = Array(9).fill('');
  currentPlayer = 'X';
  gameSection.innerHTML = '';
  createGameBoard();
}

resetButton.addEventListener('click', resetGame);

createGameBoard();




const favoriteNumber = document.querySelector("#randomNumber");
const randomButton = document.querySelector("#gameForm button[type='submit']");
const randomCocktail= document.querySelector("#gameForm article");
// const resetButton = document.querySelector("#resetButton");

const BASE_URL= "https://www.thecocktaildb.com/api/json/v1/1/random.php";

randomButton.addEventListener("click", (e) => { 
  e.preventDefault();

  const id = favoriteNumber.value; 
  
  fetch(BASE_URL)
  .then(response=> response.json())
  .then(data => { 
   const cocktail = data.drinks?.[0];
   if(cocktail) { 
 fetchRandomCocktail(cocktail);
   }else{  showError("No coctails found.")
  }
})

  .catch(err => showError(err));
});
  
  const fetchRandomCocktail = (cocktail) => {

      randomCocktail.innerHTML = 
      ` <article>
      <img src= "${cocktail.strDrinkThumb}" alt= ${cocktail.strDrink}" />
      <h2>${cocktail.strDrink}</h2>
      <p>${cocktail.strInstructions}</p>
      </article>` ; 
    };
      showError("No cocktails found.");
  

  const showError = (err) => {
   randomCocktail.innerHTML = `
    <section class="error">
         <p>There was an error!</p>
         <p class="message">${err}</p>
     </section>
 `;
 }