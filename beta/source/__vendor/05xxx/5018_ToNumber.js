// Module ID: 5018
// Function ID: 5019
// Name: ToNumber
// Dependencies: [1285, 5019, 5020, 1286, 5025]

// Module 5018 (ToNumber)
import _mod1285 from "module_1285" /* 1285 */;
import _mod5019 from "module_5019" /* 5019 */;

let closure_2 = _mod1285("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5019(arg0)) {
    tmp3 = tmp(5020)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1286)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1286)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5025)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
