function getCompChoice(){
    let compChoice;
    let a = Math.floor(Math.random() * 3);
    if (a === 0) {
        compChoice = "rock";
    }   else if (a === 1) {
        compChoice = "paper";
    }   else if (a === 2) {
        compChoice = "scissors";
    }
    return compChoice
}

function getHumanChoice() {
    let humanChoice = window.prompt("choose rock paper scissors").toLowerCase();
    return humanChoice

}
let humanScore = 0;
let compScore = 0;

function playRound(humanChoice, compChoice) {
    console.log("Human:", humanChoice);
    console.log("Computer:", compChoice);

    if (compChoice === humanChoice) {
        console.log('DRAW');
    } else if (
        (humanChoice === 'paper' && compChoice === 'rock') ||
        (humanChoice === 'scissors' && compChoice === 'paper') ||
        (humanChoice === 'rock' && compChoice === 'scissors')
    ) {
        console.log('YOU WON!!!');
        humanScore += 1;
    } else {
        console.log('COMPUTER WON!!!');
        compScore += 1;
    }
}

let humanselection = getHumanChoice()
let compselection = getCompChoice()
playRound(humanselection, compselection)

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanselection = getHumanChoice()
        let compselection = getCompChoice()
        playRound(humanselection, compselection)
        console.log(humanScore + ':' + compScore)
    }
}
playGame()