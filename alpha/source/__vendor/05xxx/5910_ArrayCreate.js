// Module ID: 5910
// Function ID: 5911
// Name: ArrayCreate
// Dependencies: [1307, 5907, 1308, 5911, 1327, 5912, 1329]

// Module 5910 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1307 */;
import _mod1308 from "module_1308" /* 1308 */;
import _mod1327 from "module_1327" /* 1327 */;
import _mod1329 from "module_1329" /* 1329 */;
import isInteger from "isInteger" /* 5907 */;
import _mod5911 from "module_5911" /* 5911 */;
import _mod5912 from "module_5912" /* 5912 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5911) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1327("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5912) {
            _mod5912(items, tmp3);
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
