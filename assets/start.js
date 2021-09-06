//start page
//score tracker
//high score page
//timer
//end page

//push question into id from array
//push answers into id's from array
//create if/else statement for correct/incorrect answer
//save score, clear container, and continue to next question

//array of object question/answers
var questions = [
    {
        age: "What city was I born in?",
        answer: ["Nashville","Miami","Chicago","LA"],
        correct1: "Nashville"
        
    },
    {
        eye: "How many siblings to I have?",
        answer: ["4", "2", "1", "0"],
        correct: "1"
        
        
    },
    {
        birth: "What's my favorite food?",
        answer: ["Pasta", "Salmon", "Pizza", "Hamburger"],
        correct: "Pasta"
    },
    {
        name: "Whats My Mothers Name?",
        answer: ["Annie", "Jordan", "Jan", "Linda"],
        correct: "Linda"
        
    }
    ]
    
    var startButton = document.getElementById("start-button")
    
    var button1 = document.getElementById("question-1-button")
    var button2 = document.getElementById("question-2-button")
    var button3 = document.getElementById("question-3-button")
    var button4 = document.getElementById("question-4-button")
    
    var timeLeft = 60
    
    //timer
    document.addEventListener('DOMContentLoaded', () => {
        //variable
        const timeLeftDisplay = document.getElementById("seconds")
        const startBtn = document.getElementById("start-button")
        
        
        //timer function
        function countDown () {
            setInterval(function(){
                if(timeLeft <= 0 ) {
                    clearInterval(timeLeft = 0)
                }
                timeLeftDisplay.innerHTML = timeLeft 
                timeLeft -=1
            }, 1000)
        }
    
        startBtn.addEventListener("click", countDown)
        
    })
    
    
    //quiz
    function mainQuiz () {
        startButton.onclick = function () {
            document.getElementById("begin").setAttribute("class", "hide")
            document.getElementById("quiz").removeAttribute("class")
        }
    
        //question 1
        function start (){
            document.getElementById("question").innerHTML = questions[0].age
    
            document.getElementById("question-1-button").innerHTML = questions[0].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[0].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[0].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[0].answer[3]
            
            document.getElementById("quiz-buttons").addEventListener("click", second)
    
            button1.addEventListener("click", function () {
              
                });
    
          
    
        }
        start()
        
        //question 2
        function second (){
            document.getElementById("question").innerHTML = questions[1].eye
    
            document.getElementById("question-1-button").innerHTML = questions[1].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[1].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[1].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[1].answer[3]
    
            document.getElementById("quiz-buttons").addEventListener("click", third)
    
            addEventListener("click", function () {
             
                });
    
           
    
        }
        
        //question 3
        function third () {
            document.getElementById("question").innerHTML = questions[2].birth
    
            document.getElementById("question-1-button").innerHTML = questions[2].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[2].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[2].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[2].answer[3]
    
            document.getElementById("quiz-buttons").addEventListener("click", fourth)
    
        }
    
        //question 4
        function fourth () {
            document.getElementById("question").innerHTML = questions[3].name
    
            document.getElementById("question-1-button").innerHTML = questions[3].answer[0]
            document.getElementById("question-2-button").innerHTML = questions[3].answer[1]
            document.getElementById("question-3-button").innerHTML = questions[3].answer[2]
            document.getElementById("question-4-button").innerHTML = questions[3].answer[3]
        }
    }
    mainQuiz()