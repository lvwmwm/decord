// Module ID: 13535
// Function ID: 13536
// Dependencies: [13503, 13504, 13536]

// Module 13535
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13504")(() => 7 !== Object.defineProperty(require(13536) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
