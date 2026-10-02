// Module ID: 5107
// Function ID: 5108
// Dependencies: [1327, 5108, 5110, 5111, 5135, 5136, 5123, 5159, 5146, 5160, 5161]

// Module 5107
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import ToObject from "ToObject" /* 5108 */;
import isString from "isString" /* 5110 */;
import ToUint32 from "ToUint32" /* 5111 */;
import ToString from "ToString" /* 5123 */;
import _mod5135 from "module_5135" /* 5135 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5136 */;
import HasProperty from "HasProperty" /* 5159 */;

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
  if (_mod5135(arg0)) {
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
        let tmp15 = tmp11(5146)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(5160)(arg0, tmp9, items);
        let tmp17 = tmp11(5161)(tmp10, tmp13, tmp16);
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
