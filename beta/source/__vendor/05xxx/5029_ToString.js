// Module ID: 5029
// Function ID: 5030
// Name: ToString
// Dependencies: [1285, 1286]

// Module 5029 (ToString)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;

let closure_2 = _mod1285("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1286("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};
