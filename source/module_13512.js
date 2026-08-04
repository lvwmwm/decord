// Module ID: 13512
// Function ID: 13513
// Dependencies: [13480, 13481, 13513]

// Module 13512
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13481")(() => 7 !== Object.defineProperty(require(13513) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
