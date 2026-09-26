// Module ID: 5048
// Function ID: 5049
// Name: ToNumber
// Dependencies: [1281, 5049, 5050, 1282, 5055]

// Module 5048 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod5049 from "module_5049" /* 5049 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5049(arg0)) {
    tmp3 = tmp(5050)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5055)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
