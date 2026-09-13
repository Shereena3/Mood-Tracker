const moodButtons = document.querySelectorAll(".mood");
const moodResult = document.getElementById("moodResult");

moodButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const mood = button.getAttribute("data-mood");
        moodResult.textContent = "You are feeling extra " + mood + " today!";
    });
});


const nameInput = document.getElementById("nameInput");
const nameResult = document.getElementById("nameResult");

nameInput.addEventListener("input", function() {
    if (nameInput.value == "") {
        nameResult.textContent = "Hello!";
    } else {
        nameResult.textContent = "Hello, " + nameInput.value + "!";
    }
});


const quoteCard = document.getElementById("quoteCard");
const quote = document.getElementById("quote");

quoteCard.addEventListener("mouseover", function() {
    quote.textContent = "Remember: You are doing your best! Keep going!";
});

quoteCard.addEventListener("mouseout", function() {
    quote.textContent = "Hover over this card for a reminder.";
});


const keyBox = document.getElementById("keyBox");

document.addEventListener("keydown", function(event) {
    keyBox.textContent = "You pressed: " + event.key;
});


const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const noteResult = document.getElementById("noteResult");

noteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    noteResult.textContent = "Your note was saved!";
    noteInput.value = "";
});


const luckyButton = document.getElementById("luckyButton");
const luckyResult = document.getElementById("luckyResult");

function luckyMessage() {
    luckyResult.textContent = " May your hard work pay off immediately, so you don't have to rely on your backup plan of winning the lottery or finding a hidden treasure chest :p";
    luckyButton.textContent = "Already Used";

    luckyButton.removeEventListener("click", luckyMessage);
}

luckyButton.addEventListener("click", luckyMessage);