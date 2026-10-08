// Module ID: 5710
// Function ID: 5711
// Name: OrdinaryDefineOwnProperty
// Dependencies: [5647, 1305, 5694, 5698, 1306, 5711, 1326, 5703, 5699, 5712, 5713]

// Module 5710 (OrdinaryDefineOwnProperty)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1306 from "module_1306" /* 1306 */;
import _mod1326 from "module_1326" /* 1326 */;
import isObject from "isObject" /* 5647 */;
import isPropertyKey from "isPropertyKey" /* 5694 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5698 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5699 */;
import SameValue from "SameValue" /* 5703 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 5711 */;
import GetIntrinsic from "GetIntrinsic" /* 5712 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 5713 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (isPropertyDescriptor(__Writable__)) {
        if (_mod1306) {
          const tmp20 = _mod1306(arg0, arg1);
          const tmp21 = tmp20 && ToPropertyDescriptor(tmp20);
          const tmp22 = GetIntrinsic(arg0);
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, tmp22, __Writable__, tmp21);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const self9 = this;
          const self10 = this;
          const tmp18 = new _mod1326("This environment does not support accessor property descriptors.");
          throw tmp18;
        } else {
          let tmp12 = arg1 in arg0;
          const tmp11 = !(arg1 in arg0) && __Writable__["[[Writable]]"] && __Writable__["[[Enumerable]]"] && __Writable__["[[Configurable]]"] && "[[Value]]" in __Writable__;
          if (tmp12) {
            tmp12 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
          }
          if (tmp12) {
            tmp12 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
          }
          if (tmp12) {
            tmp12 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
          }
          if (tmp12) {
            tmp12 = "[[Value]]" in __Writable__;
          }
          if (!tmp11) {
            if (!tmp12) {
              const self7 = this;
              const self8 = this;
              const tmp16 = new _mod1326("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp16;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1305("Assertion failed: Desc must be a Property Descriptor");
        throw tmp9;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1305("Assertion failed: P must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1305("Assertion failed: O must be an Object");
    throw tmp3;
  }
};
