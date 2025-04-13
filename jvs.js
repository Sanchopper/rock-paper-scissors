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
        resultText = "DRAW";
    } else if (
        (humanChoice === 'paper' && compChoice === 'rock') ||
        (humanChoice === 'scissors' && compChoice === 'paper') ||
        (humanChoice === 'rock' && compChoice === 'scissors')
    ) {
        resultText = "YOU WON"
        humanScore += 1;
    } else {
        resultText = "COMPUTER WON"
        compScore += 1;
    }

    document.getElementById("result").textContent = resultText
    document.getElementById("humanChoice").textContent = humanChoice
    document.getElementById("compChoice").textContent = compChoice
    document.getElementById("humanScore").textContent = humanScore
    document.getElementById("compScore").textContent = compScore
}



const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let humanselection = button.id
            let compselection = getCompChoice()
            playRound(humanselection, compselection)
        })
})