// Module ID: 4810
// Function ID: 4811
// Name: ArrayCreate
// Dependencies: [537, 4807, 538, 4811, 557, 4812, 559]

// Module 4810 (ArrayCreate)
import getEvalledConstructor from "getEvalledConstructor" /* 537 */;
import _mod538 from "module_538" /* 538 */;
import isInteger from "isInteger" /* 4807 */;

let closure_2 = getEvalledConstructor("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (isInteger(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4811)) {
        const tmp12 = new tmp(557)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4812)) {
            tmp(4812)(items, tmp3);
          } else {
            const tmp7 = new tmp(559)("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new _mod538("Assertion failed: `length` must be an integer Number >= 0");
};
