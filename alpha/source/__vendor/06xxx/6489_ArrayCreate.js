// Module ID: 6489
// Function ID: 6490
// Name: ArrayCreate
// Dependencies: [1304, 6486, 1305, 6490, 1324, 6491, 1326]

// Module 6489 (ArrayCreate)
import GetIntrinsic from "GetIntrinsic" /* 1304 */;
import _mod1305 from "module_1305" /* 1305 */;
import _mod1324 from "module_1324" /* 1324 */;
import _mod1326 from "module_1326" /* 1326 */;
import isInteger from "isInteger" /* 6486 */;
import _mod6490 from "module_6490" /* 6490 */;
import _mod6491 from "module_6491" /* 6491 */;

let closure_2 = GetIntrinsic("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > _mod6490) {
        const self3 = this;
        const self4 = this;
        const tmp8 = new _mod1324("length is greater than (2**32 - 1)");
        throw tmp8;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (_mod6491) {
            _mod6491(items, tmp3);
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
