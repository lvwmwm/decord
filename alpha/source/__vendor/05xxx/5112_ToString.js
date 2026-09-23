// Module ID: 5112
// Function ID: 5113
// Name: ToString
// Dependencies: [1281, 1282]

// Module 5112 (ToString)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;

let closure_2 = _mod1281("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1282("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
};
