// variables to keep track of quiz state
// currentQuestion
// var currentQuestion = [question-1, question-2, question-3];
// var posedQuestions = [];
// // time
var time = 59;
// timerId


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var startBtnEl = document.getElementById("start-btn");
var submitBtnEl = document.getElementById("submit");
var startScreenEl = document.getElementById("start-screen");
var initialsEl = document.getElementById("initials");
var stopWatchEl = document.getElementById("stop-watch")
var timeRemainingEl = document.getElementById("time-remaining"); 
var endScreenEl = document.getElementById("end-screen");
// var index = currentQuestion[]

/// FUNCTION TO START THE QUIZ
function startQuiz() {
    // hide start screen 
    startScreenEl.setAttribute("class", "hide");

    // un-hide timer
    stopWatchEl.removeAttribute("class");

    // un-hide questions section
    questionsEl.removeAttribute("class");

    // start timer
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
          time--;
          timeRemainingEl.textContent = time;
          if(time === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // // Calls function to create and append image
            // sendMessage();
          }
      
        }, 1500);
        
      }
    setTime();    
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
        // var feedbackEl = document.getElementById("feedback") {
        //     feedbackEl.removeAttribute("class");
        // }
    // } else {
        // give them feedback, letting them know it's right
    // }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
    // if (currentQuestion[])
    // if so, end the quiz
    // function quizEnd();
    // else, get the next question
// }

/// FUNCTION TO END THE QUIZ ///
// function quizEnd() {
    // stop timer

    // hide questions section
    // questionsEl.setAttribute("class", "hide");
    // show end screen
    // endScreenEl.removeAttribute("class", "hide");

    // show final score

    
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
