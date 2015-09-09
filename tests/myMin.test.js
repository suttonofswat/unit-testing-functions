'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('should exist', function() {
		expect(functions.myMin).not.to.be.undefined;
	});
	it('should throw an exception if the input is not a number', function() {
		expect(function() {functions.myMin([1],'a')}).to.throw('Invalid Input');
	});
	it('returns interger1 if integer1 is lower value', function() {
		expect(functions.myMin(1, 9)).to.be.deep.equal(1)
	});
	it('returns interger2 if integer2 is lower value', function() {
		expect(functions.myMin(9, 1)).to.be.deep.equal(1)
	});
});