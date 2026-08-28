// Module ID: 13920
// Function ID: 13921
// Dependencies: [13888, 13889, 13921]

// Module 13920
import _mod13889 from "module_13889" /* 13889 */;
import element from "element" /* 13921 */;
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 13888 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod13889(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
