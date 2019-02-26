'use strict';
/* global $ */

// FIRST PAGE
// 1. user clicks on start button 


// SECOND PAGE
// 1. user selects option 
// 2. user clicks next 
// 3. sends answer 
// updates store
// refreshes page depending on chosen answer, doesn't go to next page yet 
// updates progress bar and amount of questions right/wrong
// shows correct answer
// user clicks next

const QUIZ = {
  questions: ['Who does Michael Scott hate more than anyone else?',],
  allAnswers: [
    ['Meredith Palmer','Angela ','Todd Packer','Toby Flenderson'],
  ],
  correctAnswer:['Toby Flenderson']
};

const STORE = {
  questionPage: [],
  userResponse: [],
  quizScore: [],
  questionAnswered: false
};

function generateQuestionsWithAnswers(){
  // highlights correct answer and wrong answer if necessary
}

function generateQuestionList(){

}

function renderQuestionText(){

}

function startButton(){

}

function handleStartButton(){

}

function nextButton(){

}

function getChosenAnswer(){
  // responsible for pulling user-chosen answer after next button has been pressed

}

function checkAnswer(answer, questionNumber) {
  // looks at QUIZ object to validate user's answer against correct answer
  if(answer === QUIZ.correctAnswer[questionNumber]) {
    return true;
  } else {
    return false;
  }
}

function handleNextButton() {
  $('.js-next-question').on('click', function(e) {
    e.preventDefault();
    console.log('handleNextButton has ran');
    $('.js-quiz-questions-page').prop('checked', true);
    // console.log($('.js-quiz-questions-page').prop('checked', true));
    // if(!STORE.questionAnswered) {
    //   checkAnswer(getChosenAnswer(), questionNumber);
    //   generateQuestionsWithAnswers();
    // } else {
    //   generateQuestionList();
    // }
  });
}

function hasQuestionBeenAnswered() {

}

function progressBar(){
  // access the updated store and update progress bar
}

function quizScore(){

}

function restartButton(){

}

function handleRestartButton(){

}

function render() {
  handleNextButton();
}

$(render);