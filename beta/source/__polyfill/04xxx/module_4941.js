// Module ID: 4941
// Function ID: 4942
// Dependencies: [669, 549, 4942]

// Module 4941
import identity from "identity" /* 549 */;
import _mod669 from "module_669" /* 669 */;
import constant from "constant" /* 4942 */;

if (_mod669) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return _mod669(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
