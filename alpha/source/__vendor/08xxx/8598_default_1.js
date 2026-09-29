// Module ID: 8598
// Function ID: 8599
// Name: default_1
// Dependencies: [8599]
// Exports: default

// Module 8598 (default_1)
import _mod8599 from "module_8599" /* 8599 */;

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
const mergeDefs = fn(_mod8599);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
