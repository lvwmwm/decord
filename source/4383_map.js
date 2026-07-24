// Module ID: 4383
// Function ID: 38818
// Name: map
// Dependencies: [551, 4384, 4386, 4387, 4411, 4412, 4399, 4435, 4422, 4436, 4437]

// Module 4383 (map)
const ObjectResult = Object("a");
let closure_2 = "a" !== ObjectResult[0] || !(0 in ObjectResult);
let closure_3 = require("callBoundIntrinsic")("String.prototype.split");

export default function map(arg0) {
  const tmp = require(4384) /* ToObject */(this);
  let arr = tmp;
  if (closure_2) {
    arr = tmp;
    if (require(4386) /* isString */(tmp)) {
      arr = callback(tmp, "");
    }
  }
  const tmp5 = require(4387) /* ToUint32 */(arr.length);
  if (require(4411) /* apply */(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp14 = require(4412) /* ArraySpeciesCreate */(tmp, tmp5);
    for (let num3 = 0; num3 < tmp5; num3 = num3 + 1) {
      let tmp15 = require;
      let tmp16 = dependencyMap;
      let tmp17 = require(4399) /* ToString */(num3);
      let tmp18 = num3;
      if (require(4435) /* HasProperty */(tmp, tmp17)) {
        let tmp19 = require;
        let tmp20 = dependencyMap;
        let tmp21 = require(4422) /* Get */(tmp, tmp17);
        let items = [tmp21, num3, tmp];
        let tmp22 = require(4436) /* Call */(arg0, tmp11, items);
        let tmp23 = require(4437) /* CreateDataPropertyOrThrow */(tmp14, tmp17, tmp22);
      }
    }
    return tmp14;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
