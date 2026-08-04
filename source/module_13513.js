// Module ID: 13513
// Function ID: 13514
// Dependencies: [13481, 13482, 13514]

// Module 13513
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13482")(() => 7 !== Object.defineProperty(require(13514) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
