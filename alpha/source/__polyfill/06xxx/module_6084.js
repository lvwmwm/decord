// Module ID: 6084
// Function ID: 6085
// Dependencies: [668, 549, 6085]

// Module 6084
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 668 */;
import constant from "constant" /* 6085 */;

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
