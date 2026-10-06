// Module ID: 5386
// Function ID: 5387
// Name: DefinePropertyOrThrow
// Dependencies: [5336, 1293, 5383, 5387, 5388, 5390, 5391, 5392, 5393]

// Module 5386 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 5336 */;
import isPropertyKey from "isPropertyKey" /* 5383 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5387 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5390 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5391 */;
import SameValue from "SameValue" /* 5392 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5393 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5388)(arg2);
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
