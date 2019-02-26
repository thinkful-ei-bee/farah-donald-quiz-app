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

const QUIZ = [
  {
    question: 'Who does Michael Scott hate more than anyone else?',
    answers: {
      a: 'Meredith Palmer',
      b: 'Angela ', 
      c: 'Todd Packer', 
      d: 'Toby Flenderson'
    },
    correctAnswer: 'd'
  }
];

const STORE = {
  questionPage: [],
  userResponse: [],
  quizScore: [],
  questionAnswered: false,
  current_question: 0
};

function generateQuestionsWithAnswers(answerList){
  // highlights correct answer and wrong answer if necessary
}

function generateQuestionList(num){ //HTML 
  //console.log('question');
  let questionContainer = [];
  questionContainer.push(
    `<h1>${QUIZ[num].question}</h1> 
        <div class="quiz-questions-page"></div>`
  );   
  for (let letter in QUIZ[num].answers){
    questionContainer.push(
      `<div class="quiz-questions">
        <label>
        <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${QUIZ[num].answers[letter]}">
        ${QUIZ[num].answers[letter]}</label>
      </div>`);
  }
  questionContainer.push(
    `<div>
        <button type="submit" class="js-next-button" >Next</button>
     </div>`);
  questionContainer = questionContainer.join('');
  $('.js-quiz-all').html(questionContainer);
}

function startButton(){
  $('.js-start-button').on('click', event => {
    event.preventDefault();
    console.log('start button ran');
  });
}

function handleStartButton(){

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


function handleNextButton() { // event listener
  $('.js-next-button').on('click', function(e) {
    e.preventDefault();
    console.log('handleNextButton has ran');

    
    const answeredQuestion = ($('.quiz-answer:checked').val());
    if (!answeredQuestion){
      alert('Must choose answer');
    }
    
    // console.log($('.js-quiz-questions-page').prop('checked', true));
    
  });
  //render();
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

// function render() {
//   // this would be all "view" functions that update the DOM
//   generateQuestionList(STORE.current_question);
// } 

function main(){
// this is all "controller" functions that listen for user input
  generateQuestionList(STORE.current_question);
  startButton();  
  handleNextButton();

}

$(main);