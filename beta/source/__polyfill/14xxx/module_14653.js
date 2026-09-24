// Module ID: 14653
// Function ID: 14654
// Dependencies: [14621, 14622, 14654]

// Module 14653
import _mod14622 from "module_14622" /* 14622 */;
import element from "element" /* 14654 */;
import getOwnPropertyDescriptor from "module_14621" /* 14621 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14622(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
