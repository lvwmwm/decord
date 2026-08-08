// Module ID: 12395
// Function ID: 12396
// Name: default_1
// Dependencies: [12396]
// Exports: default

// Module 12395 (default_1)
import mergeDefs from "mergeDefs";

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

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
