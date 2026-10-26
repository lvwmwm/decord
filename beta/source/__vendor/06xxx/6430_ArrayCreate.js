// Module ID: 6430
// Function ID: 6431
// Name: ArrayCreate
// Dependencies: [1307, 6427, 1308, 6431, 1327, 6432, 1329]

// Module 6430 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod1329 from "module_1329" /* 1329 */;
import isInteger from "isInteger" /* 6427 */;
import _mod6431 from "module_6431" /* 6431 */;
import _mod6432 from "module_6432" /* 6432 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6431) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1327("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod6432) {
            _mod6432(items, tmp3);
          } else {
            const self = this;
            const self2 = this;
            const tmp5 = new _mod1329("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  const tmp10 = new _mod1308("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp10;
};
