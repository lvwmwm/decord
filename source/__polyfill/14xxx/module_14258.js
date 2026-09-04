// Module ID: 14258
// Function ID: 14259
// Dependencies: [14226, 14227, 14259]

// Module 14258
import _mod14227 from "module_14227" /* 14227 */;
import element from "element" /* 14259 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14226 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14227(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
