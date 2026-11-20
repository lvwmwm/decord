// Module ID: 5611
// Function ID: 5612
// Dependencies: [668, 549, 5612]

// Module 5611
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 668 */;
import constant from "constant" /* 5612 */;

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
