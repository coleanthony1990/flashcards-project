const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round')
const Card = require('../src/Card')
const Deck = require('../src/deck')
const Turn = require('../src/turns')

describe('Round', function() {
    let deck, card1, card2, card3, round;

    beforeEach(() => {
      card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
      card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
      card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
      card4 = new Card(4, 'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ['mutator method', 'accessor method', 'iteration method'], 'accessor method')
      deck = new Deck([card1, card2, card3]);
      round = new Round(deck)
    })

    it('should be a function', function() {
        expect(Round).to.be.a('function')
    })
    it('should have a current card', function() {
        expect(round.currentCard.id).to.equal(1)
    })
    it('should start with turn 0', function() {
        expect(round.turnCount).to.equal(0)
    })
    it('should start with no incorrect guesses', function() {
        expect(round.incorrectGuesses).to.deep.equal([])
    })
    it('Should be able to return the current card', function() {
        expect(round.returnCurrentCard()).to.deep.equal(round.currentCard)
    })
    it('should be able to track turns taken', function() {
        round.takeTurn('object')
        expect(round.turnCount).to.equal(1)
    })
    it('should be able to change the current card', function() {
        round.takeTurn('object')
        expect(round.deck.cards[0].id).to.equal(2)
    })
    it('should be able to track incorrect guesses', function() {
        round.takeTurn('Serena Williams')
        expect(round.turnCount).to.equal(1)
        expect(round.incorrectGuesses[0]).to.deep.equal(1)
    })
    it('should be able to evaluate guess', function() {
        round.takeTurn('object')
        expect(round.incorrectGuesses.length).to.equal(0)
        expect(round.turn.evaluateGuess()).to.deep.equal(true);
        expect(round.turn.giveFeedback()).to.deep.equal('Correct!');

        round.takeTurn('Serena Williams')
        expect(round.incorrectGuesses.length).to.equal(1)
        expect(round.turn.evaluateGuess()).to.deep.equal(false);
        expect(round.turn.giveFeedback()).to.deep.equal('Incorrect!');

    })
    it('should give feedback', function() {
        expect(round.takeTurn('object')).to.equal('Correct!')
        expect(round.takeTurn('Serena Williams')).to.equal('Incorrect!')
    })
    it('should calculate the score', function() {
        round.takeTurn('object')
        round.takeTurn('array')
        round.takeTurn('mutator method')
        round.takeTurn('Serena Williams')

        expect(round.calculatePercentCorrect()).to.equal('75%')
    })

})

