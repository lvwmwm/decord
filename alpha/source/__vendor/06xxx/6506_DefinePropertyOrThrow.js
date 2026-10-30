// Module ID: 6506
// Function ID: 6507
// Name: DefinePropertyOrThrow
// Dependencies: [6456, 1294, 6503, 6507, 6508, 6510, 6511, 6512, 6513]

// Module 6506 (DefinePropertyOrThrow)
import _mod1294 from "module_1294" /* 1294 */;
import isObject from "isObject" /* 6456 */;
import isPropertyKey from "isPropertyKey" /* 6503 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6507 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6510 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6511 */;
import SameValue from "SameValue" /* 6512 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6513 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6508)(arg2);
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
