// Module ID: 12064
// Function ID: 93904
// Name: default_1
// Dependencies: [12065]
// Exports: default

// Module 12064 (default_1)
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
