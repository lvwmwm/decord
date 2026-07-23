// Module ID: 576
// Function ID: 6960
// Name: isSymbol
// Dependencies: [577, 578]

// Module 576 (isSymbol)

export default function isSymbol(arg0) {
  let tmp = "symbol" === typeof arg0;
  if (!tmp) {
    let tmp4 = require(577) /* isObjectLike */(arg0);
    if (tmp4) {
      tmp4 = "[object Symbol]" == require(578) /* getTag */(arg0);
    }
    tmp = tmp4;
  }
  return tmp;
};
