// Module ID: 5343
// Function ID: 5344
// Dependencies: [1326, 5344, 5346, 5347, 5371, 5372, 5359, 5395, 5382, 5396, 5397]

// Module 5343
import callBoundIntrinsic from "callBoundIntrinsic" /* 1326 */;
import ToObject from "ToObject" /* 5344 */;
import isString from "isString" /* 5346 */;
import ToUint32 from "ToUint32" /* 5347 */;
import ToString from "ToString" /* 5359 */;
import _mod5371 from "module_5371" /* 5371 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5372 */;
import HasProperty from "HasProperty" /* 5395 */;

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
  if (_mod5371(arg0)) {
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
        let tmp15 = tmp11(5382)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(5396)(arg0, tmp9, items);
        let tmp17 = tmp11(5397)(tmp10, tmp13, tmp16);
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
