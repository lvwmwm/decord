// Module ID: 6441
// Function ID: 6442
// Name: DefinePropertyOrThrow
// Dependencies: [6391, 1305, 6438, 6442, 6443, 6445, 6446, 6447, 6448]

// Module 6441 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 6391 */;
import isPropertyKey from "isPropertyKey" /* 6438 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6442 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6445 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6446 */;
import SameValue from "SameValue" /* 6447 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6448 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6443)(arg2);
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
