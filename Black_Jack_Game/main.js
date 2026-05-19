let messageGM = document.querySelector('.message')
let cardGM = document.querySelector('.cards')
let SumGM = document.querySelector('.Sum')

let TotalSum = 0
let firstCard = 0
let secondCard = 0
let cards = []

let isAlive = false
let hasBlackjack = false

//Generating a Random number that auto change it's self.
function RandomNumber() {
    let num = Math.floor(Math.random() * 16) + 1
    // the if statement prevent the number from exceed the 10 or 11
    if (num > 11) {
        return 10
    } else if (num === 11) {
        return 10
    } else {
        return num
    }
}


function startGM() {
    isAlive = true;
    hasBlackjack = false;
    firstCard = RandomNumber();
    secondCard = RandomNumber();
    //why the cards in arrays, to display in cardGM
    cards = [firstCard, secondCard]
    TotalSum = firstCard + secondCard
    GameStart()
}

function GameStart() {
    cardGM.textContent = "Cards : "
    for (let CD = 0; CD < cards.length; CD++) {
        cardGM.textContent += cards[CD] + " ";
    }

    SumGM.textContent = "Sum : " + TotalSum;
    logic()
}

function logic() {
    let message = ""
    if (TotalSum > 21) {
        message = 'you out of the Game Thankyou!'
        isAlive = false
    } else if (TotalSum === 21) {
        message = 'you Got Black Jack hip! hip!!'
        hasBlackjack = true
    } else {
        message = 'Do you want to drew another card'
    }

    messageGM.textContent = message
}
function NewCard() {
    if (isAlive && hasBlackjack === false) {
        let thirdCard = RandomNumber()
        cards.push(thirdCard)
        TotalSum += thirdCard
        GameStart()
    } else {

    }
}