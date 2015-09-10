'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {
	it('should exist', function() {
		expect(functions.sumSquares).not.to.be.undefined;
	});
	it('should throw an exception if the input is not a number', function() {
		expect(function() {functions.sumSquares('a')}).to.throw('Invalid Input');
	});
	it('should not allow zero or negative numbers', function() {
		expect(function() {functions.sumSquares(-2) }).to.throw('Invalid Input')
		expect(function() {functions.sumSquares(0) }).to.throw('Invalid Input')
	})
	it('should return the sum of all the squares', function() {
		expect(functions.sumSquares(3)).to.deep.equal(14);
	});
});