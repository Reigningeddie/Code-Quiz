const content = document.querySelector('.container');
const questionEl = document.getElementById('questions');
const startBtn = document.getElementById('start');
const scoreEl = document.getElementById('score');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const startTime = 1;
let time = startTime * 60;
let countdownEl = document.getElementById('countdown');
let scoreCount = 0;
let questions = [
    {
        question : "What is the name of Carole's allegedly dead husband?",
        A : "John Lewis",
        B : "Don Lewis",
        C : "Lewis McDonald",
        D : "John Louis",
        correct : "B"
    },{
        question : "What is Doc Antle's doctarate in?",
        A : "Tiger Science",
        B : "Nature Science",
        C : "Magical Science",
        D : "Mystical Science",
        correct : "D"
    },{
        question : "HOw many years was Joe Exotic sentenced to prison?",
        A : "20",
        B : "30",
        C : "32",
        D : "22",
        correct : "D"
    },{
        question : "What did John's Crotch tattoo say?",
        A : "I am Joe's",
        B : "Joe Exotic's Private Property",
        C : "Privately Owned by Joe Exotic",
        D : "These privates are Joe's Private Property",
        correct : "C"
    },
];
const lastQuestion = questions.length -1;      
let runningQuestion = 0;

startBtn.addEventListener('click', startGame);

setInterval(updateCountdown, 1000);

function startGame() {
    startBtn.setAttribute('style', 'display: none;');
    renderQuestion();
    content.setAttribute('style', 'display: block;')
}

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = minutes + ':' + seconds;
    time--;
}

function renderQuestion() {

    let q = questions[runningQuestion];
    
    questionEl.innerHTML = "<p>" + q.question +"</p>";
    A.innerHTML = q.A;
    B.innerHTML = q.B;
    C.innerHTML = q.C;
    D.innerHTML = q.D;
}

function checkAnswer(answer) {
    if( answer == questions[runningQuestion].correct) {
        // answer is correct
        scoreCount++;
    }else {
        //answer is wrong
        //decrease timer -10
    }
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender();
    }
};
function scoreRender() {
    scoreEl.setAttribute('style', 'display: block;')
    content.setAttribute('style', 'display: none;')

    const scorePercent = Math.round(100 * score/questions.length);
    scoreEl.innerHTML += "<p>Score = "+ scoreCount +"/4 <p>";
}
