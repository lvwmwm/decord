// Module ID: 5078
// Function ID: 5079
// Name: ArrayCreate
// Dependencies: [1285, 5075, 1286, 5079, 1305, 5080, 1307]

// Module 5078 (ArrayCreate)
import _mod1285 from "module_1285" /* 1285 */;
import _mod1286 from "module_1286" /* 1286 */;
import _mod5075 from "module_5075" /* 5075 */;

let closure_2 = _mod1285("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5075(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(5079)) {
        const tmp12 = new tmp(1305)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(5080)) {
            tmp(5080)(items, tmp3);
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
