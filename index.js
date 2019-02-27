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
    correctAnswer: 'd'
  },
  {
    question: 'What are Scott’s Tots?',
    answers: {
      a: 'Michael\'s favorite breakfast tater tots',
      b: 'Michael\'s affectionate name for his future grandkids', 
      c: 'Students that Michael pledged to pay college tuition for', 
      d: 'Employees of the Michael Scott Paper Company'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Who won the "Don\'t Go In There After Me" Dundee Award?',
    answers: {
      a: 'Kevin Malone',
      b: 'Pam Beesly', 
      c: 'Dwight Schrute', 
      d: 'Erin Hannon'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Who is Dwight’s best man?',
    answers: {
      a: 'Jim',
      b: 'Michael', 
      c: 'Mose', 
      d: 'Creed'
    },
    correctAnswer: 'a'
  },
  {
    question: 'Who did Michael hit with his car?',
    answers: {
      a: 'Toby Flenderson',
      b: 'Kevin Malone ', 
      c: 'Meredith Palmer', 
      d: 'Andy Bernard'
    },
    correctAnswer: 'c'
  },
  {
    question: 'What was the fundraiser for the company 5k for?',
    answers: {
      a: 'Cancer Awareness',
      b: 'St. Jude Children\'s Research Hospital Fund', 
      c: 'The Red Cross', 
      d: 'Michael Scott\'s Dunder Mifflin Scranton Meredith Palmer Memorial Celebrity Rabies Awareness Pro-Am Fun Run Race For The Cure'
    },
    correctAnswer: 'd'
  },
  {
    question: 'What was in pot that Kevin dropped in the office?',
    answers: {
      a: 'Kevin\'s famous chili',
      b: 'Kevin\'s amazing tacos', 
      c: 'Kevin\'s celebrated chicken soup', 
      d: 'Kevin\'s notorious guac'
    },
    correctAnswer: 'a'
  }
];

const STORE = {
  quizCorrect: 0,
  quizIncorrect: 0,
  questionAnswered: '',
  current_question: 0, 
};

function renderStart() {
  console.log('renderStart ran');
  let startHTML = `<h1>The Office Quiz</h1>
  <button type="submit" class ="js-start-button">Start quiz</button>`;
  $('.container').html(startHTML);
}

function renderQuestionList(){ //HTML 
  console.log('renderQuestionList ran');
  let num = STORE.current_question;
  let questionContainer = [];
  questionContainer.push(
    `<h1>${QUIZ[num].question}</h1> 
        <div class="quiz-questions-page"></div><form>`
  );   

  // let questionClass = ''; then, if (!store.QuestionAnswered) {questionClass = logic}
  for (let letter in QUIZ[num].answers){
    if (!STORE.questionAnswered) {
      questionContainer.push(
        `<div class="quiz-questions">
          <label>
          <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${letter}" required>
          ${QUIZ[num].answers[letter]}</input></label>
        </div>`);
    }
    else if (letter === QUIZ[num].correctAnswer) {
      questionContainer.push(
        `<div class="quiz-questions correct">
          <label>
          <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${letter}" required>
          ${QUIZ[num].answers[letter]}</input></label>
        </div>`);
    }
    else if (STORE.questionAnswered === letter && STORE.questionAnswered !== QUIZ[num].correctAnswer) {
      questionContainer.push(
        `<div class="quiz-questions incorrect ">
          <label>
          <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${letter}" required>
          ${QUIZ[num].answers[letter]}</input></label>
        </div>`);
    }
    else {
      questionContainer.push(
        `<div class="quiz-questions  ">
          <label>
          <input class="quiz-answer" type="radio" id="Meredith" name="questions${num}" value="${letter}" required>
          ${QUIZ[num].answers[letter]}</input></label>
        </div>`);
    }
  }

  if (STORE.questionAnswered) {
    questionContainer.push( 
      `<div>
        <button type="submit" class="js-next-button">Next</button>
       </div></form>`);
  }
  else {
    questionContainer.push(
      `<div>
          <button type="submit" class="js-submit-button">Submit</button>
       </div></form>`);
  }
  questionContainer = questionContainer.join('');
  $('.container').html(questionContainer); 
}

function incrementCorrectScore(){
  if (STORE.questionAnswered === QUIZ[STORE.current_question].correctAnswer){
    STORE.quizCorrect++;
  }
  else {
    STORE.quizIncorrect++;
  }
}

function renderStatusBar(){
  console.log('renderStatusBar ran');
  let statusBar = STORE.current_question + 1;
  
  let statusBarHTML = `<progress value="${statusBar}" max="${QUIZ.length}"></progress>
  <p>${STORE.quizCorrect} correct, ${STORE.quizIncorrect} incorrect</p>`;
  $('.statusBar').html(statusBarHTML);
}

function handleStartButton(){
  $('.container').on('click','.js-start-button' , event => {
    event.preventDefault();
    console.log('start button ran');
    renderQuestionList();
    renderStatusBar();
  });
}

function handleSubmitButton() { // event listener
  $('.container').on('submit','form' , event => {
    event.preventDefault();
    console.log('handleSubmitButton has ran');
    
    STORE.questionAnswered = $('.quiz-answer:checked').val();
    incrementCorrectScore();
    renderStatusBar();
    renderQuestionList();
  });
}

function handleNextButton() {
  $('.container').on('click', '.js-next-button', event => {
    event.preventDefault();
    console.log('handle next button has run');
    console.log(STORE.questionAnswered, QUIZ.length);
    if (STORE.current_question === (QUIZ.length -1)){
      console.log('next button ran');
      generateFinalPageHtml();
    }
    STORE.questionAnswered = '';
    STORE.current_question++;
    renderQuestionList();

  });
}

function generateFinalPageHtml(){
  console.log('renderStart ran');
  let startHTML = `<h1>Good job!</h1>
  <p>You got: ${STORE.quizCorrect}/${QUIZ.length}</p>
  <button type="submit" class ="js-restart-button">Restart quiz</button>`;
  $('.container').html(startHTML);
}

function handleRestartButton(){
  $('.container').on('click', '.js-restart-button', event => {
    event.preventDefault();
    console.log('restart button ran');

    STORE.current_question = 0;
    STORE.quizCorrect = 0;
    STORE.quizIncorrect = 0;
    renderQuestionList();
  });
}


function main(){
// this is all "controller" functions that listen for user input
  renderStart();
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

$(main);