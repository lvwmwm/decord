// Module ID: 5013
// Function ID: 5014
// Dependencies: [1319, 5014, 5016, 5017, 5041, 5042, 5029, 5065, 5052, 5066, 5067]

// Module 5013
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import ToObject from "ToObject" /* 5014 */;
import ToUint32 from "ToUint32" /* 5017 */;
import ToString from "ToString" /* 5029 */;
import _mod5041 from "module_5041" /* 5041 */;
import HasProperty from "HasProperty" /* 5065 */;

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
    if (tmp(5016)(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5041(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(5042)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp15 = ToString(num2);
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(5052)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(5066)(arg0, tmp11, items);
        let tmp19 = tmp13(5067)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
