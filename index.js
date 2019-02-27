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
      b: 'Angela Martin', 
      c: 'Todd Packer', 
      d: 'Toby Flenderson'
    },
    correctAnswer: 'Toby Flenderson'
  },
  {
    question: 'What are Scott’s Tots?',
    answers: {
      a: 'Michael\'s favorite breakfast tater tots',
      b: 'Michael\'s affectionate name for his future grandkids', 
      c: 'Students that Michael pledged to pay college tuition for', 
      d: 'Employees of the Michael Scott Paper Company'
    },
    correctAnswer: 'Employees of the Michael Scott Paper Company'
  },
  {
    question: 'Who won the “” Dundee Award?',
    answers: {
      a: '',
      b: '', 
      c: '', 
      d: ''
    },
    correctAnswer: ''
  },
  {
    question: 'Who is Dwight’s best man?',
    answers: {
      a: '',
      b: '', 
      c: '', 
      d: ''
    },
    correctAnswer: ''
  },
  {
    question: 'Who did Michael hit with his car?',
    answers: {
      a: '',
      b: '', 
      c: '', 
      d: ''
    },
    correctAnswer: ''
  },
  {
    question: 'What was the fundraiser for the company 5k for?',
    answers: {
      a: '',
      b: '', 
      c: '', 
      d: ''
    },
    correctAnswer: ''
  },
  {
    question: 'What was in pot that Kevin dropped in the office?',
    answers: {
      a: '',
      b: '', 
      c: '', 
      d: ''
    },
    correctAnswer: ''
  }
];

const STORE = {
  questionPage: [],
  userResponse: [],
  quizScore: [],
  questionAnswered: '',
  current_question: 0
};

function renderStart() {
  console.log('renderStart ran');
  let startHTML = `<h1>The Office Quiz</h1>
  <button type="submit" class ="js-start-button">Start quiz</button>`;
  $('.container').html(startHTML);
}

function renderQuestionList(num){ //HTML 
  console.log('renderQuestionList ran');
  let questionContainer = [];
  questionContainer.push(
    `<h1>${QUIZ[num].question}</h1> 
        <div class="quiz-questions-page"></div>`
  );   

  for (let letter in QUIZ[num].answers){// if empty, render without
    questionContainer.push(
      `<div class="quiz-questions ${
        STORE.questionAnswered === letter ? 'correct' : ''
      
      }">
        <label>
        <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${letter}">
        ${QUIZ[num].answers[letter]}</label>
      </div>`);
  }
  questionContainer.push(
    `<div>
        <button type="submit" class="js-next-button" >Next</button>
      </div>`);
  questionContainer = questionContainer.join('');
  $('.container').html(questionContainer);


  
  // let questionClass = ''; then, if (!store.QuestionAnswered) {questionClass = logic}
  for (let letter in QUIZ[num].answers){// if empty, render without
    questionContainer.push(
      `<div class="quiz-questions ${STORE.questionAnswered === letter ? 'correct' : ''}">
        <label>
        <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${letter}">
        ${QUIZ[num].answers[letter]}</label>
      </div>`);
  }
  questionContainer.push(
    `<div>
        <button type="submit" class="js-next-button" >Next</button>
     </div>`);
  questionContainer = questionContainer.join('');
  $('.container').html(questionContainer);
}

function renderStatusBar(){
  console.log('renderStatusBar ran');
  let statusBarHTML = `<progress value="0" max="10"></progress>
  <p>0 correct, 0 incorrect</p>`;
  $('.statusBar').html(statusBarHTML);
}

function handleStartButton(){
  $('.container').on('click','.js-start-button' , event => {
    event.preventDefault();
    console.log('start button ran');
    renderQuestionList(STORE.current_question);
    renderStatusBar();
  });
}

function handleNextButton() { // event listener
  $('.container').on('click','.js-next-button' , event => {
    event.preventDefault();
    console.log('handleNextButton has ran');
    STORE.questionAnswered = $('.quiz-answer:checked').val();
    renderQuestionList(STORE.current_question);
  });
}

function handleSubmitButton() {

}

// function renderValidation(userAnswer) { // checks to see if any answer has been selected, then
//   // runs renderCorrect/renderIncorrect and then increments STORE values

//   // check to see if answer has been selected
//   if (!userAnswer){
//     alert('Must choose answer');
//   } else {
//     // validate answer
//     if (userAnswer === QUIZ[STORE.current_question].correctAnswer) {
//       renderCorrect();
//     }
//     else {
//       renderIncorrect(userAnswer);
//     }
//     STORE.questionAnswered = true;
//     STORE.current_question++;
//   }
// }

function renderAnswers() {

}


function renderCorrect() {
  console.log('renderCorrect has run');
  const correctAnswer = QUIZ[STORE.current_question].correctAnswer;
  $('.quiz-questions').css('background-color', 'green');
  renderStatusBar();
}

function renderIncorrect(userIncorrectAnswer) {
  //
  renderStatusBar();
}


function restartButton(){

}

function handleRestartButton(){

}

function main(){
// this is all "controller" functions that listen for user input
  renderStart();
  handleStartButton();
  handleNextButton();
}

$(main);