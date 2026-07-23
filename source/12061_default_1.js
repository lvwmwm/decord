// Module ID: 12061
// Function ID: 93858
// Name: default_1
// Dependencies: [12062]
// Exports: default

// Module 12061 (default_1)
import cached from "cached";

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}

export default function default_1() {
  return cached.default();
};
export default exports.default;
