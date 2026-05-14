let messageGM = document.getElementsByClassName('message')
let cardGM = document.getElementsByClassName('cards')
let SumGM = document.getElementsByClassName('Sum')

let TotalSum = 0
let firstCard = 0
let secondCard = 0
let cards = []

let isAlive = false
let hasBlackjack = false

//Generating a Random number that auto change it's self.
function RandomNumber() {
    let num = Math.floor(Math.random() * 20)
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
    firstCard = RandomNumber();
    secondCard = RandomNumber();
    //why the cards in arrays, to display in cardGM
    cards = [firstCard, secondCard]
    TotalSum += firstCard + secondCard
    isAlive = true
    GameStart()
    //     // TotalSum = 0

}

function GameStart() {
    for (let CD = 0; CD < cards.length; CD++) {
        // cardGM[CD].textContent += cards;
        cardGM.textContent = cards[CD];
        console.log(cardGM)
    }
    // for (let SG = 0; SG < cards.length; SG++) {
    //     const element = array[SG];
            SumGM.textContent = TotalSum
            console.log(SumGM)
    // }
    logic()
    // console.log(TotalSum)
}

function logic(){
    if (TotalSum > 21) {
        messsage = 'you out of the Game Thankyou!'
        isAlive = false
    } else if (TotalSum === 21) {
        messsage = 'you Got Black Jack hip! hip!!'
        hasBlackjack = true
    } else {
        message = 'Do you want to drew another card'
    }

    messageGM.textContent += message
    console.log(messageGM)

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