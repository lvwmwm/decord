// Module ID: 4539
// Function ID: 4540
// Name: ArrayCreate
// Dependencies: [540, 4536, 541, 4540, 560, 4541, 562]

// Module 4539 (ArrayCreate)
let closure_2 = require("getEvalledConstructor")("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (require(4536) /* isInteger */(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > tmp(4540)) {
        const tmp12 = new tmp(560)("length is greater than (2**32 - 1)");
        throw tmp12;
      } else {
        const tmp3 = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp3 !== closure_2) {
          if (tmp(4541)) {
            tmp(4541)(items, tmp3);
          } else {
            const tmp7 = new tmp(562)("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
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
  throw new require(541)("Assertion failed: `length` must be an integer Number >= 0");
};
