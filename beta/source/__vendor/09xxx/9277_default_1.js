// Module ID: 9277
// Function ID: 9278
// Name: default_1
// Dependencies: [9278]
// Exports: default

// Module 9277 (default_1)
import _mod9278 from "module_9278" /* 9278 */;

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
const mergeDefs = fn(_mod9278);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
