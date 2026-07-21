// Module ID: 13226
// Function ID: 100341
// Dependencies: []

// Module 13226
const keys = Object.keys(require(dependencyMap[0]));
const item = keys.forEach((arg0) => {
  const require = arg0;
  let tmp = "default" !== arg0;
  if (tmp) {
    tmp = "__esModule" !== arg0;
  }
  if (tmp) {
    let tmp3 = arg0 in exports;
    if (tmp3) {
      tmp3 = exports[arg0] === require(dependencyMap[0])[arg0];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
              return arg0(closure_2[0])[closure_0];
            }
      };
      Object.defineProperty(exports, arg0, obj);
    }
  }
});
