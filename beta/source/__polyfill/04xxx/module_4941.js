// Module ID: 4941
// Function ID: 4942
// Dependencies: [669, 549, 4942]

// Module 4941
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 669 */;
import constant from "constant" /* 4942 */;

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
