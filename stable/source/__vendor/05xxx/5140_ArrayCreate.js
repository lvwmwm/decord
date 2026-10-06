// Module ID: 5140
// Function ID: 5141
// Name: ArrayCreate
// Dependencies: [1293, 5137, 1294, 5141, 1313, 5142, 1315]

// Module 5140 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1293 */;
import _mod1294 from "module_1294" /* 1294 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod1315 from "module_1315" /* 1315 */;
import isInteger from "isInteger" /* 5137 */;
import _mod5141 from "module_5141" /* 5141 */;
import _mod5142 from "module_5142" /* 5142 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod5141) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1313("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod5142) {
            _mod5142(items, tmp3);
          } else {
            const self = this;
            const self2 = this;
            const tmp5 = new _mod1315("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  const tmp10 = new _mod1294("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp10;
};
