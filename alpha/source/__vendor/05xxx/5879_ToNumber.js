// Module ID: 5879
// Function ID: 5880
// Name: ToNumber
// Dependencies: [1305, 5880, 5881, 1306, 5886]

// Module 5879 (ToNumber)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import isPrimitive from "isPrimitive" /* 5880 */;

let closure_2 = GetIntrinsic("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!isPrimitive(arg0)) {
    tmp3 = tmp(5881)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const self3 = this;
    const self4 = this;
    const tmp8 = new _mod1306("Cannot convert a Symbol value to a number");
    throw tmp8;
  } else if (typeof tmp3 === "bigint") {
    const self = this;
    const self2 = this;
    const tmp6 = new _mod1306("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp6;
  } else {
    let tmp5;
    if (typeof tmp3 === "string") {
      tmp5 = tmp(5886)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
