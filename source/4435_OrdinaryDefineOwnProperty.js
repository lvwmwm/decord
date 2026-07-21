// Module ID: 4435
// Function ID: 38885
// Name: OrdinaryDefineOwnProperty
// Dependencies: []

// Module 4435 (OrdinaryDefineOwnProperty)

export default function OrdinaryDefineOwnProperty(arg0, arg1, [[Writable]]) {
  if (require(dependencyMap[0])(arg0)) {
    if (tmp(tmp2[2])(arg1)) {
      if (tmp8(tmp9[3])(__Writable__)) {
        if (tmp15(tmp16[4])) {
          const tmp45 = tmp22(tmp23[4])(arg0, arg1);
          let tmp46 = tmp45;
          if (tmp45) {
            tmp46 = require(dependencyMap[8])(tmp45);
          }
          return require(dependencyMap[10])(arg0, arg1, require(dependencyMap[9])(arg0), __Writable__, tmp46);
        } else if (tmp22(tmp23[5])(__Writable__)) {
          let tmp40 = require(dependencyMap[6]);
          const prototype5 = tmp40.prototype;
          tmp40 = new tmp40("This environment does not support accessor property descriptors.");
          throw tmp40;
        } else {
          [[Configurable]] = !tmp24;
          if (!(arg1 in arg0)) {
            [[Configurable]] = __Writable__.[[Writable]];
          }
          if (__Configurable__) {
            [[Configurable]] = __Writable__.[[Enumerable]];
          }
          if (__Configurable__) {
            [[Configurable]] = __Writable__.[[Configurable]];
          }
          if (__Configurable__) {
            [[Configurable]] = "[[Value]]" in __Writable__;
          }
          let tmp25 = arg1 in arg0;
          if (tmp25) {
            [[Configurable]]2 = !tmp26;
            if ("[[Configurable]]" in __Writable__) {
              [[Configurable]]2 = __Writable__.[[Configurable]];
            }
            tmp25 = __Configurable__2;
          }
          if (tmp25) {
            [[Enumerable]] = !tmp27;
            if ("[[Enumerable]]" in __Writable__) {
              [[Enumerable]] = __Writable__.[[Enumerable]];
            }
            tmp25 = __Enumerable__;
          }
          if (tmp25) {
            [[Writable]] = !tmp28;
            if ("[[Writable]]" in __Writable__) {
              [[Writable]] = __Writable__.[[Writable]];
            }
            tmp25 = __Writable__;
          }
          if (tmp25) {
            tmp25 = "[[Value]]" in __Writable__;
          }
          if (!__Configurable__) {
            if (!tmp25) {
              let tmp31 = require(dependencyMap[6]);
              const prototype4 = tmp31.prototype;
              tmp31 = new tmp31("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp31;
            }
          }
          arg0[arg1] = __Writable__.[[Value]];
          return require(dependencyMap[7])(arg0[arg1], __Writable__.[[Value]]);
        }
      } else {
        let tmp15Result = tmp15(tmp16[1]);
        const prototype3 = tmp15Result.prototype;
        tmp15Result = new tmp15Result("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15Result;
      }
    } else {
      let tmp8Result = tmp8(tmp9[1]);
      const prototype2 = tmp8Result.prototype;
      tmp8Result = new tmp8Result("Assertion failed: P must be a Property Key");
      throw tmp8Result;
    }
  } else {
    let tmpResult = tmp(tmp2[1]);
    const prototype = tmpResult.prototype;
    tmpResult = new tmpResult("Assertion failed: O must be an Object");
    throw tmpResult;
  }
};
