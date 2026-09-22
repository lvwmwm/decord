// Module ID: 4892
// Function ID: 4893
// Dependencies: [1314, 4893, 4895, 4896, 4920, 4921, 4908, 4944, 4931, 4945, 4946]

// Module 4892
import callBoundIntrinsic from "callBoundIntrinsic" /* 1314 */;
import ToObject from "ToObject" /* 4893 */;
import ToUint32 from "ToUint32" /* 4896 */;
import ToString from "ToString" /* 4908 */;
import _mod4920 from "module_4920" /* 4920 */;
import HasProperty from "HasProperty" /* 4944 */;

const ObjectResult = Object("a");
let tmp2 = "a" !== ObjectResult[0];
if (!tmp2) {
  tmp2 = !(0 in ObjectResult);
}
let closure_2 = tmp2;
let closure_3 = callBoundIntrinsic("String.prototype.split");

export default function map(arg0) {
  const tmp3 = ToObject(this);
  let arr = tmp3;
  if (closure_2) {
    arr = tmp3;
    if (tmp(4895)(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod4920(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4921)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp15 = ToString(num2);
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(4931)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4945)(arg0, tmp11, items);
        let tmp19 = tmp13(4946)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
