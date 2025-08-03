const divWord = document.querySelector(".word");
let currentIndex = 0;
let currentWord = "";
const words = ["apple", "javascript", "keyboard", "function", "hometask", "example", "student"];

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

function enterWord(event) {
    const pressKey = event.key;
    if (pressKey === currentWord[currentIndex]) {
        const spans = divWord.getElementsByTagName("span");
        spans[currentIndex].classList.add("c");
        currentIndex++;
        if (currentIndex === currentWord.length) {
            displayWord();
        }
    }
}


document.addEventListener("keydown", enterWord);
displayWord();