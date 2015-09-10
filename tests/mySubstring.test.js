'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {
	it('should exist', function() {
		expect(functions.mySubstring).not.to.be.undefined;
	});
	
	it('should throw an exception if the input is not a string', function() {
		expect(function() {functions.mySubstring([1])}).to.throw('Invalid Input');
	});
	it('should throw an exception if two numbers do not follow the string', function() {
		expect(function() {functions.mySubstring('a','b')}).to.throw('Invalid Input');
	});

	it('should return \'cd\' if a \'abcde\' is passed in', function() {
		expect(functions.mySubstring('abcde', 2, 4)).to.be.equal('cd');
	});
	
});