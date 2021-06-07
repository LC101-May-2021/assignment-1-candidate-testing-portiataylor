const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName= "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer= "Sally Ride";
let candidateAnswer= "";

let questions=["1) Who was the first American woman in space? ", "2) True or false: 5 kilometers == 5000 meters? ", "3) (5 + 3)/2 * 10 = ?" , "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "5) What is the minimum crew size for the ISS?" ];
let correctAnswers =["Sally Ride" , "True" , "40" , "Trajectory" , "3"];
let candidateAnswers= [];

// TODO 2: modify your quiz app to ask 5 questions //

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let candidateName=input.question("Enter your name: ");

console.log("Candidate Name: " + candidateName );
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i= 0; i< questions.length; i++){
  
// let candidateAnswers= input.question(questions[i]);
// if (candidateAnswers === correctAnswers[i]);
      console.log(`Your answer:  ${candidateAnswers}`);
      console.log(`The correct answer is: ${correctAnswers[i]}`);
  
  //  if (candidateAnswers !== correctAnswers[i]);
  //   console.log(`Incorrect!`);
  //   console.log (`The correct answer is ${correctAnswers[i]}`);
  }
}
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //   
  let numberOfCorrectAnswers= 0;
  //let numberOfQuizQuestions= Number(questions);
  //let numberOfQuizQuestions= candidateAnswers.length;
  let numberOfQuizQuestions= 5;
  let grade= numberOfCorrectAnswers/numberOfQuizQuestions *100;
  let status = "PASSED";
    
    for (let i= 0; i < numberOfQuizQuestions; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase);
    numberOfCorrectAnswers ++;
    }
      // if (grade > 80)
      // status = "PASSED";
      // if (grade < 80) 
      // status = "FAILED";


    // console.log (`>>>Overall Grade: ${grade}% ${numberOfCorrectAnswers} out of ${numberOfQuizQuestions} responses correct)<<<.`);
    
    // console.log (`>>>Status: ${status}<<<`);
    
     }
//         return grade; 
  
// }
   
function runProgram() {
     askForName();
 //TODO 1.1c: Ask for candidate's name //
   console.log(`Candidate Name: ${candidateName}`);
 }

  askQuestion();
  gradeQuiz(this.candidateAnswers);


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};