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
        
        if(this.turn.guess !== this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id)
            console.log(this.incorrectGuesses)
        }
        this.deck.cards.shift()
        return this.turn.giveFeedback()
        







    }
}
module.exports = Round