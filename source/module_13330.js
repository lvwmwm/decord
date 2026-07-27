// Module ID: 13330
// Function ID: 102182
// Dependencies: [13298, 13299, 13331]

// Module 13330
let tmp = !require("getOwnPropertyDescriptor");
if (tmp) {
  tmp = !require("module_13299")(() => 7 !== Object.defineProperty(require(13331) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
