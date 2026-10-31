// Module ID: 6512
// Function ID: 6513
// Name: DefinePropertyOrThrow
// Dependencies: [6462, 1293, 6509, 6513, 6514, 6516, 6517, 6518, 6519]

// Module 6512 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import isObject from "isObject" /* 6462 */;
import isPropertyKey from "isPropertyKey" /* 6509 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6513 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6516 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6517 */;
import SameValue from "SameValue" /* 6518 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6519 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(6514)(arg2);
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
