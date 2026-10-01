// Module ID: 5111
// Function ID: 5112
// Name: ToNumber
// Dependencies: [1281, 5112, 5113, 1282, 5118]

// Module 5111 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import isPrimitive from "isPrimitive" /* 5112 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(5113)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const self3 = this;
    const self4 = this;
    const tmp8 = new _mod1282("Cannot convert a Symbol value to a number");
    throw tmp8;
  } else if (typeof tmp3 === "bigint") {
    const self = this;
    const self2 = this;
    const tmp6 = new _mod1282("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp6;
  } else {
    let tmp5;
    if (typeof tmp3 === "string") {
      tmp5 = tmp(5118)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
