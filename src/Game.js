const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Round = require('../src/round')
const Deck = require('../src/deck')


class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    this.cards = prototypeQuestions.map(card => {
      return card = new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    this.currentRound = new Round(this.cards);
    this.printMessage();
    this.printQuestion(this.currentRound);
  };

  printMessage() {
    console.log(`Welcome to FlashCards! You are playing with ${this.currentRound.deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;