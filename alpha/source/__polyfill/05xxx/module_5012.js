// Module ID: 5012
// Function ID: 5013
// Dependencies: [1315, 5013, 5015, 5016, 5040, 5041, 5028, 5064, 5051, 5065, 5066]

// Module 5012
import callBoundIntrinsic from "callBoundIntrinsic" /* 1315 */;
import ToObject from "ToObject" /* 5013 */;
import ToUint32 from "ToUint32" /* 5016 */;
import ToString from "ToString" /* 5028 */;
import _mod5040 from "module_5040" /* 5040 */;
import HasProperty from "HasProperty" /* 5064 */;

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
    if (tmp(5015)(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5040(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(5041)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp15 = ToString(num2);
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(5051)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(5065)(arg0, tmp11, items);
        let tmp19 = tmp13(5066)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
