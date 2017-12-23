'use strict'

const polaSpiral = function (array) {
  let result = [];
  let atas = 0;
  let kiri = 0;
  let kanan = array[0].length;
  let bawah = array.length;

  while (atas < bawah && kiri < kanan) {
    //atas
    for (var i = kiri; i < kanan; i++) {
      result.push(array[atas][i]);
    }
    atas++;

    //kanan
    for (var i = atas; i < bawah; i++) {
      result.push(array[i][kanan - 1]);
    }
    kanan--;

    if (atas < bawah) {
      //bawah
      for (var i = kanan - 1; i >= kiri; i--) {
        result.push(array[bawah - 1][i]);
      }
      bawah--;
    }

    if (kiri < kanan) {
      //kiri
      for (var i = bawah - 1; i >= atas; i--) {
        result.push(array[i][kiri]);
      }
      kiri++;
    }
  }
  return result;
};

// DRIVER CODE
console.log(polaSpiral([[1,2,3,4],[5,6,7,8],[9, 10, 11, 12],[13, 14, 15,16]]));
console.log(polaSpiral([ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20] ]));

module.exports = polaSpiral;
