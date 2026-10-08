// Module ID: 5654
// Function ID: 5655
// Dependencies: [1338, 5655, 5657, 5658, 5682, 5683, 5670, 5706, 5693, 5707, 5708]

// Module 5654
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import ToObject from "ToObject" /* 5655 */;
import isString from "isString" /* 5657 */;
import ToUint32 from "ToUint32" /* 5658 */;
import ToString from "ToString" /* 5670 */;
import _mod5682 from "module_5682" /* 5682 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5683 */;
import HasProperty from "HasProperty" /* 5706 */;

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
    if (isString(tmp3)) {
      arr = closure_3(tmp3, "");
    }
  }
  const tmp5 = ToUint32(arr.length);
  if (_mod5682(arg0)) {
    let tmp9;
    let num2;
    if (arguments.length > 1) {
      tmp9 = arguments[1];
    }
    const tmp10 = ArraySpeciesCreate(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp11 = require;
      let tmp13 = ToString(num2);
      if (HasProperty(tmp3, tmp13)) {
        let tmp15 = tmp11(5693)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(5707)(arg0, tmp9, items);
        let tmp17 = tmp11(5708)(tmp10, tmp13, tmp16);
      }
    }
    return tmp10;
  } else {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};
