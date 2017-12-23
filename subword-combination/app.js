'use strict'

let getCombinations = (value) => {
  let result = [];
  for (var i = 0; i < value.length; i++) {
    result.push(value[i]);
    for (var j = i+1; j < value.length; j++) {
      result.push(value.slice(i, j+1));
    }
  }
  return result;
}

// DRIVER CODE
console.log(getCombinations('cros'));
console.log(getCombinations('artic'));
console.log(getCombinations('darwin'));

module.exports = getCombinations;
