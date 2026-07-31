// Module ID: 13416
// Function ID: 13417
// Dependencies: [13384, 13385, 13417]

// Module 13416
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13385")(() => 7 !== Object.defineProperty(require(13417) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
