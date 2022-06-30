//Button is clicked and timer starts counting down
//Question pops up along with 4 choices
//when user answers question another question pops up
//after a user answers a question it will say Correct or Wrong
//At the end the users score is shown and user is able to enter initials
var startButton = document.querySelector("#start-game");
var containerEl = document.querySelector(".questions-container-hidden");
var timerEl = document.querySelector(".timer");
var questionEl = document.getElementById('question')
var answerEl = document.querySelector("#answers")
var highscoreEl = document.getElementById('highscore')
var highscoretextEl = document.getElementById('initial-text')
var scoreTrackerEl = document.getElementById('score-tracker')

var timeLeft = 60;
var currentQuestion = -1;
var scoreTracker = 0;

var highscores = [
  {
    initial: []
  },
  {scores:[]
  }
]

var questions = [
    {
      question: "What exercise targets the hamstrings?",
      answers: ["Romanian Dead Lifts","Skull Crushers","Dumbell Curls","Bent Over Row",],
      answer: "Romanian Dead Lifts",
    },
    {
      question: "How many laps on a track does it take to reach 1 mile?",
      answers: ["10","4","6","8",],
      answer: "4",
    },
    {
      question: "What exercise targets the Glutes?",
      answers: ["Tricep Extensions","Bench Press","Bicep Curls","Hip Thrusts",],
      answer: "Hip Thrusts",
    },
  ];

  

function timeInterval(){
  if (timeLeft > 1) {
    timerEl.textContent = timeLeft;
    timeLeft--;
  } else {
    timerEl.textContent = "";
    clearInterval(timeInterval);
    timerEl.textContent = "";
    endGame()
  }
}

  startButton.addEventListener("click", startGame);


  //seperated set interval and the function so that I can call it in start game
 // var timeInterval = setInterval(function () {
  //  if (timeLeft > 1) {
  //    timerEl.textContent = timeLeft;
  //    timeLeft--;
 //   } else {
  //    timerEl.textContent = "";
  //    clearInterval(timeInterval);
  //  }
  //}, 1000);



function startGame() {
    //timer that starts at 60 seconds
  setInterval(timeInterval, 1000)
  //hides the start game button
  startButton.classList.add("hide");
  containerEl.classList.add("questions-container");


  renderQuestion()
}



function renderQuestion(){
  currentQuestion++
  //get next question from array
  //render to page
  const displayQuestion = questions[currentQuestion]
  questionEl.textContent= displayQuestion.question
  answerEl.innerHTML=""
  displayQuestion.answers.forEach(function (answer){
    var buttonEl = document.createElement("button")
    buttonEl.setAttribute("value", answer)
    buttonEl.setAttribute("class", "btn")
    buttonEl.textContent=answer
    buttonEl.onclick=checkAnswer
    answerEl.appendChild(buttonEl)
  })


}


function checkAnswer(event){
  if(this.value !== questions[currentQuestion].answer){
    timeLeft -= 10;
  }else if(currentQuestion === questions.length-1){
    scoreTracker++
    endGame()
    //removes timer when game is finished
    timerEl.remove
  }else{
    renderQuestion()
    scoreTracker++
  }

  //called when a user clicks on a button
  //every button will have an event listener
 //event.target.textcontent
 //compare with real answwer
 //if correct add score and if not deduct time
 //check to see if there are questions left, end game if none, call render if
 //call render function
}


function endGame(){
  //hide question container div
  containerEl.classList.add("hide");
  //reveal highscore div
  scoreTrackerEl.textContent=`${scoreTracker}/3`
  highscoreEl.classList.add("highscore")
  highscoreEl.addEventListener
  //ask for initials
  //retreive highscores from local storage
  //check if null, if find high scores add current initials to list along with others (array of objects)
  //render array in ordered list
  //re save new array to ocal storage that includes newest score
}

function storeScores(){
  localStorage.setItem("highscores", JSON.stringify(highscores))
}

highscoreEl.addEventListener("submit", function(event) {
  event.preventDefault();

  var highscoretext = highscoretextEl.value.trim();

  // Return from function early if submitted todoText is blank
  if (highscoretext === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  highscores.push() = highscoretext
  //highscores[0].push(highscoretext);
  highscoretextEl.value = "";

  // Store updated todos in localStorage, re-render the list
  storeScores();
  //renderTodos();
});