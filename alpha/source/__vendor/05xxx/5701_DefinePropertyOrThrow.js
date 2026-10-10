// Module ID: 5701
// Function ID: 5702
// Name: DefinePropertyOrThrow
// Dependencies: [5651, 1306, 5698, 5702, 5703, 5705, 5706, 5707, 5708]

// Module 5701 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import isObject from "isObject" /* 5651 */;
import isPropertyKey from "isPropertyKey" /* 5698 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5702 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5705 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5706 */;
import SameValue from "SameValue" /* 5707 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5708 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      let tmp9 = arg2;
      if (!isPropertyDescriptor(arg2)) {
        tmp9 = tmp(5703)(arg2);
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
