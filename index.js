var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's Your Name? ");

console.log("Hello! " + userName + ". Welcome to HOW WELL DO YOU KNOW ME? Quiz.")

console.log("");

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("You are Correct ｡^‿^｡ ");
    score = score + 1;
  } else {
    console.log("You are Wrong ( ͡° ʖ̯ ͡°) ")
  }
  console.log("Your score is: " + score);
  console.log("----------------")
}

var questions = [
  {
    question: "What's my Sur Name? ",
    answer: "avala"
  },

  {
    question: "What's my fav TV Series of all time? ",
    answer: "ted lasso"
  },

  {
    question:"Who is my fav captain? ",
    answer: "morgan"
  },

  {
    question:"What's my fav food? ",
    answer:"biryani"
  },

  {
    question: "Who is my fav football player? ",
    answer:"messi"
  }
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your Final Score is: " + score);

var highScores = [
  {
    name: "Santosh",
    score: 5
  },
  {
    name: "Deepak",
    score: 5
  }
]

console.log("High Scores List");

for (var j = 0; j < highScores.length; j++) {
  var currentHighScore = highScores[j];
  console.log(currentHighScore.name + ": " + currentHighScore.score);
}

console.log("Please send me a screenshot, if you made the high score.")