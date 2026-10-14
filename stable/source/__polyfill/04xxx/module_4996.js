// Module ID: 4996
// Function ID: 4997
// Dependencies: [680, 549, 4997]

// Module 4996
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 680 */;
import constant from "constant" /* 4997 */;

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
