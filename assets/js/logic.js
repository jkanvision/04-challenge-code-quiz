// variables to keep track of quiz state
var currentQuestion = 0;
var time = 59;
var feedbackTimer = 2;


// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var startBtnEl = document.getElementById("start-btn");
var submitBtnEl = document.getElementById("submit");
var startScreenEl = document.getElementById("start-screen");
var initialsEl = document.getElementById("initials");
var stopWatchEl = document.getElementById("stop-watch")
var timeRemainingEl = document.getElementById("time-remaining"); 
var endScreenEl = document.getElementById("end-screen");
var feedbackEl = document.getElementById("feedback"); 

// link to questions script file
var scriptTag = document.createElement("script");
scriptTag.src = "assets/js/questions.js";
document.body.appendChild(scriptTag);

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
            clearInterval(timerInterval);
            quizEnd();
          }
        }, 1500);
      }
    setTime();    
    getQuestion(currentQuestion);
}




/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
    
    for (var i = 0; i < questions[currentQuestion].title; i++);
    // console.log(currentQuestion);

    // console.log(questions[currentQuestion].title);
    
    // update title with current question
    document.getElementById("question-title").textContent = questions[currentQuestion].title;
    // clear out any old question choices
    document.getElementById("choices").innerHTML = "";

    // loop over choices
    for (i = 0; i < questions[currentQuestion].choices.length; i++) {

        // create new button for each choice
        var choiceBtn = document.createElement("button");

        // add text to choice buttons
        choiceBtn.textContent = questions[currentQuestion].choices[i];

        // style choice buttons

        // display on the page
        document.getElementById("choices").appendChild(choiceBtn);

        // checks for choice button click
        choiceBtn.addEventListener("click", answerClick);

    }
}

getQuestion(currentQuestion);

/// FUNCTION FOR CLICKING AN ANSWER ///
function answerClick(event) {
    console.log("click");
    // if the clicked element is not a choice button, do nothing.
    // if () {

    // }

    // check for wrong guess
    if (this.textContent !== questions[currentQuestion].answer) {
        
        // penalize time

        // display new time

        // provide feedback
        feedbackEl.removeAttribute("class", "hide");
        feedbackEl.textContent = "Wrong!";

    }
      else {
        feedbackEl.textContent = "Correct!";
    }

    // time interval for feedback
    function removeFeedback() {
        var timerInterval = setInterval(function() {
            feedbackTimer--;
            if (feedbackTimer === 0) {
                clearInterval(timerInterval);
                feedbackEl.setAttribute("class", "hide");
            }
        }, 1000);

    }

    removeFeedback();

    // add 1 to currentQuestion
    currentQuestion++;

    // check for next question or end quiz 
    if (currentQuestion === questions.length) {
        quizEnd();
    } 
    else {
        
        getQuestion(currentQuestion);

    }
    
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
//     // hide timer
    stopWatchEl.setAttribute("class", "hide");

    // hide questions section
    questionsEl.setAttribute("class", "hide");

    // show end screen
    endScreenEl.removeAttribute("class", "hide");

    // show final score

}

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
// event listener for clear highscores button

// user clicks button to submit initials
// submitBtnEl.addEventListener("click", function(event) {
//     event.preventDefault();
//     saveHighScore();
// });

// user clicks on element containing choices


// user clicks button to start quiz
startBtnEl.addEventListener("click", startQuiz);
