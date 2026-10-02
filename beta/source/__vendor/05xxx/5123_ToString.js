// Module ID: 5123
// Function ID: 5124
// Name: ToString
// Dependencies: [1293, 1294]

// Module 5123 (ToString)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;

let closure_2 = GetIntrinsic("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Cannot convert a Symbol value to a string");
    throw tmp3;
  } else {
    return closure_2(arg0);
  }
};
