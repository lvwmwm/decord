// Module ID: 5670
// Function ID: 5671
// Name: ToString
// Dependencies: [1304, 1305]

// Module 5670 (ToString)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;

let closure_2 = GetIntrinsic("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Cannot convert a Symbol value to a string");
    throw tmp3;
  } else {
    return closure_2(arg0);
  }
};
