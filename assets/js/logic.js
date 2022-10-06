// variables to keep track of quiz state
// currentQuestion
var currentQuestion = [];
// time

// timerId


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var startBtnEl = document.getElementById("start-btn");
var submitBtnEl = document.getElementById("submit");
var startScreenEl = document.getElementById("start-screen");
var initialsEl = document.getElementById("initials")
var timeRemainingEl = document.getElementById("timeRemaining");

/// FUNCTION TO START THE QUIZ
function startQuiz() {
    // hide start screen 
    startScreenEl.style.display = "none";
    // un-hide questions section

    // start timer
    
    // show starting time

    // getQuestion();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
// function getQuestion() {
    // get current question object from array

    // Get random index from array of options
    // var questionIndex = Math.floor(Math.random() * currentQuestion.length);

    // update title with current question

    // clear out any old question choices

    // loop over choices
    // FOR {
    // create new button for each choice

    // display on the page

    // } 
// }

/// FUNCTION FOR CLICKING AN ANSWER ///
// function answerClick(event) {

    // if the clicked element is not a choice button, do nothing.
    // if (something) {

    // }

    // if (something) {
        // check if user guessed wrong
        // penalize time

        // display new time on page

        // give them feedback, letting them know it's wrong
    // } else {
        // give them feedback, letting them know it's right
    // }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
// }

/// FUNCTION TO END THE QUIZ ///
// function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section
// }

/// FUNCTION FOR UPDATING THE TIME ///
// function clockTick() {
    // update time

    // check if user ran out of time
// }

// function saveHighScore() {
    // get value of input box - for initials

    // make sure value wasn't empty

    // get saved scores from localstorage, or if not any, set to empty array


    // format new score object for current user

    // save to localstorage

    // redirect to next page
// }

/// CLICK EVENTS ///
// user clicks button to submit initials
// submitBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();
//     saveHighScore();
// });
// user clicks button to start quiz
startBtnEl.addEventListener("click", startQuiz);
// user clicks on element containing choices
