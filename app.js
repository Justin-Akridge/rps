//rockpaperscissors
//hello 
function playRound(playerSelection, computerSelection){
    matchRules();
        computerSelection();
        playerSelection();
    console.log(playRound(playerSelection, computerSelection));
    }
    playRound();
    function computerselection(){
        const randomNumber = (Math.floor(Math.random() * 3));
        if (randomNumber === 0){
            return 'rock';
        }
    
        else if (randomNumber === 1){
            return "paper";
        }
        else if (randomNumber === 2){
            return 'scissor';
        }
    }
    
    
    function playerSelection(){
        const prompt = require('prompt-sync')();
       let playerInput= prompt("Rock, Paper or Scissors?");alert("Your answer is " + selectionInput);
        selectionInput = selectionInput.toLowerCase();
            if (selectionInput === "Rock"){
                return "Rock";
            }
            else if (selectionInput === "Paper"){
                return "Paper";
            }
            else if (selectionInput === "Scissors"){
                return "Scissors";
            }
            else if (selectionInput !== "Rock" && selectionInput !== "Scissors" && selectionInput !== "Paper"){
                return "Not a valid response";
            }
        
    }
    
    function matchRules(){
        if(playerSelection() === "rock" && computerselection()=== "scissors" || 
            playerselection() === "paper" && computerSelection() === "scissors" || 
            playerSelection() === "scissors" && computerSelection() === "paper"){
            return "Player wins"
        }
        else return "computer wins!"
    }
    
