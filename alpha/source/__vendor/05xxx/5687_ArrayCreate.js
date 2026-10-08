// Module ID: 5687
// Function ID: 5688
// Name: ArrayCreate
// Dependencies: [1304, 5684, 1305, 5688, 1324, 5689, 1326]

// Module 5687 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod1324 from "module_1324" /* 1324 */;
import _mod1326 from "module_1326" /* 1326 */;
import isInteger from "isInteger" /* 5684 */;
import _mod5688 from "module_5688" /* 5688 */;
import _mod5689 from "module_5689" /* 5689 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5688) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1324("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5689) {
            _mod5689(items, tmp3);
          } else {
            const self = this;
            const self2 = this;
            const tmp5 = new _mod1326("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  const tmp10 = new _mod1305("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp10;
};
