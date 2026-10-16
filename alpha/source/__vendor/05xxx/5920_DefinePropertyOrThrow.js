// Module ID: 5920
// Function ID: 5921
// Name: DefinePropertyOrThrow
// Dependencies: [5870, 1308, 5917, 5921, 5922, 5924, 5925, 5926, 5927]

// Module 5920 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import isObject from "isObject" /* 5870 */;
import isPropertyKey from "isPropertyKey" /* 5917 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5921 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5924 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5925 */;
import SameValue from "SameValue" /* 5926 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5927 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5922)(arg2);
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
