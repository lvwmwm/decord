// Module ID: 4673
// Function ID: 4674
// Name: ToString
// Dependencies: [540, 541]

// Module 4673 (ToString)
import getEvalledConstructor from "getEvalledConstructor" /* 540 */;
import _mod541 from "module_541" /* 541 */;

let closure_2 = getEvalledConstructor("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod541("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
};
