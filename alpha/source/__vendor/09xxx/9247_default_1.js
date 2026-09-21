// Module ID: 9247
// Function ID: 9248
// Name: default_1
// Dependencies: [9248]
// Exports: default

// Module 9247 (default_1)
import _mod9248 from "module_9248" /* 9248 */;

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
const mergeDefs = fn(_mod9248);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
