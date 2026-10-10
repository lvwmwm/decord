// Module ID: 5674
// Function ID: 5675
// Name: ToString
// Dependencies: [1305, 1306]

// Module 5674 (ToString)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;

let closure_2 = GetIntrinsic("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("Cannot convert a Symbol value to a string");
    throw tmp3;
  } else {
    return closure_2(arg0);
  }
};
