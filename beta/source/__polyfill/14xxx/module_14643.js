// Module ID: 14643
// Function ID: 14644
// Dependencies: [14611, 14612, 14644]

// Module 14643
import _mod14612 from "module_14612" /* 14612 */;
import element from "element" /* 14644 */;
import getOwnPropertyDescriptor from "module_14611" /* 14611 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14612(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
