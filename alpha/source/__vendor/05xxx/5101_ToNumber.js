// Module ID: 5101
// Function ID: 5102
// Name: ToNumber
// Dependencies: [1281, 5102, 5103, 1282, 5108]

// Module 5101 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod5102 from "module_5102" /* 5102 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5102(arg0)) {
    tmp3 = tmp(5103)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5108)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
