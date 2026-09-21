// Module ID: 5046
// Function ID: 5047
// Name: ArrayCreate
// Dependencies: [1285, 5043, 1286, 5047, 1305, 5048, 1307]

// Module 5046 (ArrayCreate)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import _mod5043 from "module_5043" /* 5043 */;

let closure_2 = _mod1285("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5043(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(5047)) {
        const tmp12 = new tmp(1305)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(5048)) {
            tmp(5048)(items, tmp3);
          } else {
            const tmp7 = new tmp(1307)("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
            throw tmp7;
          }
        }
        if (0 !== arg0) {
          items.length = arg0;
        }
        return items;
      }
    }
  }
  throw new _mod1286("Assertion failed: `length` must be an integer Number >= 0");
};
