// Module ID: 13673
// Function ID: 13674
// Dependencies: [13641, 13642, 13674]

// Module 13673
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13642")(() => 7 !== Object.defineProperty(require(13674) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
