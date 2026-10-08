// Module ID: 5186
// Function ID: 5187
// Dependencies: [680, 549, 5187]

// Module 5186
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 680 */;
import constant from "constant" /* 5187 */;

let fn;
if (getNative) {
  fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    const tmp = getNative;
    return tmp(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
