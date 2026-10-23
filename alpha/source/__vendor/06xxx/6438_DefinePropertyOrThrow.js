// Module ID: 6438
// Function ID: 6439
// Name: DefinePropertyOrThrow
// Dependencies: [6388, 1308, 6435, 6439, 6440, 6442, 6443, 6444, 6445]

// Module 6438 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 6388 */;
import isPropertyKey from "isPropertyKey" /* 6435 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6439 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6442 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6443 */;
import SameValue from "SameValue" /* 6444 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6445 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6440)(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1308("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
