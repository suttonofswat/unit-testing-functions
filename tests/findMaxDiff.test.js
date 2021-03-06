'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {
	it('should exist', function() {
		expect(functions.findMaxDiff).not.to.be.undefined;
	});
	it('should throw an exception if the input is not an array', function() {
		expect(function() {functions.findMaxDiff(1,2)}).to.throw('Invalid Input');
	});
	it('should throw an exception if the input is not a number', function() {
		expect(function() {functions.findMaxDiff('a')}).to.throw('Invalid Input');
	});
	it('should return the max difference of the array', function() {
		expect(functions.findMaxDiff([5, 4, 3, 2, 8])).to.deep.equal(6);
	});
	// it('should return the sum of all the squares', function() {
	// 	expect(functions.sumSquares(3)).to.deep.equal(14);
	// });
});