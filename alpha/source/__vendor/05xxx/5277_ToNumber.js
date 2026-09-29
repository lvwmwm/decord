// Module ID: 5277
// Function ID: 5278
// Name: ToNumber
// Dependencies: [1281, 5278, 5279, 1282, 5284]

// Module 5277 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod5278 from "module_5278" /* 5278 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5278(arg0)) {
    tmp3 = tmp(5279)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5284)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
