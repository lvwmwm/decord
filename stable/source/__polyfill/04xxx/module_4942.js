// Module ID: 4942
// Function ID: 4943
// Dependencies: [681, 549, 4943]

// Module 4942
import identity from "identity" /* 549 */;
import getNative from "getNative" /* 681 */;
import constant from "constant" /* 4943 */;

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
