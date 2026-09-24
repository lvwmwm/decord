// Module ID: 9327
// Function ID: 9328
// Name: default_1
// Dependencies: [9328]
// Exports: default

// Module 9327 (default_1)
import _mod9328 from "module_9328" /* 9328 */;

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
const mergeDefs = fn(_mod9328);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
