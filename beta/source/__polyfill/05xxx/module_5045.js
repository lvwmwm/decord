// Module ID: 5045
// Function ID: 5046
// Dependencies: [1319, 5046, 5048, 5049, 5073, 5074, 5061, 5097, 5084, 5098, 5099]

// Module 5045
import callBoundIntrinsic from "callBoundIntrinsic" /* 1319 */;
import ToObject from "ToObject" /* 5046 */;
import ToUint32 from "ToUint32" /* 5049 */;
import ToString from "ToString" /* 5061 */;
import _mod5073 from "module_5073" /* 5073 */;
import HasProperty from "HasProperty" /* 5097 */;

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
    if (tmp(5048)(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5073(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(5074)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp15 = ToString(num2);
      if (HasProperty(tmp3, tmp15)) {
        let tmp17 = tmp13(5084)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(5098)(arg0, tmp11, items);
        let tmp19 = tmp13(5099)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
