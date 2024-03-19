const questions = [
    {
        topic: "science",
        question: "What color is the sky?",
        possibleAnswers: ["blue", "green", "red"],
        correctAnswer: "blue"
    },
    {
        topic: "anime",
        question: "Which is your favorite anime?",
        possibleAnswers: ["JJK", "AOT", "Deathnote"],
        correctAnswer: "JJK"
    },
];

const quizProgress = document.getElementById('quizProgress')
const questionContainer = document.getElementById('questionContainer')
const answerContainer = document.getElementById('answerContainer');

let currentQuestionIndex = 0;

function handleQuestion() {
    //handle quiz progress
    questions.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });

    let spans = document.querySelectorAll('span');
    for (let i=0; i<= currentQuestionIndex; i++) {
        spans[i].classList.add('seen');
    }
}

handleQuestion();