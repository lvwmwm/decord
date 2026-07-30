// Module ID: 13392
// Function ID: 13393
// Dependencies: [13360, 13361, 13393]

// Module 13392
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13361")(() => 7 !== Object.defineProperty(require(13393) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
