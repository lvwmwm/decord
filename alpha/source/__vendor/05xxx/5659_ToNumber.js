// Module ID: 5659
// Function ID: 5660
// Name: ToNumber
// Dependencies: [1304, 5660, 5661, 1305, 5666]

// Module 5659 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import isPrimitive from "isPrimitive" /* 5660 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(5661)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const self3 = this;
    const self4 = this;
    const tmp8 = new _mod1305("Cannot convert a Symbol value to a number");
    throw tmp8;
  } else if (typeof tmp3 === "bigint") {
    const self = this;
    const self2 = this;
    const tmp6 = new _mod1305("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp6;
  } else {
    let tmp5;
    if (typeof tmp3 === "string") {
      tmp5 = tmp(5666)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
