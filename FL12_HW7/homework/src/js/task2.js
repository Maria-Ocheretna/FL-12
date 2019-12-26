let playConfirm, randomNumber, userGuessNumber, playAgainConfirm = true, i = 0,
gameContinueConfirm = false, userPrize = 0, initialMaxRangeNumber = 9, 
maxRangeNumber = initialMaxRangeNumber, initialMaxPrize = 100, maxPrize = initialMaxPrize,
attemptPrize = maxPrize, maxAttempts = 3, maxPrizeChanger = 2, maxRangeNumberChanger = 4;

playConfirm = confirm('Do you want to play a game');
if(!playConfirm) {
    alert('You did not become a billionaire, but can.');
} else {
    while(playAgainConfirm) {
        randomNumber = Math.floor(Math.random() * maxRangeNumber); 
        while(!gameContinueConfirm && playAgainConfirm && i < maxAttempts) {
            userGuessNumber = prompt('Choose a roulette pocket number from 0 to '+(maxRangeNumber-1)+'\n'+
                                    'Attempts left: '+(maxAttempts-i)+'\n'+
                                    'Total prize: '+userPrize+'$\n'+
                                    'Possible prize on current attempt: '+attemptPrize+'$');
            if(parseInt(userGuessNumber) === randomNumber) {
                userPrize = userPrize + attemptPrize;
                gameContinueConfirm = confirm('Congratulation, you won! Your prize is: '+
                attemptPrize+'$. Do you want to continue?');
                if(!gameContinueConfirm) {
                    alert('Thank you for your participation. Your prize is: '+userPrize+'$');
                    playAgainConfirm = confirm('Do you want to play again?');
                    if(playAgainConfirm) {
                        i = 0;
                        userPrize = 0;
                        maxRangeNumber = initialMaxRangeNumber;
                        maxPrize = initialMaxPrize;
                        attemptPrize = maxPrize;
                    }            
                } 
            } else {
                attemptPrize = attemptPrize/maxPrizeChanger;
                i++;
            }
        } if(i === maxAttempts && parseInt(userGuessNumber) !== randomNumber) {
            alert('Thank you for your participation. Your prize is: '+userPrize+'$');
            playAgainConfirm = confirm('Do you want to play again?');
            if(playAgainConfirm) {
                userPrize = 0;
                maxRangeNumber = initialMaxRangeNumber;
                maxPrize = initialMaxPrize;
                attemptPrize = maxPrize;
            }
        } if(gameContinueConfirm) {
            maxRangeNumber = maxRangeNumber + maxRangeNumberChanger;
            maxPrize = maxPrize * maxPrizeChanger;  
            attemptPrize = maxPrize;
        } i = 0;
        gameContinueConfirm = false;
    }
}


