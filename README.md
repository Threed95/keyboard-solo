# Домашнее задание к модулю "Продвинутая работа с DOM"

Ты когда-нибудь хотела научиться слепой печати? Предлагаю совместить приятное с полезным и самой написать такой тренажер. Потом на нем можно будет и потренироваться.

Традиционно задание разделено на два уровня сложности. Первый обязателен для получения зачета, а второй — по желанию.

## Базовый уровень сложности

- При загрузке страницы в `div.word` должно подставляться случайное слово. Пользователь вводит его по буквам.

- Если текущий символ введен правильно, он окрашивается в зеленый. Если неправильно, то в красный.

- В случае неправильного ввода текущий символ требуется повторно ввести (любое количество раз — до победного)

- В конце все слово должно стать зеленым

### Демо

![Basic level](./assets/basic.gif)

## Продвинутый уровень сложности

- После ввода текущего слова до конца на странице должно появляться новое слово.

- Добавь статистику тренировки: сколько слов введено правильно, сколько неправильно, сколько ошибок в текущем слове.

- При 5 правильно введенных словах пользователь выигрывает, а при 5 неправильно введенных словах – проигрывает.

- Добавь отсчет времени, чтобы можно было тренироваться на скорость.

### Демо

![Advanced level](./assets/advanced.gif)



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
let isCorrect = true;


function generateWord() {
    const random = Math.floor(Math.random() * words.length);
    return words[random];
}

function displayWord() {
    divWord.innerHTML = "";
    currentWord = generateWord();
    currentIndex = 0;
    mistakesScore = 0;
    wordMistakes.textContent = mistakesScore;
    for (let i = 0; i < currentWord.length; i++) {
        const span = document.createElement("span");
        span.textContent = currentWord[i];
        divWord.append(span);
    }
    writeAnswers();
}



function writeAnswers() {
    if (correctDisplay.textContent === "5") {
        alert("Вы выиграли!");
    } else if (wrongDisplay.textContent >= "5") {
        alert("Вы проиграли!");
    }
}


function updateScore() {
    correctDisplay.textContent = correctCount;
    wrongDisplay.textContent = wrongCount;
    wordMistakes.textContent = mistakesScore;

}



function enterWord(event) {
    const pressKey = event.key;
    if (pressKey === currentWord[currentIndex]) {
        const spans = divWord.getElementsByTagName("span");
        spans[currentIndex].classList.remove("w");
        spans[currentIndex].classList.add("c");
        currentIndex++;
    } else {
        const spans = divWord.getElementsByTagName("span");
        spans[currentIndex].classList.add("w");
        mistakesScore++;
        updateScore();
    }
    if (currentIndex === currentWord.length) {
        setTimeout(displayWord, 500);
        correctCount++;
        updateScore();
    }

}


document.addEventListener("keydown", enterWord);
displayWord();


