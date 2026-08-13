// Module ID: 4596
// Function ID: 4597
// Name: map
// Dependencies: [574, 4597, 4599, 4600, 4624, 4625, 4612, 4648, 4635, 4649, 4650]

// Module 4596 (map)
const ObjectResult = Object("a");
let tmp2 = "a" !== ObjectResult[0];
if (!tmp2) {
  tmp2 = !(0 in ObjectResult);
}
let closure_3 = require("callBoundIntrinsic")("String.prototype.split");

export default function map(arg0) {
  const tmp3 = require(4597) /* ToObject */(this);
  let arr = tmp3;
  if (closure_2) {
    arr = tmp3;
    if (tmp(4599)(tmp3)) {
      arr = callback(tmp3, "");
    }
  }
  const tmp5 = require(4600) /* ToUint32 */(arr.length);
  if (require(4624) /* apply */(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4625)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let tmp15 = require(4612) /* ToString */(num2);
      let tmp16 = num2;
      if (require(4648) /* HasProperty */(tmp3, tmp15)) {
        let tmp17 = tmp13(4635)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4649)(arg0, tmp11, items);
        let tmp19 = tmp13(4650)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
