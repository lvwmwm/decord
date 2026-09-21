// Module ID: 4863
// Function ID: 4864
// Dependencies: [673, 549, 4864]

// Module 4863
import identity from "identity" /* 549 */;
import _mod673 from "module_673" /* 673 */;
import constant from "constant" /* 4864 */;

if (_mod673) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod673(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
