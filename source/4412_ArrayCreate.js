// Module ID: 4412
// Function ID: 38855
// Name: ArrayCreate
// Dependencies: []

// Module 4412 (ArrayCreate)
let closure_2 = require(dependencyMap[0])("%Array.prototype%");

export default function ArrayCreate(arg0) {
  if (require(dependencyMap[1])(arg0)) {
    if (arg0 >= 0) {
      if (arg0 > require(dependencyMap[3])) {
        let tmp15 = require(dependencyMap[4]);
        const prototype2 = tmp15.prototype;
        tmp15 = new tmp15("length is greater than (2**32 - 1)");
        throw tmp15;
      } else {
        const tmp = arguments.length > 1 ? arguments[1] : closure_2;
        const items = [];
        if (tmp !== closure_2) {
          if (require(dependencyMap[5])) {
            tmp5(tmp6[5])(items, tmp);
          } else {
            let tmp5Result = tmp5(tmp6[6]);
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
  let tmp20 = require(dependencyMap[2]);
  tmp20 = new tmp20("Assertion failed: `length` must be an integer Number >= 0");
  throw tmp20;
};
