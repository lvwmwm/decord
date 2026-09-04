// Module ID: 8899
// Function ID: 8900
// Name: default_1
// Dependencies: [8900]
// Exports: default

// Module 8899 (default_1)
import mergeDefs from "mergeDefs" /* 8900 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
let closure_0 = fn(mergeDefs);

export default function default_1() {
  return closure_0.default();
};
export default exports.default;
