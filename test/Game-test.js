const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Round = require('../src/round');
const Card = require('../src/Card');
const Turn = require('../src/turns');
const Deck = require('../src/deck');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');

describe('Game', function() {
let game;
    beforeEach(() => {
        game = new Game()
    })

    it('should be a function', function() {
        expect(Game).to.be.a('function')
    })
    it('should keep track of the current round', function() {
        
        expect(game.currentRound).to.equal(undefined)
    })
    it('should put cards in a deck', function() {
        game.start()
        expect(game.cards.length).to.deep.equal(prototypeQuestions.length)
    })
    it('should create a new round', function() {
        game.start()
        expect(game.currentRound).to.be.an.instanceof(Round)
    })
    it('should print a welcome message', function() {
        game.start()
        expect
    })




})
