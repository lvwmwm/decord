// Module ID: 14700
// Function ID: 14701
// Name: emptyPromise
// Dependencies: [14701]

// Module 14700 (emptyPromise)
const require = globalThis.__r;

const item = Object.keys(require("module_14701")).forEach((item) => {
  _require = item;
  let tmp = "default" !== item;
  if (tmp) {
    tmp = "__esModule" !== item;
  }
  if (tmp) {
    let tmp3 = item in exports;
    if (tmp3) {
      tmp3 = tmp2[item] === require("module_14701")[item];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
              return require("module_14701")[closure_0];
            }
      };
      Object.defineProperty(tmp2, item, obj);
    }
  }
});
