// Module ID: 13265
// Function ID: 101723
// Dependencies: [13233, 13234, 13266]

// Module 13265
let tmp = !require("getOwnPropertyDescriptor");
if (tmp) {
  tmp = !require("module_13234")(() => 7 !== Object.defineProperty(require(13266) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
