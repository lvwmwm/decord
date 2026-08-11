// Module ID: 13615
// Function ID: 13616
// Dependencies: [13583, 13584, 13616]

// Module 13615
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor";

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !require("module_13584")(() => 7 !== Object.defineProperty(require(13616) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
