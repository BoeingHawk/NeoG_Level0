// var userName = readlineSync.question('May I have your name? ');

// console.log('Welcome ' + userName);
let score = 0 

var readlineSync = require('readline-sync');



var questionOne = readlineSync.question('Are you Pulkit ? ');

var asnwerOne = "yes"


if(questionOne == asnwerOne) {
  score = score + 1
  console.log("Right Answer, " + "score" + "= " + score)
}
else console.log("Wrong Answer, " + "score" + " = 0"  )


var questionTwo = readlineSync.question('Is your home town ynr ');

var asnwerTwo = "yes"


if(questionTwo == asnwerTwo) {
  score = score + 1
  console.log("Right Answer, " + "score" + "= " + score)
}
else console.log("Wrong Answer, " + "score" + " = 0"  )


