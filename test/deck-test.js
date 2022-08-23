const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/card');

describe('Deck', function() {
    let deck, card1, card2, card3, card4;

    beforeEach(() => {
      card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
      card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
      deck = new Deck([card1, card2, card3]);
    });

    it('Should be a function', function() {

        expect(Deck).to.be.a('function')
    })
    it('Should be an instance of Deck', function() {
        expect(deck).to.be.an.instanceof(Deck)
    })
    it('Should have an array of cards', function() {
        expect(deck.cards[0].correctAnswer).to.deep.equal("object")
        expect(deck.cards[1].correctAnswer).to.deep.equal("array")
    })
    it('Should count the amount of cards in a deck', function() {
        expect(deck.countCards()).to.equal(3)
    })
})