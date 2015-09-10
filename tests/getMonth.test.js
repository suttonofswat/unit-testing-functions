'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
	it('should exist', function() {
		expect(functions.getMonth).not.to.be.undefined;
	});
	it('should throw an exception if the input is not a number', function() {
		expect(function() {functions.getMonth('a')}).to.throw('Invalid Input');
	});
	it('should throw an exception if the input is greater than 0 or more than 13', function() {
		expect(function() {functions.getMonth(13)}).to.throw('Invalid Input');
	});
	it('should map number with correct month', function() {
		expect(functions.getMonth(1)).to.be.deep.equal('January');
	});

	
	
});