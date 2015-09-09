'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('should exist', function() {
		expect(functions.myMax).not.to.be.undefined;
	});
	it('should throw an exception if the input is not an array', function() {
		expect(function() {functions.concatenateArrays(1,2)}).to.throw('Invalid Input');
	});
	it('should throw an exception if the input is not an array', function() {
		expect(function() {functions.myMax(1,2)}).to.throw('Invalid Input');
	});
	it('returns the highest value', function() {
		expect(functions.myMax([10,5,20])).to.be.deep.equal(20)
	});

	
	
});