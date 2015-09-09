'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('should exist', function() {
		expect(functions.absVal).not.to.be.undefined;
	});
	it('should throw an exception if the input is not a number', function() {
		expect(function() {functions.absVal('a')}).to.throw('Invalid Input');
	});
	it('returns a whole integer', function() {
		expect(functions.absVal(1.1)).to.be.deep.equal(1)
	});
	it('returns a whole positive integer', function() {
		expect(functions.absVal(-1.1)).to.be.deep.equal(1)
	});
});