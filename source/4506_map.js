// Module ID: 4506
// Function ID: 4507
// Name: map
// Dependencies: [574, 4507, 4509, 4510, 4534, 4535, 4522, 4558, 4545, 4559, 4560]

// Module 4506 (map)
const ObjectResult = Object("a");
let tmp2 = "a" !== ObjectResult[0];
if (!tmp2) {
  tmp2 = !(0 in ObjectResult);
}
let closure_3 = require("callBoundIntrinsic")("String.prototype.split");

export default function map(arg0) {
  const tmp3 = require(4507) /* ToObject */(this);
  let arr = tmp3;
  if (closure_2) {
    arr = tmp3;
    if (tmp(4509)(tmp3)) {
      arr = callback(tmp3, "");
    }
  }
  const tmp5 = require(4510) /* ToUint32 */(arr.length);
  if (require(4534) /* apply */(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4535)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let tmp15 = require(4522) /* ToString */(num2);
      let tmp16 = num2;
      if (require(4558) /* HasProperty */(tmp3, tmp15)) {
        let tmp17 = tmp13(4545)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4559)(arg0, tmp11, items);
        let tmp19 = tmp13(4560)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
