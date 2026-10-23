// Module ID: 6451
// Function ID: 6452
// Name: OrdinaryDefineOwnProperty
// Dependencies: [6388, 1308, 6435, 6439, 1309, 6452, 1329, 6444, 6440, 6453, 6454]

// Module 6451 (OrdinaryDefineOwnProperty)
import _mod1308 from "module_1308" /* 1308 */;
import _mod1309 from "module_1309" /* 1309 */;
import _mod1329 from "module_1329" /* 1329 */;
import isObject from "isObject" /* 6388 */;
import isPropertyKey from "isPropertyKey" /* 6435 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6439 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6440 */;
import SameValue from "SameValue" /* 6444 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6452 */;
import GetIntrinsic from "GetIntrinsic" /* 6453 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 6454 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (isPropertyDescriptor(__Writable__)) {
        if (_mod1309) {
          const tmp20 = _mod1309(arg0, arg1);
          const tmp21 = tmp20 && ToPropertyDescriptor(tmp20);
          const tmp22 = GetIntrinsic(arg0);
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, tmp22, __Writable__, tmp21);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const self9 = this;
          const self10 = this;
          const tmp18 = new _mod1329("This environment does not support accessor property descriptors.");
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
              const tmp16 = new _mod1329("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp16;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1308("Assertion failed: Desc must be a Property Descriptor");
        throw tmp9;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1308("Assertion failed: P must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1308("Assertion failed: O must be an Object");
    throw tmp3;
  }
};
