// Module ID: 553
// Function ID: 554
// Name: isSymbol
// Dependencies: [535, 522]

// Module 553 (isSymbol)
import isObjectLike from "isObjectLike" /* 535 */;


export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (!tmp) {
    let tmp2 = isObjectLike(arg0);
    const tmp3 = require;
    if (tmp2) {
      tmp2 = "[object Symbol]" == tmp3(522)(arg0);
    }
    tmp = tmp2;
  }
  return tmp;
};
