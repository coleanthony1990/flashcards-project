const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round')

describe('Round', function() {

    it('should be a function', function() {
        expect(Round).to.be.a('function')
    })
})