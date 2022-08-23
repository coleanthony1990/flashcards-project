const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/turns');
const Card = require('../src/Card');

describe('Turn', function() {

    it ('Should be a function', function() {
        
        expect(Turn).to.be.a('function');
    })
    it ('Should be an instance of Turn', function() {
        const turn = new Turn()
        expect(turn).to.be.an.instanceof(Turn)
    })
    
    it ('should have a guess', function() {
        const turn = new Turn('object')
        expect(turn.guess).to.equal('object')
    })

    it ('should have a card', function() {
        
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], 'object')
        const turn = new Turn('object', card)

        expect(turn.card.question).to.deep.equal('What allows you to define a set of related information using key-value pairs?')
        expect(turn.guess).to.equal('object')
    })
    it('Should return the guess', function() {
        const turn = new Turn('Hello World')
        expect(turn.returnGuess()).to.equal("Hello World")
    })
    it('Should return the card', function() {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turn = new Turn('array', card)

        expect(turn.returnCard()).to.be.an.instanceof(Card)
        
    })
    it('Should determine correct answer', function() {
        const card = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array')
        const turn1 = new Turn('array', card)
        const turn2 = new Turn('object', card)

        expect(turn1.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    })

})