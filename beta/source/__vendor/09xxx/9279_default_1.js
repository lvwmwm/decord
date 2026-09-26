// Module ID: 9279
// Function ID: 9280
// Name: default_1
// Dependencies: [9280]
// Exports: default

// Module 9279 (default_1)
import _mod9280 from "module_9280" /* 9280 */;

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
const mergeDefs = fn(_mod9280);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
