let cards = [];
let sum = 0;

let hasBlackjack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')


function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum:" + sum;


    if (sum < 21){
        message = ('Do You Want To Draw A New Card?');
        hasBlackjack = false
        isAlive = true
    }
    
    else if (sum === 21){
        message = ('Wohoo! You Have Got Black Jack!');
        hasBlackjack = true
        isAlive = true
    }
    
    else{
        message = ('You are out of the game!');
        hasBlackjack = false
        isAlive = false
    }
    
    messageEl.textContent = message;
}


function newCard(){
    
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        renderGame()
    }
    
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if (randomNumber === 1) {
        return 11;        
    }

    else if (randomNumber > 10) {
        return 10
    }

    else{
        return randomNumber
    }
}
