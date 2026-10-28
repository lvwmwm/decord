// Module ID: 6472
// Function ID: 6473
// Name: DefinePropertyOrThrow
// Dependencies: [6422, 1308, 6469, 6473, 6474, 6476, 6477, 6478, 6479]

// Module 6472 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 6422 */;
import isPropertyKey from "isPropertyKey" /* 6469 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6473 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6476 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6477 */;
import SameValue from "SameValue" /* 6478 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6479 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6474)(arg2);
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
