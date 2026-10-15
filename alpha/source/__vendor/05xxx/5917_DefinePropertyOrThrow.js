// Module ID: 5917
// Function ID: 5918
// Name: DefinePropertyOrThrow
// Dependencies: [5867, 1306, 5914, 5918, 5919, 5921, 5922, 5923, 5924]

// Module 5917 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5867 */;
import isPropertyKey from "isPropertyKey" /* 5914 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5918 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5921 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5922 */;
import SameValue from "SameValue" /* 5923 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5924 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5919)(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1306("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
