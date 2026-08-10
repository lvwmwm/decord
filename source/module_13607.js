// Module ID: 13607
// Function ID: 13608
// Dependencies: [13575, 13576, 13608]

// Module 13607
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13576")(() => 7 !== Object.defineProperty(require(13608) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
