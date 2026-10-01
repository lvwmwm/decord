// Module ID: 5149
// Function ID: 5150
// Name: DefinePropertyOrThrow
// Dependencies: [5099, 1282, 5146, 5150, 5151, 5153, 5154, 5155, 5156]

// Module 5149 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import isObject from "isObject" /* 5099 */;
import isPropertyKey from "isPropertyKey" /* 5146 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5150 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5153 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5154 */;
import SameValue from "SameValue" /* 5155 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5156 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5151)(arg2);
      }
      if (isPropertyDescriptor(tmp9)) {
        const tmpResult = DefineOwnProperty;
        const tmpResult3 = IsDataDescriptor;
        const tmpResult4 = SameValue;
        return tmpResult(tmpResult3, tmpResult4, FromPropertyDescriptor, arg0, arg1, tmp10);
      } else {
        const self5 = this;
        const self6 = this;
        const tmp11 = new _mod1282("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp11;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp3;
  }
};
