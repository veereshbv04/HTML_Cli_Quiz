//?embed=1&output=1
var read = require("readline-sync");
var chalk = require("chalk");
console.log(chalk.green("Welcome to the quiz"));
var userName = read.question(console.log(chalk.yellowBright("May I know your name please")));
console.log(chalk.blue("Let's begin the quiz " + chalk.green(userName)));


var score = 0;
var highestScore = 5;

questionsArray=[
 {
   question: "1) what is HTML? ",
   options: ["Markup Language","Human Language", "COmpany Name"],
   ans:"Markup Language" 
  },
  {
   question: "2) What does HTML stands for? ",
   options: ["Hypertext Machine language","Hypertext and links markup language", "Hypertext Markup Language"],
   ans:"Hypertext Markup Language" 
  },
  {
   question: "3) Which of the following HTML Elements is used for making any text bold ? ",
   options: ["<p>","<i>", "<b>"],
   ans:"<b>" 
  },
  {
   question: "4) Which of the following HTML element is used for creating an unordered list? ",
   options: ["<u>","<ul>", "<ol>"],
   ans:"<ul>" 
  },
  {
   question: "5) Which of the following characters indicate closing of a tag? ",
   options: ["|","$","/"],
   ans:"/" 
  },
  {
   question: "6) How many heading tags are there in HTML5? ",
   options: ["1","4","6"],
   ans:"6" 
  },
  {
   question: "7) Which of the following attribute is used to link to any element ",
   options: ["href","a","link"],
   ans:"href"
  },
  {
   question: "8) what is is the purpose of creating 'div' tag ",
   options: ["for creating different section", "for styling pi=urpose", "to add navbar "],
   ans:"for creating different section"
  }
]

function play(question, options, ans){
  console.log("");
  console.log(chalk.yellow(question));
  var userAnswer = read.keyInSelect(options);
  if(options[userAnswer] === ans){
    score= score + 1;
    console.log("Correct Answer, your current score is " + score);
  }else{
    score= score+ 1;
    console.log("Ohh, wrong answer it is, your current score is  " + score);
    console.log(chalk.cyan("Correct answer is " + ans));
  }
}

for(let i=0; i<questionsArray.length; i++ ){
  play(questionsArray[i].question,questionsArray[i].options,questionsArray[i].ans)
}


if(score>highestScore){
  console.log("");
  console.log(chalk.green("Hurrah! your's is the highest score"));
}else{
  console.log(chalk.green("Your total score is " + score));
  console.log("The highest score is ",highestScore);
}

console.log("Thank You for playing the question");