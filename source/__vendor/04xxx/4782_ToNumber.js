// Module ID: 4782
// Function ID: 4783
// Name: ToNumber
// Dependencies: [537, 4783, 4784, 538, 4789]

// Module 4782 (ToNumber)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import isPrimitive from "isPrimitive" /* 4783 */;

let closure_2 = getEvalledConstructor("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(4784)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(538)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(538)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4789)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
