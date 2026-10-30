// Module ID: 6468
// Function ID: 6469
// Name: ToNumber
// Dependencies: [1293, 6469, 6470, 1294, 6475]

// Module 6468 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import isPrimitive from "isPrimitive" /* 6469 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(6470)(arg0, closure_2);
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
      tmp5 = tmp(6475)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
