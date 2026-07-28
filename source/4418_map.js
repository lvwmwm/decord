// Module ID: 4418
// Function ID: 38944
// Name: map
// Dependencies: [551, 4419, 4421, 4422, 4446, 4447, 4434, 4470, 4457, 4471, 4472]

// Module 4418 (map)
const ObjectResult = Object("a");
let closure_2 = "a" !== ObjectResult[0] || !(0 in ObjectResult);
let closure_3 = require("callBoundIntrinsic")("String.prototype.split");

export default function map(arg0) {
  const tmp = require(4419) /* ToObject */(this);
  let arr = tmp;
  if (closure_2) {
    arr = tmp;
    if (require(4421) /* isString */(tmp)) {
      arr = callback(tmp, "");
    }
  }
  const tmp5 = require(4422) /* ToUint32 */(arr.length);
  if (require(4446) /* apply */(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp14 = require(4447) /* ArraySpeciesCreate */(tmp, tmp5);
    for (let num3 = 0; num3 < tmp5; num3 = num3 + 1) {
      let tmp15 = require;
      let tmp16 = dependencyMap;
      let tmp17 = require(4434) /* ToString */(num3);
      let tmp18 = num3;
      if (require(4470) /* HasProperty */(tmp, tmp17)) {
        let tmp19 = require;
        let tmp20 = dependencyMap;
        let tmp21 = require(4457) /* Get */(tmp, tmp17);
        let items = [tmp21, num3, tmp];
        let tmp22 = require(4471) /* Call */(arg0, tmp11, items);
        let tmp23 = require(4472) /* CreateDataPropertyOrThrow */(tmp14, tmp17, tmp22);
      }
    }
    return tmp14;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
