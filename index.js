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
    },
    {
        question: "....",
        answers: {

        }
        correctAnswer: '...'
    },
]

const STORE = {
  questionPage: [],
  userResponse: [],
  quizScore: [],
  questionAnswered: false
};

function generateQuestionsWithAnswers(answerList){
  // highlights correct answer and wrong answer if necessary
}

function generateQuestionList(num){ //HTML 
    console.log('question');
    let questionContainer = '';
    questionContainer.push(
        `<h1>${QUIZ[num].question}</h1> 
        <div class="quiz-questions-page"></div>`
        )   
    for (let i = 0; i < QUIZ[num].question.length; i++){
        
    }
        <div class="quiz-questions">
                <input type="radio" id="Meredith" name="quiz questions" value="Meredith Palmer">
                <label for="Meredith">Meredith Palmer</label>
        </div>
        <div class="quiz-questions">
                <input type="radio" id="Angela" name="quiz questions" value="Angela">
                <label for="Angela">Angela</label>
        </div>
        <div class="quiz-questions">
                <input type="radio" id="Todd Packer" name="quiz questions" value="Todd Packer">
                <label for="Todd Packer">Todd Packer</label>
        </div>
        <div class="quiz-questions">
                <input type="radio" id="Toby Flenderson" name="quiz questions" value="Toby Flenderson">
                <label for="Toby Flenderson">Toby Flenderson</label>
        </div>
        <button type="submit">Next</button>
    </div>}
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