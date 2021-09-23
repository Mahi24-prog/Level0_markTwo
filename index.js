var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ? ");

console.log("Welcome " + userName +" to HTML/CSS QUIZ?\n");

var score = 0

var highScore = [{
  name : "Pratik",
  score : 3
},
{
  name : "Hemant",
  score : 2
}]

function check(question, answer) {
  var userAns =  readlineSync.question(question)
  

  if (userAns.toUpperCase() == answer.toUpperCase()){
    console.log("Right!");
    score++
    console.log("Curent Score", score);
    console.log("--------------------");
  }else{
    console.log("Wrong!");
    console.log("Curent Score", score);
    console.log("--------------------");
  }
}

var questionBank = [{
  question : "1. HTML is what type of language ? \n\nA.Scripting Language B.Markup Language\nC.Programming Language D.Network Protocol : ",
  answer : "B"
},
{
  question : "2 The year in which HTML was first proposed _______.\n\nA.1990 B.1980\nC.2000 D.1995 : ",
  answer : "A"
},
{
  question : "3. HTML web pages can be read and rendered by _________.\n\nA.Compiler B.Server\nC.Web Browser D.Interpreter  : ",
  answer : "C"
},
{
  question : "4. Which of the following element is responsible for making the text bold in HTML?.\n\nA.<pre> B.<a>\nC.<b> D.<br>  : ",
  answer : "C"
},
{
  question : "5. Which of the following tag is used to insert a line-break in HTML?.\n\nA.<ul> B.<ol>\nC.<br> D.<b>  : ",
  answer : "C"
}
]

for (i= 0; i<questionBank.length;i++){
  var question = questionBank[i].question;
  var answer = questionBank[i].answer;
  check(question, answer)
}

console.log("YAY! Your SCORED : "+score);
console.log("Check out the high scores, if you should be there ping me and I'll update it");
for (i= 0; i<highScore.length;i++){
  console.log(highScore[i].name,":", highScore[i].score)
}
