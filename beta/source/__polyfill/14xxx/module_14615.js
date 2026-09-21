// Module ID: 14615
// Function ID: 14616
// Dependencies: [14583, 14584, 14616]

// Module 14615
import _mod14584 from "module_14584" /* 14584 */;
import element from "element" /* 14616 */;
import getOwnPropertyDescriptor from "module_14583" /* 14583 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14584(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
