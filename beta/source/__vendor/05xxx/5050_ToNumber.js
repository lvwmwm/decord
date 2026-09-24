// Module ID: 5050
// Function ID: 5051
// Name: ToNumber
// Dependencies: [1285, 5051, 5052, 1286, 5057]

// Module 5050 (ToNumber)
import _mod1285 from "module_1285" /* 1285 */;
import _mod5051 from "module_5051" /* 5051 */;

let closure_2 = _mod1285("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5051(arg0)) {
    tmp3 = tmp(5052)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1286)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1286)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5057)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
