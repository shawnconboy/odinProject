// rock paper scissors

console.log("welcome to rock paper scissors\n\n");
let userChoice = prompt("make a selection");
console.log(`User choice     : ${userChoice}`);

let computerChoice = Math.floor(Math.random() * 3) + 1;

if (computerChoice == 1) {
    computerChoice = "rock";
} else if (computerChoice == 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

if (computerChoice == "rock" && userChoice == "rock" ||
    computerChoice == "paper" && userChoice == "paper" ||
    computerChoice == "scissors" && userChoice == "scissors") {
    console.log(`Computer Choice : ${computerChoice}\n\nIt's a tie!`);
} else if (computerChoice == "rock" && userChoice == "paper" ||
    computerChoice == "scissors" && userChoice == "rock") {
    console.log(`Computer Choice : ${computerChoice}\n\nUser wins.`);
} else {
    console.log(`Computer Choice : ${computerChoice}\n\nComputer wins.`);
}