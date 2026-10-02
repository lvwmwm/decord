// Module ID: 5150
// Function ID: 5151
// Name: DefinePropertyOrThrow
// Dependencies: [5100, 1294, 5147, 5151, 5152, 5154, 5155, 5156, 5157]

// Module 5150 (DefinePropertyOrThrow)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 5100 */;
import isPropertyKey from "isPropertyKey" /* 5147 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5151 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5154 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5155 */;
import SameValue from "SameValue" /* 5156 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5157 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5152)(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1294("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
