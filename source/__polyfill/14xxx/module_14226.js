// Module ID: 14226
// Function ID: 14227
// Dependencies: [14194, 14195, 14227]

// Module 14226
import _mod14195 from "module_14195" /* 14195 */;
import element from "element" /* 14227 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14194 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14195(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
