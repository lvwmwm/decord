// Module ID: 5044
// Function ID: 5045
// Name: ArrayCreate
// Dependencies: [1281, 5041, 1282, 5045, 1301, 5046, 1303]

// Module 5044 (ArrayCreate)
import _mod1281 from "module_1281" /* 1281 */;
import _mod1282 from "module_1282" /* 1282 */;
import _mod5041 from "module_5041" /* 5041 */;

let closure_2 = _mod1281("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (_mod5041(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(5045)) {
        const tmp12 = new tmp(1301)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(5046)) {
            tmp(5046)(items, tmp3);
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
