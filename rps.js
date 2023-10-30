    const playerTxt = document.querySelector("#playerTxt");
    const computerTxt = document.querySelector("#computerTxt");
    const resultTxt = document.querySelector("#resultTxt");
    const playerBtn = document.querySelectorAll(".playerBtn");
    // variables for player and computer choice
    let player;
    let computer;
    let result;


// for each button within our player button used a arrow function
    playerBtn.forEach(button => button.addEventListener("click", () => {
// players choice equal to whichever button is selected to get text content
        player = button.textContent;
        computerTurn();
        //temprate literal with placeholder
        playerTxt.textContent = `Player: ${player}`;
        computerTxt.textContent = `Computer: ${computer}`; 
        // invoke a checkwinner function
        resultTxt.textContent = checkWinner(); 
        
}));

    function computerTurn(){
        // random number between 1-3. only 3 choices, multiply by 3 and add 1 which will chose a number random 1-3
        const randNum = Math.floor(Math.random() * 3) + 1;
// find any matching cases
        switch(randNum){
          case 1: 
           computer = "ROCK";
           break;
          case 2 : 
           computer = "PAPER";
          case 3 : 
           computer = "SCISSORS ";
            break;  
        }
    }
    function checkWinner(){
        // if the player and computer screen are the same, return a value which is a string
        if(player == computer){
            return "Draw";
        }
        // if computer is equal to rock, is player equal to paper, if so it will return a string of you win 
        else if(computer == "ROCK"){
            return (player == "PAPER") ? "You Win!" : "You Lose!" 
        }
        else if(computer == "PAPER"){
            return (player === "SCISSORS") ? "You Win!" : "You Lose!" 
        }
        else if (computer == "SCISSORS"){
            return (player == "ROCK") ? "You Win!" : "You Lose!"
        } 
    }    
    
