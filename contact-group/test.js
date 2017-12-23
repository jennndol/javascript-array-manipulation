const showContactByGroup = require('./app.js');
const assert = require('assert');
const equals = require('array-equal')

describe('Teman Kuliah', function() {
  describe(`#showContactByGroup('Teman Kuliah')`, function() {
    it('should return [ "Andi", "Emily" ]', function() {
      assert(equals([ "Andi", "Emily" ], showContactByGroup('Teman Kuliah')));
    });
  });
});

describe('Teman SMA', function() {
  describe(`#showContactByGroup('Teman SMA')`, function() {
    it('should return ["Andi", "Budi", "David", "Emily"]', function() {
      assert(equals(["Andi", "Budi", "David", "Emily"], showContactByGroup('Teman SMA')));
    });
  });
});

describe('Teman SMP', function() {
  describe(`#showContactByGroup('Teman SMP')`, function() {
    it('should return ["Andi", "Budi", "Cindy", "David", "Emily"]', function() {
      assert(equals(["Andi", "Budi", "Cindy", "David", "Emily"], showContactByGroup('Teman SMP')));
    });
  });
});
