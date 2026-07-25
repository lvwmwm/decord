// Module ID: 13329
// Function ID: 102177
// Dependencies: [13297, 13298, 13330]

// Module 13329
let tmp = !require("getOwnPropertyDescriptor");
if (tmp) {
  tmp = !require("module_13298")(() => 7 !== Object.defineProperty(require(13330) /* element */("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp;
