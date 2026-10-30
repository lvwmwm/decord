// Module ID: 6463
// Function ID: 6464
// Dependencies: [1327, 6464, 6466, 6467, 6491, 6492, 6479, 6515, 6502, 6516, 6517]

// Module 6463
import callBoundIntrinsic from "callBoundIntrinsic" /* 1327 */;
import ToObject from "ToObject" /* 6464 */;
import isString from "isString" /* 6466 */;
import ToUint32 from "ToUint32" /* 6467 */;
import ToString from "ToString" /* 6479 */;
import _mod6491 from "module_6491" /* 6491 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 6492 */;
import HasProperty from "HasProperty" /* 6515 */;

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
  if (_mod6491(arg0)) {
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
        let tmp15 = tmp11(6502)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(6516)(arg0, tmp9, items);
        let tmp17 = tmp11(6517)(tmp10, tmp13, tmp16);
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
