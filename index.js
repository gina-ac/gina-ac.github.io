// Arrays

const wordList = [
    {word: "apple", category: "fruit"}, 
    {word: "banana", category: "fruit"}, 
    {word: "orange", category: "fruit"},
    {word: "gum", category: "candy"}, 
    {word: "chocolate", category: "candy"}, 
    {word: "lollipop", category: "candy"},
    {word: "dog", category: "animal"},
    {word: "cat", category: "animal"},
    {word: "fish", category: "animal"}];

// Functions

function randomWordIndex(wordArray) {
    let index = Math.floor(Math.random() * wordArray.length);
    return index;
}

function getWord(wordArray, wordIndex) {
    let { word } = wordArray[wordIndex];
    return word;
}

function createLettersArray(word) {
    let lettersArray = word.split("");
    return lettersArray;
}

function randomLetterIndex(word) {
    let index = Math.floor(Math.random() * word.length);
    return index;
}

function showRandomLetter(lettersArray, letterIndex) {
    let letterBinId = `#letterBin${letterIndex}`;
    let letterBin = document.querySelector(letterBinId);
    let letter = letterBin.innerText = lettersArray[letterIndex];
    return letter;
}

function getCategory(wordArray, wordIndex) {
    let { category } = wordArray[wordIndex];
    return category;
}

function showCategory(category) {
    let location = document.querySelector("#category");
    location.innerText = category;
}

function createWordBin(word) {
    let wordBin = document.querySelector("#word");
    for (let i = 0; i < word.length; i++) {
        let letterBin = document.createElement("span");
        letterBin.id = "letterBin" + i;
        wordBin.append(letterBin);
    }
}

function addPlaceholders(word) {
    for (let i = 0; i < word.length; i++){
        let letterBinId = `#letterBin${i}`;
        let letterBin = document.querySelector(letterBinId);
        letterBin.innerText = "_";
    }
}

function clearLetterBins(word) {
    for (let i = 0; i < word.length; i++){
        let letterBinId = `#letterBin${i}`;
        let letterBin = document.querySelector(letterBinId);
        letterBin.remove();
    }
}

function checkGuess(word) {
    let guess = document.querySelector("#guess").value;
    let wordBin = document.querySelector("#word");
    let skip = document.querySelector("#skip");
    let message = document.querySelector("#message");
    let bird = document.querySelector("#bird");
    if (guess.toLowerCase() == word) {
        clearLetterBins(word);
        wordBin.innerText = word;
        wordBin.style.backgroundColor = "white"
        skip.innerText = "Next Word";
        message.innerText = "Correct!";
        bird.src = "./bird_open.png";
    } else {
        message.innerText = "Try again.";
    }
}

function giveHint(word, lettersArray) {
    let letterIndex = randomLetterIndex(word);
    showRandomLetter(lettersArray,letterIndex);
    let message = document.querySelector("#message");
    message.innerText = "";
}

function skipWord(word, wordList) {
    let wordBin = document.querySelector("#word");
    let skip = document.querySelector("#skip");
    let bird = document.querySelector("#bird");
    if (wordBin.innerText == word) {
        wordBin.innerText = "";
        wordBin.style.backgroundColor = "";
        skip.innerText = "Skip";
        bird.src = "./bird_closed.png";
    } else {
        clearLetterBins(word);
        wordBin.innerText = ""
    }

    let message = document.querySelector("#message");
    message.innerText = ("");

    let guess = document.querySelector("#guess");
    guess.value = "";

    wordArray1 = wordList;
    wordIndex1 = randomWordIndex(wordArray1);
    word1 = getWord(wordArray1, wordIndex1);
    lettersArray1 = createLettersArray(word1);
    letterIndex1 = randomLetterIndex(word1);
    category1 = getCategory(wordArray1, wordIndex1);

    showCategory(category1);
    createWordBin(word1);
    addPlaceholders(word1);

    randomLetter1 = showRandomLetter(lettersArray1, letterIndex1);

    console.log(wordArray1, wordIndex1, word1, lettersArray1, letterIndex1, randomLetter1, category1);
}

wordArray1 = wordList;
let wordIndex1 = randomWordIndex(wordArray1);
let word1 = getWord(wordArray1, wordIndex1);
let lettersArray1 = createLettersArray(word1);
let letterIndex1 = randomLetterIndex(word1);
let category1 = getCategory(wordArray1, wordIndex1);

showCategory(category1);
createWordBin(word1);
addPlaceholders(word1);

let randomLetter1 = showRandomLetter(lettersArray1, letterIndex1);

console.log(wordArray1, wordIndex1, word1, lettersArray1, letterIndex1, randomLetter1, category1);

let submitButton = document.querySelector("#submit");
let hintButton = document.querySelector("#hint");
let skipButton = document.querySelector("#skip");

submitButton.onclick = function() {checkGuess(word1)};
hintButton.onclick = function() {giveHint(word1, lettersArray1)};
skipButton.onclick = function() {skipWord(word1, wordArray1)};
