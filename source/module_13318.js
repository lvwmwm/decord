// Module ID: 13318
// Function ID: 102050
// Dependencies: [13286, 13287, 13319]

// Module 13318
let tmp = !require("getOwnPropertyDescriptor");
if (tmp) {
  tmp = !require("module_13287")(() => 7 !== Object.defineProperty(require(13319) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
