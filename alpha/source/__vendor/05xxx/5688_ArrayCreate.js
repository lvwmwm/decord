// Module ID: 5688
// Function ID: 5689
// Name: ArrayCreate
// Dependencies: [1305, 5685, 1306, 5689, 1325, 5690, 1327]

// Module 5688 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod1327 from "module_1327" /* 1327 */;
import isInteger from "isInteger" /* 5685 */;
import _mod5689 from "module_5689" /* 5689 */;
import _mod5690 from "module_5690" /* 5690 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5689) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1325("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5690) {
            _mod5690(items, tmp3);
          } else {
            const self = this;
            const self2 = this;
            const tmp5 = new _mod1327("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
            throw tmp5;
          }
        }
        if (0 !== arg0) {
          items.length = arg0;
        }
        return items;
      }
    }
  }
  const tmp10 = new _mod1306("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp10;
};
