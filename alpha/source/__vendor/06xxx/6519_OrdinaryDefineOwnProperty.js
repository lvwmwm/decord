// Module ID: 6519
// Function ID: 6520
// Name: OrdinaryDefineOwnProperty
// Dependencies: [6456, 1294, 6503, 6507, 1295, 6520, 1315, 6512, 6508, 6521, 6522]

// Module 6519 (OrdinaryDefineOwnProperty)
import _mod1294 from "module_1294" /* 1294 */;
import _mod1295 from "module_1295" /* 1295 */;
import _mod1315 from "module_1315" /* 1315 */;
import isObject from "isObject" /* 6456 */;
import isPropertyKey from "isPropertyKey" /* 6503 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 6507 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6508 */;
import SameValue from "SameValue" /* 6512 */;
import IsAccessorDescriptor from "IsAccessorDescriptor" /* 6520 */;
import GetIntrinsic from "GetIntrinsic" /* 6521 */;
import ValidateAndApplyPropertyDescriptor from "ValidateAndApplyPropertyDescriptor" /* 6522 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (isObject(arg0)) {
    if (isPropertyKey(arg1)) {
      if (isPropertyDescriptor(__Writable__)) {
        if (_mod1295) {
          const tmp20 = _mod1295(arg0, arg1);
          const tmp21 = tmp20 && ToPropertyDescriptor(tmp20);
          const tmp22 = GetIntrinsic(arg0);
          return ValidateAndApplyPropertyDescriptor(arg0, arg1, tmp22, __Writable__, tmp21);
        } else if (IsAccessorDescriptor(__Writable__)) {
          const self9 = this;
          const self10 = this;
          const tmp18 = new _mod1315("This environment does not support accessor property descriptors.");
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
              const tmp16 = new _mod1315("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp16;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return SameValue(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const self5 = this;
        const self6 = this;
        const tmp9 = new _mod1294("Assertion failed: Desc must be a Property Descriptor");
        throw tmp9;
      }
    } else {
      const self3 = this;
      const self4 = this;
      const tmp6 = new _mod1294("Assertion failed: P must be a Property Key");
      throw tmp6;
    }
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1294("Assertion failed: O must be an Object");
    throw tmp3;
  }
};
