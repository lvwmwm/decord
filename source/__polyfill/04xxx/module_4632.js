// Module ID: 4632
// Function ID: 4633
// Dependencies: [802, 631, 4633]

// Module 4632
import identity from "identity" /* 631 */;
import getNative from "getNative" /* 802 */;
import constant from "constant" /* 4633 */;

if (getNative) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return getNative(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
