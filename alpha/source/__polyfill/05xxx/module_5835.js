// Module ID: 5835
// Function ID: 5836
// Dependencies: [668, 549, 5836]

// Module 5835
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 668 */;
import constant from "constant" /* 5836 */;

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
