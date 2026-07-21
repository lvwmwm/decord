// Module ID: 4379
// Function ID: 38769
// Name: map
// Dependencies: []

// Module 4379 (map)
const ObjectResult = Object("a");
let closure_2 = "a" !== ObjectResult[0] || !(0 in ObjectResult);
let closure_3 = require(dependencyMap[0])("String.prototype.split");

export default function map(arg0) {
  const tmp = require(dependencyMap[1])(this);
  let arr = tmp;
  if (closure_2) {
    arr = tmp;
    if (require(dependencyMap[2])(tmp)) {
      arr = callback(tmp, "");
    }
  }
  const tmp5 = require(dependencyMap[3])(arr.length);
  if (require(dependencyMap[4])(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp14 = require(dependencyMap[5])(tmp, tmp5);
    let num3 = 0;
    if (0 < tmp5) {
      do {
        let tmp15 = closure_0;
        let tmp16 = closure_1;
        let tmp17 = closure_0(closure_1[6])(num3);
        let tmp18 = num3;
        if (closure_0(closure_1[7])(tmp, tmp17)) {
          let tmp19 = closure_0;
          let tmp20 = closure_1;
          let tmp21 = closure_0(closure_1[8])(tmp, tmp17);
          let items = [tmp21, num3, tmp];
          let tmp22 = closure_0(closure_1[9])(arg0, tmp11, items);
          let tmp23 = closure_0(closure_1[10])(tmp14, tmp17, tmp22);
        }
        num3 = num3 + 1;
      } while (num3 < tmp5);
    }
    return tmp14;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
