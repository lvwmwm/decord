// Module ID: 13521
// Function ID: 13522
// Dependencies: [13489, 13490, 13522]

// Module 13521
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13490")(() => 7 !== Object.defineProperty(require(13522) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
