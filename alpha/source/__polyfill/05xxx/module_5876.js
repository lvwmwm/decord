// Module ID: 5876
// Function ID: 5877
// Dependencies: [1341, 5877, 5879, 5880, 5904, 5905, 5892, 5928, 5915, 5929, 5930]

// Module 5876
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import ToObject from "ToObject" /* 5877 */;
import isString from "isString" /* 5879 */;
import ToUint32 from "ToUint32" /* 5880 */;
import ToString from "ToString" /* 5892 */;
import _mod5904 from "module_5904" /* 5904 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5905 */;
import HasProperty from "HasProperty" /* 5928 */;

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
  if (_mod5904(arg0)) {
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
        let tmp15 = tmp11(5915)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(5929)(arg0, tmp9, items);
        let tmp17 = tmp11(5930)(tmp10, tmp13, tmp16);
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
