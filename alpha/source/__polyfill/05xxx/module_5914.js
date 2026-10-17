// Module ID: 5914
// Function ID: 5915
// Dependencies: [1341, 5915, 5917, 5918, 5942, 5943, 5930, 5966, 5953, 5967, 5968]

// Module 5914
import callBoundIntrinsic from "callBoundIntrinsic" /* 1341 */;
import ToObject from "ToObject" /* 5915 */;
import isString from "isString" /* 5917 */;
import ToUint32 from "ToUint32" /* 5918 */;
import ToString from "ToString" /* 5930 */;
import _mod5942 from "module_5942" /* 5942 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 5943 */;
import HasProperty from "HasProperty" /* 5966 */;

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
  if (_mod5942(arg0)) {
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
        let tmp15 = tmp11(5953)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(5967)(arg0, tmp9, items);
        let tmp17 = tmp11(5968)(tmp10, tmp13, tmp16);
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
