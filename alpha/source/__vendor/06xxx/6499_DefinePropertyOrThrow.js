// Module ID: 6499
// Function ID: 6500
// Name: DefinePropertyOrThrow
// Dependencies: [6449, 1305, 6496, 6500, 6501, 6503, 6504, 6505, 6506]

// Module 6499 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6449 */;
import isPropertyKey from "isPropertyKey" /* 6496 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6500 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6503 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6504 */;
import SameValue from "SameValue" /* 6505 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6506 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6501)(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1305("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
