const divWord = document.querySelector(".word");
let currentIndex = 0;
let currentWord = "";
const words = ["apple", "javascript", "keyboard", "function", "hometask", "example", "student"];
const correctDisplay = document.querySelector(".correct-count");
const wrongDisplay = document.querySelector(".wrong-count");
let wordMistakes = document.querySelector(".word-mistakes");
let correctCount = 0;
let wrongCount = 0;
let mistakesScore = 0;


function generateWord() {
    const random = Math.floor(Math.random() * words.length);
    return words[random];
}

function displayWord() {
    divWord.innerHTML = "";
    currentWord = generateWord();
    currentIndex = 0;
    for (let i = 0; i < currentWord.length; i++) {
        const span = document.createElement("span");
        span.textContent = currentWord[i];
        divWord.append(span);
    }
}

function updateScore() {
    correctDisplay.textContent = correctCount;

}

function makeMistakes() {
    wrongDisplay.textContent = wrongCount;
    wordMistakes.textContent = mistakesScore;
}


function enterWord(event) {
    const pressKey = event.key;
    if (pressKey === currentWord[currentIndex]) {
        const spans = divWord.getElementsByTagName("span");
        spans[currentIndex].classList.add("c");
        currentIndex++;
    } else {
        const spans = divWord.getElementsByTagName("span");
        spans[currentIndex].classList.add("w");
        wrongCount++;
        mistakesScore++;
        makeMistakes();
    }
    if (currentIndex === currentWord.length) {
        displayWord();
        correctCount++;
        updateScore();
    }
    if (correctDisplay.textContent === "5") {
        alert("Вы выиграли!");
    } else if (wrongDisplay.textContent === "5") {
        alert("Вы проиграли!");
    }

}


document.addEventListener("keydown", enterWord);
displayWord();