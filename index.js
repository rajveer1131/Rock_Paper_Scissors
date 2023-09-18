let pieces = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function play(playerSelection, computerSelection) {

    if (playerSelection == pieces[0]) {
        if (computerSelection == pieces[2]) {
            return 1;
        } else if (computerSelection == pieces[0]) {
            return 0;
        } else {
            return -1;
        }
    }

    else if (playerSelection == pieces[1]) {
        if (computerSelection == pieces[0]) {
            return 1;
        } else if (computerSelection == pieces[1]) {
            return 0;
        } else {
            return -1;
        }
    }

    else if (playerSelection == pieces[2]) {
        if (computerSelection == pieces[1]) {
            return 1;
        } else if (computerSelection == pieces[2]) {
            return 0;
        } else {
            return -1;
        }
    }

}

function game() {
    let counter = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(
            `Enter your Choice: \n("Rock","Paper","Scissors")`
        ).toUpperCase();
        let computerSelection = pieces[getComputerChoice()].toUpperCase();
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        let result = play(playerSelection, computerSelection);
        if (result == 1) {
            console.log("Round "+i+" Winner = Player");
            counter++;
        }
        else if (result == -1) {
            console.log("Round "+i+" Winner = Computer");
            counter--;
        }
        else{
            console.log("Round "+i+" Tied");
        }
        // console.log(play(playerSelection, computerSelection));
    }
    if (counter > 0) {
        console.log("\n\nYou won the game, your score is: " + counter);
    }
    else if (counter == 0) {
        console.log("\n\nGame tied\n");
    }
    else {

        console.log("\n\nYou lost the game, your score is: " + counter);
    }
}
game();
