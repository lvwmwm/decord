// Module ID: 13484
// Function ID: 13485
// Dependencies: [13452, 13453, 13485]

// Module 13484
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13453")(() => 7 !== Object.defineProperty(require(13485) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
