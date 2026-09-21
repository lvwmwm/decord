// Module ID: 9245
// Function ID: 9246
// Name: default_1
// Dependencies: [9246]
// Exports: default

// Module 9245 (default_1)
import _mod9246 from "module_9246" /* 9246 */;

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
const mergeDefs = fn(_mod9246);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
