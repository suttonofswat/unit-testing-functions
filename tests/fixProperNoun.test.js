'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('should exist', function() {
		expect(functions.fixProperNoun).not.to.be.undefined;
	});
	
	it('should throw an exception if the input is not a string', function() {
		expect(function() {functions.fixProperNoun([1])}).to.throw('Invalid Input');
	});

	it('should return \'Abc\' if a \'abc\' is passed in', function() {
		expect(functions.fixProperNoun('abc')).to.be.equal('Abc');
	});
	
});