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
        this.turn = new Turn(guess, this.currentCard)
        this.turnCount++
        this.deck.cards.shift()
        if(this.turn.guess !== this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        return this.turn.giveFeedback()
        
    }
    calculatePercentCorrect() {
        return this.incorrectGuesses.length/this.turnCount * 100 + '%'
        
    }
    
}
module.exports = Round