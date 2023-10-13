let pieces = ["ROCK", "PAPER", "SCISSORS"];
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {
        if (computerSelection == "SCISSORS") {
            console.log("Round Winner = Player");
            return 1;
        } else if (computerSelection == "ROCK") {
            console.log("Round Tied");
        } else {
            console.log("Round Winner = Computer");
            return -1;
        }
    }

    else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            console.log("Round Winner = Player");
            return 1;
        } else if (computerSelection == "PAPER") {
            console.log("Round Tied");
        } else {
            console.log("Round Winner = Computer");
            return -1;
        }
    }

    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            console.log("Round Winner = Player");
            return 1;
        } else if (computerSelection == "SCISSORS") {
            console.log("Round Tied");
        } else {
            console.log("Round Winner = Computer");
            return -1;
        }
    }

}


const btn=document.querySelectorAll('button');

const rock=document.querySelector('rock');
const paper=document.querySelector('paper');
const scissors=document.querySelector('scissors');




let pCounter=0;
let cCounter=0;

    btn.forEach((e)=>{
        e.addEventListener('click',(ex)=>{
            
        const pRes=document.querySelector('#playerResult');
        const cRes=document.querySelector('#computerResult');
        const finalRes=document.querySelector('#finalResult');
        
        let playerSelection = e.value.toUpperCase();
        let computerSelection = pieces[getComputerChoice()];

        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            
            pCounter++;
            console.log("P:"+pCounter);
            // updateVal();
            pRes.textContent=pCounter;
        }
        else if (result == -1) {
            
            cCounter++;
            console.log("C: "+cCounter);
            // updateVal();
            cRes.textContent=cCounter;
        }

        if(pCounter==5){
            finalRes.textContent="Player Won ";
           finalResult();
        }
        else if(cCounter==5){
            finalRes.textContent="Computer Won ";
            finalResult();
        }
        function finalResult(){
            cRes.textContent=0;
            pRes.textContent=0;
            cCounter=0;
            pCounter=0;
        }
                

        
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
    })
})










