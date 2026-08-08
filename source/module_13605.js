// Module ID: 13605
// Function ID: 13606
// Dependencies: [13573, 13574, 13606]

// Module 13605
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13574")(() => 7 !== Object.defineProperty(require(13606) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
