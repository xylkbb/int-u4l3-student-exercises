let englishButton = document.querySelector(".english-button");
let ssButton = document.querySelector(".ss-button");
let mathButton = document.querySelector(".math-button");
let scienceButton = document.querySelector(".science-button");



// For each of the test questions:
//  - Use conditionals to check whether the correct answer was provided by the user. 
//  - The click handlers for each question have been provided for you.

// CODE ALONG
// 1. Take a look at the code provided:
//  - Each of the buttons for the first three subjects have already been stored in its own variable.

let englishMessage = document.querySelector(".english-message");
let scienceMessage = document.querySelector(".science-message");
let ssMessage = document.querySelector(".ss-message");
let mathMessage = document.querySelector(".math-message");



englishButton.addEventListener("click", function() {
    let englishInput = document.querySelector(".english").value;

    if( englishInput === "Mon" || englishButton === "Mon") {
        englishMessage.innerHTML = "Correct!";
    } else {
        englishMessage.innerHTML = "Wrong! Try again.";
    }
});

mathButton.addEventListener("click", function() {
    let mathInput = document.querySelector(".math").value;

    if( mathInput === "30" || mathButton === "30") {
        mathMessage.innerHTML = "Yessss!";
    } else {
        mathMessage.innerHTML = "Wrong! Try again.";
    }
});

ssButton.addEventListener("click", function() {
    let ssInput = document.querySelector(".social-studies").value;

    if( ssInput === "Albany" || ssButton === "Albany") {
        ssMessage.innerHTML = "You got it!";
    } else {
        ssMessage.innerHTML = "Womp, womp. Try again.";
    }
});

scienceButton.addEventListener("click", function() {
    let scienceInput = document.querySelector(".science").value;

    if( scienceInput === "Solid" || ssButton === "Solid") {
        scienceMessage.innerHTML = "Rockstar!";
    } else {
        scienceMessage.innerHTML = "Sad. Try again.";
    }
});

// measures measuers 

// Finish Early?
//  - When a student gets the answer right, make it so their answer turns green. 
//  - If they get it wrong, make their answer turn red.
//  - Write a conditional statement so the English answer is correct for both the user inputs Mon and mon. 
//  - Google compound conditionals to help you figure out how to do this!