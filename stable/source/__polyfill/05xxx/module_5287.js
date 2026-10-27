// Module ID: 5287
// Function ID: 5288
// Dependencies: [680, 549, 5288]

// Module 5287
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 680 */;
import constant from "constant" /* 5288 */;

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
