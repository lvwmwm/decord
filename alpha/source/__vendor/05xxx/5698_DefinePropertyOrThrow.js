// Module ID: 5698
// Function ID: 5699
// Name: DefinePropertyOrThrow
// Dependencies: [5648, 1306, 5695, 5699, 5700, 5702, 5703, 5704, 5705]

// Module 5698 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5648 */;
import isPropertyKey from "isPropertyKey" /* 5695 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5699 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5702 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5703 */;
import SameValue from "SameValue" /* 5704 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5705 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5700)(arg2);
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
