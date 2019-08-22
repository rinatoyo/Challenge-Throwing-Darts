// write tests here
const chai = require("chai");
var expect = chai.expect;
var should = chai.should();
const scoreCalculator = require("../index.js");

describe("scoreCalculator", function() {
  it("should be a function", function() {
    expect(scoreCalculator).to.be.a("function");
  });

  it("should return -1 if the collection is empty", function() {
    let emptyArray = scoreCalculator([]);
    expect(emptyArray).to.equal(-1);
  });
});
