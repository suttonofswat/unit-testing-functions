'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function() {
		expect(functions.studentPairs).not.to.be.undefined;
	});
	it('should not accept empty input', function() {
		expect(function() { functions.studentPairs() }).to.throw('Invalid Input');
	});
	it('should not accept string input', function() {
		expect(function() { functions.studentPairs['g'] }).to.throw('Invalid Input');
	});
	it('should return an array', function() {
		expect(functions.studentPairs(['a','b'])).to.be.instanceOf(Array);
	});
	it('should not allow non-string students', function() {
		expect(function() {functions.studentPairs([1,2,3]) }).to.throw('Invalid Input')
	})
	
});

//check that array gives half the length, and that each pair has 2 students