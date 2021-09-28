let score = 0;
let quizNow = 0;
var secondsLeft = 60;
var timerElement = document.getElementById("timer-element");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var timerInterval
let quizAction = 0;
var choice1 = document.getElementById("choice1_content");
var choice2 = document.getElementById("choice2_content");
var choice3 = document.getElementById("choice3_content");
var choice4 = document.getElementById("choice4_content");
var selectionContent = document.getElementById("content");
var quizAsk = document.getElementById("quiz-ask");

startButton.addEventListener("click", function() {
    timerInterval = setInterval(() => {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerElement.textContent = "System Failure in: " + secondsLeft + " seconds ";
        }
        else if (secondsLeft ===0) {
            return score
        }
    }, 1000);
})

var questions = [
    {
        question: "What is Bangalore's TACTICAL ability?",
        1: "Smoke Grenades",
        2: "Dome Shield",
        3: "Phase Invisible",
        4: "Speed Boost",
        correct: "1",
    },
    {
        question: "What is Lifeline's ULTIMATE ability?",
        1: "Fast Healing",
        2: "Dome Shield",
        3: "Care Package",
        4: "Health Drone",
        correct: "3",
    },
    {
        question: "What is Bloodhound's PASSIVE ability?",
        1: "Area Scanning",
        2: "Changing Shape",
        3: "Speed Boost",
        4: "Movement Tracking",
        correct: "4",
    },
    {
        question: "What is Revenant's ULTIMATE ability?",
        1: "Enememy Silencing",
        2: "Death Totem",
        3: "Boosted Climbing",
        4: "Phase Invisible",
        correct: "2",
    },
];

// runTest()

// function runTest()
// var showQuizQuestions = questions[quizNow]

// quizAsk.innerText = showQuizQuestions.question
// choice1.innerText




