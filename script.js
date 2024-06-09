// Rock Paper Scissors With Switch Statement

let playerInput = prompt("Choose One Of Rock, Paper Or Scissors");
let choice = playerInput.toLowerCase();
let player = choice.trim();

let computerChoice = Math.floor(Math.random() * 3);
let computer;
if (computerChoice === 1) {
	computer = "rock";
} else if (computerChoice === 2) {
	computer = "paper";
} else {
	computer = "scissors";
}

let result =
	player === computer
		? "Tie Game"
		: player === "rock" && computer === "paper"
		? "Computer Wins"
		: player === "paper" && computer === "scissors"
		? "Computer Wins"
		: player === "scissors" && computer === "rock"
		? "Computer Wins"
		: player === "rock" && computer === "scissors"
		? "You Won"
		: player === "paper" && computer === "rock"
		? "You Won"
		: player === "scissors" && computer === "paper"
		? "You Won"
		: "Wrong Value";

console.log(result);
alert(result);
console.log("Your Choice Is ", player);
// alert(player);
console.log("Computer's Choice Is ", computer);
// alert(computer);
