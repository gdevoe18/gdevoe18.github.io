//Head or Tail selections
const buttons = document.querySelectorAll('button');
//initiate values
let heads = 1;
let tails =0;
let playerScore = 0;
let computerScore = 0;

//show player and computer picks
function selections(player, computer){
    const playerPlay = document.querySelector("#player-selection");
    const computerPlay = document.querySelector("#computer-selection");

    if (player === 'heads'){
        playerPlay.style.color = 'yellow';
    }

    if (player === 'tails'){
        playerPlay.style.color = 'yellow';
    }

    if (computer === 'heads'){
        computerPlay.style.color = 'yellow';
    }

    if (computer === 'tails'){
        computerPlay.style.color = 'yellow';
    }

    playerPlay.innerHTML = `${player}`;
    computerPlay.innerHTML = `${computer}`;
}

//show images
function randomChoice(random){
    const displayChoice = document.querySelector('#picture');

        if (random === 1){
            displayChoice.style.backgroundImage = "url('heads.png')";
        }
        else {
            displayChoice.style.backgroundImage = "url('tails.png')";
        } 
}

//Score keeping function
function keepScore(random, userChoice, computerChoice){

    const playerDisplay = document.querySelector('#player-score');
    const computerDisplay = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');

    if (userChoice === random) {
        playerScore++;
    }

    if (computerChoice ===random){
        computerScore++;
    }
    //Displaying who won or if tied
    playerDisplay.textContent = `${playerScore}`;
    computerDisplay.textContent = `${computerScore}`;

    if (playerScore === 10 && computerScore === 10){
        winner.innerHTML = `<h1>You Tied!</h1>`;
    }
    else if (playerScore === 10){
        winner.innerHTML = `<h1>You Win!</h1>`;
    }
    else if (computerScore === 10){
        winner.innerHTML = `<h1>The Computer Wins!</h1>`;
    }
}

//event listener for buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){

        const random = Math.round(Math.random());
        const computerChoice = Math.round(Math.random());

        console.log("button clicked");

        //record computer selection
        let computerPlay;
        if(computerChoice === 1){
            computerPlay = 'heads';
        }
        else {
            computerPlay = 'tails';
        }

        //flip the coin
        const flip = document.querySelector('#picture');
        flip.classList.add('animate');

        //record player selection
        const userSelection = e.target.id;
        let userChoice;

        if (userSelection === 'heads'){
            userChoice = 1;
        }
        else if (userSelection === 'tails'){
            userChoice = 0;
        }

        //displays selections
        selections(userSelection, computerPlay);
        randomChoice(random);
        
        //add scores
        setTimeout(function(){
            keepScore(random, userChoice, computerChoice);
            //reset animation
            document.querySelector('#picture').classList.remove('animate');
        }, 2000);

    })
})
