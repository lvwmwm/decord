// Module ID: 6650
// Function ID: 6651
// Name: DefinePropertyOrThrow
// Dependencies: [6600, 1293, 6647, 6651, 6652, 6654, 6655, 6656, 6657]

// Module 6650 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6600 */;
import isPropertyKey from "isPropertyKey" /* 6647 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6651 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6654 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6655 */;
import SameValue from "SameValue" /* 6656 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6657 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6652)(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1293("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
