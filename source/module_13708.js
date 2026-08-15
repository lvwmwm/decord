// Module ID: 13708
// Function ID: 13709
// Dependencies: [13676, 13677, 13709]

// Module 13708
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13677")(() => 7 !== Object.defineProperty(require(13709) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
