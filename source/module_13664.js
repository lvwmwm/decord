// Module ID: 13664
// Function ID: 13665
// Dependencies: [13632, 13633, 13665]

// Module 13664
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13633")(() => 7 !== Object.defineProperty(require(13665) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
