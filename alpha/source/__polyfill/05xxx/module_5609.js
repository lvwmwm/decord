// Module ID: 5609
// Function ID: 5610
// Dependencies: [668, 549, 5610]

// Module 5609
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 668 */;
import constant from "constant" /* 5610 */;

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
