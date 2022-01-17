"use strict";

const prevMultOfThree = (n) => {
  let numStr = "" + n;
  let num = n;
  for (let i = 0; i < numStr.length; i++) {
    if (num < 3) {
      return null;
    } else if (num % 3 === 0) {
      return num;
    } else if (num % 3 !== 0) {
      num = Math.floor(num / 10);
      continue;
    }
  }
};
prevMultOfThree(1244);
