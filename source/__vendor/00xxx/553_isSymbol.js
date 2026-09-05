// Module ID: 553
// Function ID: 554
// Name: isSymbol
// Dependencies: [535, 522]

// Module 553 (isSymbol)
import isObjectLike from "isObjectLike" /* 535 */;


export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (typeof arg0 !== "symbol") {
    let tmp2 = isObjectLike(arg0);
    if (tmp2) {
      tmp2 = "[object Symbol]" == tmp3(522)(arg0);
    }
    tmp = tmp2;
    tmp3 = require;
  }
  return tmp;
};
