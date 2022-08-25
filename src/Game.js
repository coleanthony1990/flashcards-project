const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Round = require('../src/round')


class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    this.cards = prototypeQuestions.map(card => {
      return card = new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    this.currentRound = new Round(this.cards);
    
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;