// Module ID: 6432
// Function ID: 6433
// Dependencies: [1338, 6433, 6435, 6436, 6460, 6461, 6448, 6484, 6471, 6485, 6486]

// Module 6432
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import ToObject from "ToObject" /* 6433 */;
import isString from "isString" /* 6435 */;
import ToUint32 from "ToUint32" /* 6436 */;
import ToString from "ToString" /* 6448 */;
import _mod6460 from "module_6460" /* 6460 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 6461 */;
import HasProperty from "HasProperty" /* 6484 */;

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
  if (_mod6460(arg0)) {
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
        let tmp15 = tmp11(6471)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(6485)(arg0, tmp9, items);
        let tmp17 = tmp11(6486)(tmp10, tmp13, tmp16);
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
