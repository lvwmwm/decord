// Module ID: 4594
// Function ID: 4595
// Dependencies: [805, 634, 4595]

// Module 4594
import identity from "identity" /* 634 */;
import getNative from "getNative" /* 805 */;
import constant from "constant" /* 4595 */;

if (getNative) {
  let fn = (arg0, arg1) => {
    const obj = { configurable: true, enumerable: false, value: constant(arg1), writable: true };
    return getNative(arg0, "toString", obj);
  };
} else {
  fn = identity;
}

export default fn;
