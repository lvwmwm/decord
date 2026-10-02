// Module ID: 5112
// Function ID: 5113
// Name: ToNumber
// Dependencies: [1293, 5113, 5114, 1294, 5119]

// Module 5112 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import isPrimitive from "isPrimitive" /* 5113 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(5114)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const self3 = this;
    const self4 = this;
    const tmp8 = new _mod1294("Cannot convert a Symbol value to a number");
    throw tmp8;
  } else if (typeof tmp3 === "bigint") {
    const self = this;
    const self2 = this;
    const tmp6 = new _mod1294("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp6;
  } else {
    let tmp5;
    if (typeof tmp3 === "string") {
      tmp5 = tmp(5119)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
