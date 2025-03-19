function compChoice(){
    let choice;
    let a = Math.floor(Math.random() * 3);
    if (a === 0) {
        choice = "rock";
    }   else if (a === 1) {
        choice = "paper";
    }   else if (a === 2) {
        choice = "scissors";
    }
    return choice
}
console.log(compChoice())

function getHumanChoice() {
    humanchoice = window.prompt("choose rock paper scissors");

}
