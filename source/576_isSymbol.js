// Module ID: 576
// Function ID: 6960
// Name: isSymbol
// Dependencies: []

// Module 576 (isSymbol)

export default function isSymbol(arg0) {
  let tmp = "symbol" === typeof arg0;
  if (!tmp) {
    let tmp4 = require(dependencyMap[0])(arg0);
    if (tmp4) {
      tmp4 = "[object Symbol]" == require(dependencyMap[1])(arg0);
    }
    tmp = tmp4;
  }
  return tmp;
};
