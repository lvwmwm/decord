// Module ID: 4451
// Function ID: 39014
// Name: ArrayCreate
// Dependencies: [517, 4448, 518, 4452, 537, 4453, 539]

// Module 4451 (ArrayCreate)
let closure_2 = require("getEvalledConstructor")("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (require(4448) /* isInteger */(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > require(4452)) {
        let tmp15 = require(537);
        const prototype2 = tmp15.prototype;
        tmp15 = new tmp15("length is greater than (2**32 - 1)");
        throw tmp15;
      } else {
        const tmp = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp !== closure_2) {
          if (require(4453) /* setProto */) {
            tmp5(4453)(items, tmp);
          } else {
            let tmp5Result = tmp5(539);
            const prototype = tmp5Result.prototype;
            tmp5Result = new tmp5Result("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
            throw tmp5Result;
          }
        }
        if (0 !== arg0) {
          items.length = arg0;
        }
        return items;
      }
    }
  }
  let tmp20 = require(518);
  tmp20 = new tmp20("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp20;
};
