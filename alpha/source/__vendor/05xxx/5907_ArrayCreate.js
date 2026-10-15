// Module ID: 5907
// Function ID: 5908
// Name: ArrayCreate
// Dependencies: [1305, 5904, 1306, 5908, 1325, 5909, 1327]

// Module 5907 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1325 from "module_1325" /* 1325 */;
import _mod1327 from "module_1327" /* 1327 */;
import isInteger from "isInteger" /* 5904 */;
import _mod5908 from "module_5908" /* 5908 */;
import _mod5909 from "module_5909" /* 5909 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5908) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1325("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5909) {
            _mod5909(items, tmp3);
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
