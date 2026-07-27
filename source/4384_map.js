// Module ID: 4384
// Function ID: 38830
// Name: map
// Dependencies: [551, 4385, 4387, 4388, 4412, 4413, 4400, 4436, 4423, 4437, 4438]

// Module 4384 (map)
const ObjectResult = Object("a");
let closure_2 = "a" !== ObjectResult[0] || !(0 in ObjectResult);
let closure_3 = require("callBoundIntrinsic")("String.prototype.split");

export default function map(arg0) {
  const tmp = require(4385) /* ToObject */(this);
  let arr = tmp;
  if (closure_2) {
    arr = tmp;
    if (require(4387) /* isString */(tmp)) {
      arr = callback(tmp, "");
    }
  }
  const tmp5 = require(4388) /* ToUint32 */(arr.length);
  if (require(4412) /* apply */(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp14 = require(4413) /* ArraySpeciesCreate */(tmp, tmp5);
    for (let num3 = 0; num3 < tmp5; num3 = num3 + 1) {
      let tmp15 = require;
      let tmp16 = dependencyMap;
      let tmp17 = require(4400) /* ToString */(num3);
      let tmp18 = num3;
      if (require(4436) /* HasProperty */(tmp, tmp17)) {
        let tmp19 = require;
        let tmp20 = dependencyMap;
        let tmp21 = require(4423) /* Get */(tmp, tmp17);
        let items = [tmp21, num3, tmp];
        let tmp22 = require(4437) /* Call */(arg0, tmp11, items);
        let tmp23 = require(4438) /* CreateDataPropertyOrThrow */(tmp14, tmp17, tmp22);
      }
    }
    return tmp14;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
