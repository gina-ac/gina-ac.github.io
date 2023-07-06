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

function indexLettersArray(lettersArray) {
    let indexLettersArray10 = [];
    for (let i = 0; i < lettersArray.length; i++) {
        indexLettersArray10.push([lettersArray[i], i]);
    }
    console.log(indexLettersArray10);
    return indexLettersArray10;
}

function shuffleIndexLettersArray(indexLettersArray2) {
    for (let i = indexLettersArray2.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = indexLettersArray2[i];
        indexLettersArray2[i] = indexLettersArray2[j];
        indexLettersArray2[j] = temp;
    }
    return indexLettersArray2;
}

function showRandomLetter(indexLettersArray2) {
    console.log(indexLettersArray2[0][1]);
    let letterBinId = `#letterBin${indexLettersArray2[0][1]}`;
    console.log(letterBinId);
    let letterBin = document.querySelector(letterBinId);
    console.log(indexLettersArray2[0][0]);
    let letter = letterBin.innerText = indexLettersArray2[0][0];
    indexLettersArray2.shift();
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

function giveHint(indexLettersArray2) {
    console.log(indexLettersArray2);
    showRandomLetter(indexLettersArray2);
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
    indexLettersArray1 = indexLettersArray(lettersArray1);
    shuffleIndexLettersArray1 = shuffleIndexLettersArray(indexLettersArray1);
    category1 = getCategory(wordArray1, wordIndex1);

    showCategory(category1);
    createWordBin(word1);
    addPlaceholders(word1);

    showRandomLetter1 = showRandomLetter(shuffleIndexLettersArray1);

    console.log(wordArray1, wordIndex1, word1, lettersArray1, category1);
}

wordArray1 = wordList;
let wordIndex1 = randomWordIndex(wordArray1);
let word1 = getWord(wordArray1, wordIndex1);
let lettersArray1 = createLettersArray(word1);
let indexLettersArray1 = indexLettersArray(lettersArray1);
let shuffleIndexLettersArray1 = shuffleIndexLettersArray(indexLettersArray1);
let category1 = getCategory(wordArray1, wordIndex1);

showCategory(category1);
createWordBin(word1);
addPlaceholders(word1);

let showRandomLetter1 = showRandomLetter(shuffleIndexLettersArray1);

console.log(wordArray1, wordIndex1, word1, lettersArray1, category1);

let submitButton = document.querySelector("#submit");
let hintButton = document.querySelector("#hint");
let skipButton = document.querySelector("#skip");

submitButton.onclick = function() {checkGuess(word1)};
hintButton.onclick = function() {giveHint(shuffleIndexLettersArray1)};
skipButton.onclick = function() {skipWord(word1, wordArray1)};