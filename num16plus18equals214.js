"use strict";

function piecewiseAdd(addendA, addendB) {
  let sumString = "";
  while (addendA || addendB) {
    sumString = (addendA % 10) + (addendB % 10) + sumString;
    addendA = Math.floor(addendA / 10);
    addendB = Math.floor(addendB / 10);
  }
  return +sumString;
}

console.log(piecewiseAdd(16, 18));
