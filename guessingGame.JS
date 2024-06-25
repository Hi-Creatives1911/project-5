// Guessing Game for the range of 0-100
// guess > secretNumber = too high
// guess < secretNumber = too low
// guess == secretnumber congratulations!

let luckyNumber = Math.floor (Math.random() * 100 + 10);
let trials = 5;

while (trials > 0){
    const userGuess = ( prompt (`What's the LUCKY NUMBER for today?`));
    if (isNaN(userGuess)){
        alert (`Please put in a number!`);
        continue;
    }
    trials--;

    if (userGuess > luckyNumber){
        alert (`Too high! you have ${trials} trials left!`)
    }
    else if (userGuess < luckyNumber){
        alert (`Too Low! You have ${trials} trials left!`)
    }
    else {
        alert (`Congratulations! You really are lucky: ${luckyNumber}`)
    }
};

if (trials == 0){
    alert (`
    Whoops!. 
    LUCKY NUMBER is ${luckyNumber}. 
    Try again tomorrow!`)
}