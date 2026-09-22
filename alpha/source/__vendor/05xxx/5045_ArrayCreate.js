// Module ID: 5045
// Function ID: 5046
// Name: ArrayCreate
// Dependencies: [1281, 5042, 1282, 5046, 1301, 5047, 1303]

// Module 5045 (ArrayCreate)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod5042 from "module_5042" /* 5042 */;

let closure_2 = _mod1281("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5042(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(5046)) {
        const tmp12 = new tmp(1301)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(5047)) {
            tmp(5047)(items, tmp3);
          } else {
            const tmp7 = new tmp(1303)("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod1282("Assertion failed: `length` must be an integer Number >= 0");
};
