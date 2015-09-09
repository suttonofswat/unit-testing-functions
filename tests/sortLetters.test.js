'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('should exist', function() {
		expect(functions.sortLetters).not.to.be.undefined;
	});
	it('should throw an exception if the input is not a string', function() {
		expect(function() {functions.sortLetters([1])}).to.throw('Invalid Input');
	});
	it('returns the string alphabetical', function() {
		expect(functions.sortLetters('cba')).to.be.deep.equal('abc')
	});
});