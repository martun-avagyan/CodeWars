"use strict";
"use strict";
function digPow(n, p) {
  let nToPowered = 0;
  let numStr = n.toString();
  for (let i = 0; i < numStr.length; i++) {
    nToPowered += Math.pow(numStr[i], p);
    p++;
  }
  if (nToPowered % n === 0) {
    return nToPowered / n;
  } else {
    return -1;
  }
}
