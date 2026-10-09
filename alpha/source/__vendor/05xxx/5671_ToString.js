// Module ID: 5671
// Function ID: 5672
// Name: ToString
// Dependencies: [1305, 1306]

// Module 5671 (ToString)
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
