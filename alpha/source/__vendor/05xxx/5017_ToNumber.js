// Module ID: 5017
// Function ID: 5018
// Name: ToNumber
// Dependencies: [1281, 5018, 5019, 1282, 5024]

// Module 5017 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod5018 from "module_5018" /* 5018 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5018(arg0)) {
    tmp3 = tmp(5019)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5024)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
