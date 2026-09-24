// Module ID: 4895
// Function ID: 4896
// Dependencies: [673, 549, 4896]

// Module 4895
import identity from "identity" /* 549 */;
import _mod673 from "module_673" /* 673 */;
import constant from "constant" /* 4896 */;

if (_mod673) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod673(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
