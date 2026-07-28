// Module ID: 13374
// Function ID: 102355
// Dependencies: [13342, 13343, 13375]

// Module 13374
let tmp = !require("getOwnPropertyDescriptor");
if (tmp) {
  tmp = !require("module_13343")(() => 7 !== Object.defineProperty(require(13375) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
