// Module ID: 5307
// Function ID: 5308
// Name: ToNumber
// Dependencies: [1281, 5308, 5309, 1282, 5314]

// Module 5307 (ToNumber)
import _mod1281 from "module_1281" /* 1281 */;
import _mod5308 from "module_5308" /* 5308 */;

let closure_2 = _mod1281("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!_mod5308(arg0)) {
    tmp3 = tmp(5309)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(1282)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(1282)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(5314)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
