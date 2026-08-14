// Module ID: 13676
// Function ID: 13677
// Dependencies: [13644, 13645, 13677]

// Module 13676
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13645")(() => 7 !== Object.defineProperty(require(13677) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
