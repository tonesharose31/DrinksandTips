

const cocktailForm = document.querySelector("#gameForm");
const randomCocktail= document.getElementById("randomCocktail");



cocktailForm.addEventListener("submit", (e) => { 
  e.preventDefault();
  
  const ingredientInput= document.getElementById("ingredientInput").value;
  const numOfDrinksInput = document.getElementById("numOfDrinksInput").value;
  const BASE_URL= "https://www.thecocktaildb.com/api/json/v1/1/";

  const ingredientSearch = `filter.php?i=${ingredientInput}`
  

  const searchUrl = BASE_URL + ingredientSearch;

  fetch(searchUrl)
  .then(response=> response.json())
  .then(data => { 
    console.log(data)
   const allCocktail = data.drinks;
   
   if(allCocktail) { 
     randomCocktail.innerHTML = "";
     const numOfDrinks = Math.min(allCocktail.length,numOfDrinksInput);
     for(let i= 0; i < numOfDrinks; i++){ 
     
     const cocktailElement= document.createElement("div");
     cocktailElement.className = "col";
     const cocktail = allCocktail[i]
     cocktailElement.innerHTML =
         `<div class ="card-body">
         <img src= "${cocktail.strDrinkThumb}" alt= ${cocktail.strDrink}" class="card-img-top"/>
         <h2>${cocktail.strDrink}</h2>
         <h3>${cocktail.strIngredient}<h3>
         </div>
         `; 
         randomCocktail.appendChild(cocktailElement);
     }
   
   }else{ 
    randomCocktail.innerHTML = 
    "<p>No cocktails found.</p>";
  }
})
  .catch(err => console.log(err));
});
