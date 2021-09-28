
var secondsLeft = 30;
var timerElement = document.getElementById("timer-element");
var submitButton = document.getElementById("submit");
var choiceA = document.getElementById("choice1_content");
var choiceB = document.getElementById("choice2_content");
var choiceC = document.getElementById("choice3_content");
var choiceD = document.getElementById("choice4_content");
var choiceE = document.getElementById("choice5_content");
var choiceF = document.getElementById("choice6_content");
var choiceG = document.getElementById("choice7_content");
var choiceH = document.getElementById("choice8_content");
var selectionContent = document.getElementById("content");
var userAnswers = document.querySelectorAll(".user-choice");
var quizAsk = document.getElementById("quiz-ask");

// set default score and beginning quiz question to = 0
let score = 0;
let quizNow = 0;

// define quiz questions within an array and use strings to assign correct answer.
var questionArray = [
    {
        question: "What is Bangalore's TACTICAL ability?",
        a: "Smoke Grenades",
        b: "Dome Shield",
        c: "Phase Invisible",
        d: "Speed Boost",
        correct: "choice1",
    },
    {
        question: "What is Lifeline's ULTIMATE ability?",
        a: "Fast Healing",
        b: "Dome Shield",
        c: "Care Package",
        d: "Health Drone",
        correct: "choice3",
    },
    {
        question: "What is Bloodhound's PASSIVE ability?",
        a: "Area Scanning",
        b: "Changing Shape",
        c: "Speed Boost",
        d: "Movement Tracking",
        correct: "choice4",
    },
    {
        question: "What is Revenant's ULTIMATE ability?",
        a: "Enememy Silencing",
        b: "Death Totem",
        c: "Boosted Climbing",
        d: "Phase Invisible",
        correct: "choice2",
    },
];

// declare function to run the quiz
runTest()
// create function to run the quiz
function runTest() {

    // declare function to remove previous answer selection from previous questions, so that answers do not carry over question after question.
    hideAnswers()
    // define variable to be equal to the value/title of the current question within the predefined array of questions
    var quizNowData = questionArray[quizNow]

    // tell the quiz to input new text to represent the current question value/title for each following question
    quizAsk.innerText = quizNowData.question
    choiceA.innerText = quizNowData.a
    choiceB.innerText = quizNowData.b
    choiceC.innerText = quizNowData.c
    choiceD.innerText = quizNowData.d
}

// create the function to remove answers from previous questions 
function hideAnswers() {
    userAnswers.forEach(userAnswer => userAnswer.checked = false)
}

// create function to return selected user answer input to then be called upon for scoring
function inputChoice() {
    let pick 
    userAnswers.forEach(userAnswer => {
        if(userAnswer.checked) {
            pick = userAnswer.id
        }
    })
    return pick
}

// add eventListener for submit button to determine if user selected answer was correct or incorrect --> add if statement to define parameters for correct vs incorrect --> return +/- score value,
submitButton.addEventListener("click", () => {
    
    var pick = inputChoice()
    console.log(pick,questionArray[quizNow].correct)
    if(pick) {
        if(pick === questionArray[quizNow].correct) {
            score++
        } else if(pick !==questionArray[quizNow].correct) {
            secondsLeft = secondsLeft - 5
        }
        quizNow++
        // add if statement to continue running quiz if remaining questions exist. If not, deploy innerHTML message stating the score + "message", and insert new 'reload' button to allow user to take quiz again.
        if(quizNow < questionArray.length) {
            runTest()
        } else {
            clearInterval();
            content.innerHTML = `
            <h2>Your Intelligence Grants You ${secondsLeft}</h2>

            <button onclick="location.reload()">Try Again If You Wish</button>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            `
        }
    }
})

// add EventListener to submit button to initiate timer function. Deploy "message + secondsLeft" with timer countdown. If time runs out before quiz completion, deploy message to indicate user has lost.
submitButton.addEventListener("click", function() {
    timerInterval = setInterval(() => {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerElement.textContent = "System Failure in: " + secondsLeft + " seconds ";
        }
        else if (secondsLeft ===0) {
            timerElement.textContent = "Ha Ha Ha... & You Thought You Could Beat Me? No Way. ";
        }
    }, 1000);
});





