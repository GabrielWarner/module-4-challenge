//Button is clicked and timer starts counting down
//Question pops up along with 4 choices
//when user answers question another question pops up
//after a user answers a question it will say Correct or Wrong
//At the end the users score is shown and user is able to enter initials
var startButton = document.querySelector("#start-game");
var containerEl = document.querySelector(".questions-container-hidden");
var timerEl = document.querySelector(".timer");

var timeLeft = 60;

var questions = [
    {
      question: "What exercise targets the hamstrings?",
      choice1: "Romanian Dead Lifts",
      choice2: "Skull Crushers",
      choice3: "Bent Over Row",
      choice4: "Dumbell Curls",
      answer: "Romanian Dead Lifts",
    },
    {
      question: "How many laps on a track does it take to reach 1 mile?",
      choice1: "10",
      choice2: "4",
      choice3: "6",
      choice4: "8",
      answer: "4",
    },
    {
      question: "What exercise targets the Glutes?",
      choice1: "Tricep Extensions",
      choice2: "Bench Press",
      choice3: "Bicep Curls",
      choice4: "Hip Thrusts",
      answer: "Hip Thrusts",
    },
  ];



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
  for (let i = 0; i < array.questions; i++) {
    const element = array[i];
  }
}

startButton.addEventListener("click", startGame);
