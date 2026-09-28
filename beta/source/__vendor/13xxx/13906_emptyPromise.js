// Module ID: 13906
// Function ID: 13907
// Name: emptyPromise
// Dependencies: [13907]

// Module 13906 (emptyPromise)
const require = globalThis.__r;

const item = Object.keys(require("module_13907")).forEach((item) => {
  _require = item;
  let tmp = "default" !== item;
  if (tmp) {
    tmp = "__esModule" !== item;
  }
  if (tmp) {
    let tmp3 = item in exports;
    if (tmp3) {
      tmp3 = tmp2[item] === require("module_13907")[item];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
              return require("module_13907")[closure_0];
            }
      };
      Object.defineProperty(tmp2, item, obj);
    }
  }
});
