
var secondsLeft = 30;
var timerElement = document.getElementById("timer-element");
var startButton = document.getElementById("start-btn");
var submitButton = document.getElementById("submit");
var timerInterval
var choiceA = document.getElementById("choice1_content");
var choiceB = document.getElementById("choice2_content");
var choiceC = document.getElementById("choice3_content");
var choiceD = document.getElementById("choice4_content");
var selectionContent = document.getElementById("content");
var userAnswers = document.querySelectorAll(".user-choice");
var quizAsk = document.getElementById("quiz-ask");

let score = 0
let quizNow = 0

var questionArray = [
    {
        question: "What is Bangalore's TACTICAL ability?",
        a: "Smoke Grenades",
        b: "Dome Shield",
        c: "Phase Invisible",
        d: "Speed Boost",
        correct: "a",
    },
    {
        question: "What is Lifeline's ULTIMATE ability?",
        a: "Fast Healing",
        b: "Dome Shield",
        c: "Care Package",
        d: "Health Drone",
        correct: "c",
    },
    {
        question: "What is Bloodhound's PASSIVE ability?",
        a: "Area Scanning",
        b: "Changing Shape",
        c: "Speed Boost",
        d: "Movement Tracking",
        correct: "d",
    },
    {
        question: "What is Revenant's ULTIMATE ability?",
        a: "Enememy Silencing",
        b: "Death Totem",
        c: "Boosted Climbing",
        d: "Phase Invisible",
        correct: "b",
    },
];

runTest()

function runTest() {

    deselectAnswers()
    var quizNowData = questionArray[quizNow]

    quizAsk.innerText = quizNowData.question
    choiceA.innerText = quizNowData.a
    choiceB.innerText = quizNowData.b
    choiceC.innerText = quizNowData.c
    choiceD.innerText = quizNowData.d
}

function deselectAnswers() {
    userAnswers.forEach(userAnswer => userAnswer.checked = false)
}

function inputChoice() {
    let pick 
    userAnswers.forEach(userAnswer => {
        if(userAnswer.checked) {
            pick = userAnswer.id
        }
    })
    return pick
}

submitButton.addEventListener("click", () => {
    var pick = inputChoice()
    if(pick) {
        if(pick === questionArray[quizNow].correct) {
            score++
        }
        quizNow++

        if(quizNow < questionArray.length) {
            runTest()
        } else {
            content.innerHTML = `
            <h2>Your Intelligence Grants You ${score}/${questions.length} correct answers</h2>

            <button onclick="location.reload()">Try Again If You Wish</button>
            `
        }
    }
})
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
});




