//window.addEventListener('load',logInToPage)
//querySelectors
var cookButton = document.querySelector('.lets-cook-button')
var mealForm = document.querySelector('.meal-form')
var viewCookPot = document.querySelector('.cook-pot-img')
var viewDish = document.querySelector('.view-dish')
var foodDisplayed = document.querySelector('.food-displayed')
var sideMealRadio = document.querySelector('#sideMeal')
var mainMealRadio = document.querySelector('#mainMeal')
var dessertMealRadio = document.querySelector('#dessertMeal')
var logInButton = document.querySelector('.logInButton')
var logInBox = document.querySelector('.container')
var userNameInput = document.querySelector('.user-name')
var topNav = document.querySelector('.topNav')
var header = document.querySelector('.header')
//var container = document.getElementById("popUp").style.visibility = "hidden";


//DISHES
var side = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
]

var mainDish = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
]

var dessert = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
]


//Event Listeners
cookButton.addEventListener('click', displayMeal)
logInButton.addEventListener('click', logInToPage)


// Functions
function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index] }


function displayMeal (){
  event.preventDefault()
  console.log('hello')
  viewCookPot.classList.add('hidden')
  viewDish.classList.remove('hidden')
  foodDisplayed.innerHTML=``
if(sideMealRadio.checked === true){
    foodDisplayed.innerText = getRandomIndex(side)
} else if (mainMealRadio.checked === true) {
  foodDisplayed.innerText = getRandomIndex(mainDish)
} else if (dessertMealRadio.checked === true) {
  foodDisplayed.innerText = getRandomIndex(dessert)
}
}

function logInToPage(){
  event.preventDefault()
  logInBox.classList.add('hidden')
  header.innerText = `What's for Dinner, ${userNameInput.value}?`

}





// var logIn = document.querySelector('#logIn').addEventListener('click', logInToPage)
// function logInToPage(){
// document.querySelector('.popUp').style.display = 'none'
// }
