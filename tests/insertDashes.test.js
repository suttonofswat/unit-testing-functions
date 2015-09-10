'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {
	it('should exist', function() {
		expect(functions.insertDashes).not.to.be.undefined;
	});
	
	it('should throw an exception if the input is not a string', function() {
		expect(function() {functions.insertDashes([1])}).to.throw('Invalid Input');
	});

	it('should return \'a-b-c\' if a \'abc\' is passed in', function() {
		expect(functions.insertDashes('abc')).to.be.equal('a-b-c');
	});
	
});