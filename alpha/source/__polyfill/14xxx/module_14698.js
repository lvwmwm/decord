// Module ID: 14698
// Function ID: 14699
// Dependencies: [14666, 14667, 14699]

// Module 14698
import _mod14667 from "module_14667" /* 14667 */;
import element from "element" /* 14699 */;
import getOwnPropertyDescriptor from "module_14666" /* 14666 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14667(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
