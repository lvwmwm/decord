// Module ID: 5336
// Function ID: 5337
// Dependencies: [1326, 5337, 5339, 5340, 5364, 5365, 5352, 5388, 5375, 5389, 5390]

// Module 5336
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import ToObject from "ToObject" /* 5337 */;
import isString from "isString" /* 5339 */;
import ToUint32 from "ToUint32" /* 5340 */;
import ToString from "ToString" /* 5352 */;
import _mod5364 from "module_5364" /* 5364 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5365 */;
import HasProperty from "HasProperty" /* 5388 */;

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
  if (_mod5364(arg0)) {
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
        let tmp15 = tmp11(5375)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(5389)(arg0, tmp9, items);
        let tmp17 = tmp11(5390)(tmp10, tmp13, tmp16);
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
