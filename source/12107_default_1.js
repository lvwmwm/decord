// Module ID: 12107
// Function ID: 94074
// Name: default_1
// Dependencies: [12108]
// Exports: default

// Module 12107 (default_1)
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
