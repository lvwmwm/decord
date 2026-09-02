// Module ID: 4785
// Function ID: 4786
// Name: ToString
// Dependencies: [537, 538]

// Module 4785 (ToString)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import _mod538 from "module_538" /* 538 */;

let closure_2 = getEvalledConstructor("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod538("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
};
