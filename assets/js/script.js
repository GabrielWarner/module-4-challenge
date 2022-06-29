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

var timeLeft = 60;
var currentQuestion = -1;

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


  startButton.addEventListener("click", startGame);



function startGame() {
    //timer that starts at 60 seconds
var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
  
      timeLeft--;
    } else {
      timerEl.textContent = "";
  
      clearInterval(timeInterval);
    }
  }, 1000);
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
  console.log(displayQuestion)
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
  console.log(this.value)
  if(this.value !== questions[currentQuestion].answer){
    timeLeft -= 10;
  }else if(currentQuestion === questions.length-1){
    endGame()
  }else{
    renderQuestion()
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
  //reveal highscore div
  //ask for initials
  //retreive highscores from local storage
  //check if null, if find high scores add current initials to list along with others (array of objects)
  //render array in ordered list
  //re save new array to ocal storage that includes newest score
}

