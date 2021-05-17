const myStartButton = document.getElementById('start-button');
const mainContainer = document.getElementById('main');
const buttonContainer = $('.answer-button');
const anotherContainer = document.getElementById('another-container');
const myQuestion = document.getElementById('myQuestion');
let chosenAnswer = []

function myFunction() {
    anotherContainer.style.display = 'none';
    myQuestion.style.display = 'block';
    $('#question').text(questions[0].question)
    $('#answer-0').text(questions[0].answers[0])
    $('#answer-1').text(questions[0].answers[1])
    $('#answer-2').text(questions[0].answers[2])
    $('#answer-3').text(questions[0].answers[3])
    const timer = ms => new Promise(res => setTimeout(res, ms))

    mainContainer.addEventListener('click', (event) => {
        const loopFunction = async _ => {
            for (let i = 1; i < 4; i++) {
                if (event.target.id.startsWith('answer')) {
                    chosenAnswer.push(event.target.id.split('-')[1])

                    $('#question').text(questions[i].question)
                    $('#answer-0').text(questions[i].answers[0])
                    $('#answer-1').text(questions[i].answers[1])
                    $('#answer-2').text(questions[i].answers[2])
                    $('#answer-3').text(questions[i].answers[3])
                    await timer(10000)
                }

            }

        }

    })
}

// const firstQuestion = (e) => {
//     chosenAnswer1 = e.target.id.value
// }


myStartButton.onclick = myFunction;


var questions = [

    {
        question: "What is the HTML tag under which one can write the Javascript code?",
        answers: ["<javascript>", "<scripted>", "<script>", "<js>"],

        correctAnswer: 2

    },

    {
        question: "Who is the inventor of JavaScript",
        answers: ["Brendan Eich", "Tim Berners-Lee", "James Gosling", "Bjarne Stroustrup"],

        correctAnswer: 0

    },

    {
        question: "Commonly used data types Do NOT include",
        answers: ["strings", "boolean", "alerts", "numbers"],

        correctAnswer: 2

    },

    {
        question: "Arrays in Javascrpt can be used to store",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],

        correctAnswer: 3
    }

]



