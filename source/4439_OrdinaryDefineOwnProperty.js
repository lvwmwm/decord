// Module ID: 4439
// Function ID: 38933
// Name: OrdinaryDefineOwnProperty
// Dependencies: [4376, 518, 4423, 4427, 519, 4440, 539, 4432, 4428, 4441, 4442]

// Module 4439 (OrdinaryDefineOwnProperty)

export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (require(4376) /* isObject */(arg0)) {
    if (tmp(4423)(arg1)) {
      if (tmp8(4427)(__Writable__)) {
        if (tmp15(519)) {
          const tmp45 = tmp22(519)(arg0, arg1);
          let tmp46 = tmp45;
          if (tmp45) {
            tmp46 = require(4428) /* ToPropertyDescriptor */(tmp45);
          }
          return require(4442) /* ValidateAndApplyPropertyDescriptor */(arg0, arg1, require(4441) /* getEvalledConstructor */(arg0), __Writable__, tmp46);
        } else if (tmp22(4440)(__Writable__)) {
          let tmp40 = require(539);
          const prototype5 = tmp40.prototype;
          tmp40 = new tmp40("This environment does not support accessor property descriptors.");
          throw tmp40;
        } else {
          __Configurable__ = !tmp24;
          if (!(arg1 in arg0)) {
            __Configurable__ = __Writable__["[[Writable]]"];
          }
          if (__Configurable__) {
            __Configurable__ = __Writable__["[[Enumerable]]"];
          }
          if (__Configurable__) {
            __Configurable__ = __Writable__["[[Configurable]]"];
          }
          if (__Configurable__) {
            __Configurable__ = "[[Value]]" in __Writable__;
          }
          let tmp25 = arg1 in arg0;
          if (tmp25) {
            __Configurable__2 = !tmp26;
            if ("[[Configurable]]" in __Writable__) {
              __Configurable__2 = __Writable__["[[Configurable]]"];
            }
            tmp25 = __Configurable__2;
          }
          if (tmp25) {
            __Enumerable__ = !tmp27;
            if ("[[Enumerable]]" in __Writable__) {
              __Enumerable__ = __Writable__["[[Enumerable]]"];
            }
            tmp25 = __Enumerable__;
          }
          if (tmp25) {
            __Writable__ = !tmp28;
            if ("[[Writable]]" in __Writable__) {
              __Writable__ = __Writable__["[[Writable]]"];
            }
            tmp25 = __Writable__;
          }
          if (tmp25) {
            tmp25 = "[[Value]]" in __Writable__;
          }
          if (!__Configurable__) {
            if (!tmp25) {
              let tmp31 = require(539);
              const prototype4 = tmp31.prototype;
              tmp31 = new tmp31("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp31;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return require(4432) /* SameValue */(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        let tmp15Result = tmp15(518);
        const prototype3 = tmp15Result.prototype;
        tmp15Result = new tmp15Result("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15Result;
      }
    } else {
      let tmp8Result = tmp8(518);
      const prototype2 = tmp8Result.prototype;
      tmp8Result = new tmp8Result("Assertion failed: P must be a Property Key");
      throw tmp8Result;
    }
  } else {
    let tmpResult = tmp(518);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: O must be an Object");
    throw tmpResult;
  }
};
