const polaSpiral = require('./app.js');
const assert = require('assert');
const equals = require('array-equal')

describe('spiralizer', function() {
  describe('#polaSpiral([[1,2,3,4],[5,6,7,8],[9, 10, 11, 12],[13, 14, 15,16]])', function() {
    it('should return [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]', function() {
      let input = [[1,2,3,4],[5,6,7,8],[9, 10, 11, 12],[13, 14, 15,16]];
      let output = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10];
      assert(equals(output, polaSpiral(input)));
    });
  });
});

describe('spiralizer', function() {
  describe('#polaSpiral()', function() {
    it('should return [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]', function() {
      let input = [ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20] ];
      let output = [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12];
      assert(equals(output, polaSpiral(input)));
    });
  });
});
