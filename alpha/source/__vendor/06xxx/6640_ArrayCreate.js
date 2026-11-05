// Module ID: 6640
// Function ID: 6641
// Name: ArrayCreate
// Dependencies: [1292, 6637, 1293, 6641, 1312, 6642, 1314]

// Module 6640 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod1312 from "module_1312" /* 1312 */;
import _mod1314 from "module_1314" /* 1314 */;
import isInteger from "isInteger" /* 6637 */;
import _mod6641 from "module_6641" /* 6641 */;
import _mod6642 from "module_6642" /* 6642 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6641) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1312("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod6642) {
            _mod6642(items, tmp3);
          } else {
            const self = this;
            const self2 = this;
            const tmp5 = new _mod1314("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  const tmp10 = new _mod1293("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp10;
};
