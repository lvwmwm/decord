// Module ID: 5122
// Function ID: 5123
// Name: ToString
// Dependencies: [1281, 1282]

// Module 5122 (ToString)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;

let closure_2 = GetIntrinsic("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Cannot convert a Symbol value to a string");
    throw tmp3;
  } else {
    return closure_2(arg0);
  }
};
