// Module ID: 5139
// Function ID: 5140
// Name: ArrayCreate
// Dependencies: [1281, 5136, 1282, 5140, 1301, 5141, 1303]

// Module 5139 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod1301 from "module_1301" /* 1301 */;
import _mod1303 from "module_1303" /* 1303 */;
import isInteger from "isInteger" /* 5136 */;
import _mod5140 from "module_5140" /* 5140 */;
import _mod5141 from "module_5141" /* 5141 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5140) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1301("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5141) {
            _mod5141(items, tmp3);
          } else {
            const self = this;
            const self2 = this;
            const tmp5 = new _mod1303("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  const tmp10 = new _mod1282("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp10;
};
