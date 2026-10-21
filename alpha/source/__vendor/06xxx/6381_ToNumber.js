// Module ID: 6381
// Function ID: 6382
// Name: ToNumber
// Dependencies: [1307, 6382, 6383, 1308, 6388]

// Module 6381 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import isPrimitive from "isPrimitive" /* 6382 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(6383)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const self3 = this;
    const self4 = this;
    const tmp8 = new _mod1308("Cannot convert a Symbol value to a number");
    throw tmp8;
  } else if (typeof tmp3 === "bigint") {
    const self = this;
    const self2 = this;
    const tmp6 = new _mod1308("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp6;
  } else {
    let tmp5;
    if (typeof tmp3 === "string") {
      tmp5 = tmp(6388)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
