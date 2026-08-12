// Module ID: 13672
// Function ID: 13673
// Dependencies: [13640, 13641, 13673]

// Module 13672
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13641")(() => 7 !== Object.defineProperty(require(13673) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
