// Guessing Game for the range of 0-100
// guess > secretNumber = too high
// guess < secretNumber = too low
// guess == secretnumber congratulations!

let luckyNumber = 89;
let trials = 5;

function guessGame (guess, trial) {
    if (trial == 0 && userGuess != guess){
        alert (`
        Whoops!. 
        LUCKY NUMBER is ${guess}. 
        Try again tomorrow!`)
    }
    
    while (trial > 0){
        const userGuess = ( prompt (`What's the LUCKY NUMBER for today?`));
        if (isNaN(userGuess)){
            alert (`Please put in a number!`);
            continue;
        }
        trial--;
    
       if (userGuess == guess){
            alert (`Congratulations! You really are lucky: ${luckyNumber}`)
            break;
        }
        else if (userGuess > guess){
            alert (`Too high! you have ${trial} trials left!`)
        }
        else if (userGuess < guess){
            alert (`Too Low! You have ${trial} trials left!`)
        }
    };

    

}

guessGame(luckyNumber,trials);