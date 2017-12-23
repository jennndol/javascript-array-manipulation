const getCombinations = require('./app.js');
const assert = require('assert');
const equals = require('array-equal')

describe('subword-combination', function() {
  describe('#getCombinations()', function() {
    it('should return ["c", "cr", "cro", "cros", "r", "ro", "ros", "o", "os", "s"]', function() {
      let input = 'cros';
      let output = ['c', 'cr', 'cro', 'cros', 'r', 'ro', 'ros', 'o', 'os', 's'];
      assert(equals(output, getCombinations(input)));
    });
  });
});

describe('subword-combination', function() {
  describe('#getCombinations()', function() {
    it('should return ["a", "ar", "art", "arti", "artic", "r", "rt", "rti", "rtic", "t", "ti", "tic", "i", "ic", "c"]', function() {
      let input = 'artic';
      let output = ['a', 'ar', 'art', 'arti', 'artic', 'r', 'rt', 'rti', 'rtic', 't', 'ti', 'tic', 'i', 'ic', 'c'];
      assert(equals(output, getCombinations(input)));
    });
  });
});
