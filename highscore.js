// var scoreForm = document.getElementById("score-form");
// var scoreInput = document.getElementById("score-text");
// var scoreList = document.getElementById("score-list");
// var scoreMe = document.getElementById("#scoreMe")

// var scores = [];

// function renderScores() {

//     scoreList.innerHTML = "";
//     scoreMe.textContent = scores.length;

//     for (var i = 0; i < scores.length; i++) {
//         var score = scores[i];

//         var li = document.createElement("li");
//         li.textContent = score;
//         li.setAttribute("data-index", i);

//         var button = document.createElement("button");
//         button.textContent = "Complete!";

//         li.appendChild(button);
//         scoreMe.appendChild(li);
//     }
// }

// function init() {
//   // Get stored todos from localStorage
//   var scoreInputs = JSON.parse(localStorage.getItem("scores"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (scoreInputs !== null) {
//     scores = scoreInputs;
//   }

//   // This is a helper function that will render scores to the DOM
//   renderScores();
// }

// function storescores() {
//   // Stringify and set key in localStorage to scores array
//   localStorage.setItem("scores", JSON.stringify(scores));
// }

// // Add submit event to form
// scoreForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var scoreText = scoreInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (scoreText === "") {
//     return;
//   }

//   // Add new todoText to scores array, clear the input
//   scores.push(scoreText);
//   scoreInput.value = "";

//   // Store updated scores in localStorage, re-render the list
//   storeScores();
//   renderScores();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function(event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     scores.splice(index, 1);

//     // Store updated scores in localStorage, re-render the list
//     storeScores();
//     renderScores();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init()
