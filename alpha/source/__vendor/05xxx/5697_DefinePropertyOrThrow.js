// Module ID: 5697
// Function ID: 5698
// Name: DefinePropertyOrThrow
// Dependencies: [5647, 1305, 5694, 5698, 5699, 5701, 5702, 5703, 5704]

// Module 5697 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import isObject from "isObject" /* 5647 */;
import isPropertyKey from "isPropertyKey" /* 5694 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5698 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5701 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5702 */;
import SameValue from "SameValue" /* 5703 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5704 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5699)(arg2);
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
