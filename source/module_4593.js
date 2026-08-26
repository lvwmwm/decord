// Module ID: 4593
// Function ID: 4594
// Dependencies: [805, 634, 4594]

// Module 4593
import identity from "identity" /* 634 */;
import getNative from "getNative" /* 805 */;
import constant from "constant" /* 4594 */;

if (getNative) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return getNative(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
