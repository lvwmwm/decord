// Module ID: 6456
// Function ID: 6457
// Dependencies: [1338, 6457, 6459, 6460, 6484, 6485, 6472, 6508, 6495, 6509, 6510]

// Module 6456
import callBoundIntrinsic from "callBoundIntrinsic" /* 1338 */;
import ToObject from "ToObject" /* 6457 */;
import isString from "isString" /* 6459 */;
import ToUint32 from "ToUint32" /* 6460 */;
import ToString from "ToString" /* 6472 */;
import _mod6484 from "module_6484" /* 6484 */;
import ArraySpeciesCreate from "ArraySpeciesCreate" /* 6485 */;
import HasProperty from "HasProperty" /* 6508 */;

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
  if (_mod6484(arg0)) {
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
        let tmp15 = tmp11(6495)(tmp3, tmp13);
        let items = [tmp15, num2, tmp3];
        let tmp16 = tmp11(6509)(arg0, tmp9, items);
        let tmp17 = tmp11(6510)(tmp10, tmp13, tmp16);
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
