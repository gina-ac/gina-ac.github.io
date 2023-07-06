// Arrays

const wordArray = [
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

function selectRandomIndex(wordArray) {
    let randomIndex = Math.floor(Math.random() * wordArray.length);
    return randomIndex;
}

function selectRandomWord(wordArray, randomWordIndex) {
    let { word } = wordArray[randomWordIndex];
    return word;
}

function splitWord(randomWord) {
    let letters = randomWord.split("");
    return letters;
}

function findIndexOfEachLetter(lettersInWord) {
    let indexes = [];
    for (let i = 0; i < lettersInWord.length; i++) {
        indexes.push([lettersInWord[i], i]);
    }
    return indexes;
}

function shuffleLetters(lettersAndIndexes) {
    for (let i = lettersAndIndexes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = lettersAndIndexes[i];
        lettersAndIndexes[i] = lettersAndIndexes[j];
        lettersAndIndexes[j] = temp;
    }
    return lettersAndIndexes;
}

function showRandomLetter(shuffledLetters) {
    let letterBinId = `#letterBin${shuffledLetters[0][1]}`;
    let letterBin = document.querySelector(letterBinId);
    let letter = letterBin.innerText = shuffledLetters[0][0];
    shuffledLetters.shift();
    return letter;
}

function showCategory(wordArray, randomWordIndex) {
    let { category } = wordArray[randomWordIndex];
    let categoryBin = document.querySelector("#category");
    categoryBin.innerText = category;
}

function createWordBin(word) {
    let wordBin = document.querySelector("#word");
    for (let i = 0; i < word.length; i++) {
        let letterBin = document.createElement("span");
        letterBin.id = "letterBin" + i;
        wordBin.append(letterBin);
    }
}

function showPlaceholders(word) {
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

function giveHint(shuffledLetters) {
    showRandomLetter(shuffledLetters);
    let message = document.querySelector("#message");
    message.innerText = "";
}

function skipWord(word, wordArray) {
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

    randomWordIndex = selectRandomIndex(wordArray);
    randomWord = selectRandomWord(wordArray, randomWordIndex);
    lettersInWord = splitWord(randomWord);
    lettersAndIndexes = findIndexOfEachLetter(lettersInWord);
    shuffledLetters = shuffleLetters(lettersAndIndexes);

    showCategory(wordArray, randomWordIndex);
    createWordBin(randomWord);
    showPlaceholders(randomWord);
    showRandomLetter(shuffledLetters);
}


// Start game

let randomWordIndex = selectRandomIndex(wordArray);
let randomWord = selectRandomWord(wordArray, randomWordIndex);
let lettersInWord = splitWord(randomWord);
let lettersAndIndexes = findIndexOfEachLetter(lettersInWord);
let shuffledLetters = shuffleLetters(lettersAndIndexes);

showCategory(wordArray, randomWordIndex);
createWordBin(randomWord);
showPlaceholders(randomWord);
showRandomLetter(shuffledLetters);

let submitButton = document.querySelector("#submit");
let hintButton = document.querySelector("#hint");
let skipButton = document.querySelector("#skip");

submitButton.onclick = function() {checkGuess(randomWord)};
hintButton.onclick = function() {giveHint(shuffledLetters)};
skipButton.onclick = function() {skipWord(randomWord, wordArray)};