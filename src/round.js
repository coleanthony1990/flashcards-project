const Turn = require('../src/turns');
const Deck = require('../src/deck');

class Round {
    constructor(deck) {
        this.deck = deck
        this.currentCard = deck.cards[0]
        this.turnCount = 0
        this.incorrectGuesses = []
    }
    returnCurrentCard() {
        return this.currentCard
        
    }
    takeTurn(guess) {
        this.turnCount++
        this.turn = new Turn(guess, this.currentCard)
        if(this.turn.guess !== this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.deck.cards.shift()
        this.currentCard = this.deck.cards[0]
        return this.turn.giveFeedback()
    }
    calculatePercentCorrect() {
        return 100 - (this.incorrectGuesses.length/this.turnCount * 100) + '%'
    }  
}
module.exports = Round