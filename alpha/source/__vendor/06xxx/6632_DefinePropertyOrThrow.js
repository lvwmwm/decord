// Module ID: 6632
// Function ID: 6633
// Name: DefinePropertyOrThrow
// Dependencies: [6582, 1293, 6629, 6633, 6634, 6636, 6637, 6638, 6639]

// Module 6632 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6582 */;
import isPropertyKey from "isPropertyKey" /* 6629 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6633 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6636 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6637 */;
import SameValue from "SameValue" /* 6638 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6639 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6634)(arg2);
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
