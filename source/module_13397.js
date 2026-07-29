// Module ID: 13397
// Function ID: 13398
// Dependencies: [13365, 13366, 13398]

// Module 13397
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13366")(() => 7 !== Object.defineProperty(require(13398) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
