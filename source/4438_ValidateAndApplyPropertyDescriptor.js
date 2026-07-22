// Module ID: 4438
// Function ID: 38908
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: []

// Module 4438 (ValidateAndApplyPropertyDescriptor)

export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, arg2, [[Configurable]]) {
  [[Set]] = arg4;
  let tmp = require(dependencyMap[0])(arg0);
  if (undefined !== arg0) {
    if (!require(dependencyMap[1])(arg0)) {
      let tmp6 = require(dependencyMap[2]);
      const prototype = tmp6.prototype;
      tmp6 = new tmp6("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (require(dependencyMap[3])(arg1)) {
    if ("boolean" !== typeof arg2) {
      tmp = require;
      tmp = dependencyMap;
      tmp = require(dependencyMap[2]);
      const prototype6 = tmp.prototype;
      tmp = new.target;
      tmp = new.target;
      tmp = new tmp("Assertion failed: extensible must be a Boolean");
      throw tmp;
    } else {
      tmp = require;
      tmp = dependencyMap;
      if (require(dependencyMap[4])(__Configurable__)) {
        if (undefined !== __Set__) {
          if (!require(dependencyMap[4])(__Set__)) {
            let tmp29 = require(dependencyMap[2]);
            const prototype4 = tmp29.prototype;
            tmp29 = new tmp29("Assertion failed: current must be a Property Descriptor, or undefined");
            throw tmp29;
          }
        }
        if (undefined === __Set__) {
          tmp = !arg2;
          tmp = !tmp;
          if (!tmp) {
            tmp = "Undefined" === tmp;
            if (!tmp) {
              tmp = require;
              tmp = dependencyMap;
              tmp = require;
              tmp = dependencyMap;
              tmp = require(dependencyMap[5])(__Configurable__);
              tmp = require(dependencyMap[6]);
              tmp = require(dependencyMap[7]);
              tmp = require(dependencyMap[8]);
              tmp = require(dependencyMap[9]);
              if (tmp) {
                tmp = arg0;
                tmp = arg1;
                tmp = __Configurable__;
                tmp = tmp(tmp, tmp, tmp, arg0, arg1, __Configurable__);
              } else {
                let obj = { [[Configurable]]: __Configurable__.[[Configurable]], [[Enumerable]]: __Configurable__.[[Enumerable]], [[Value]]: __Configurable__.[[Value]], [[Writable]]: __Configurable__.[[Writable]] };
                tmp = arg0;
                tmp = arg1;
                tmp = obj;
                tmp = tmp(tmp, tmp, tmp, arg0, arg1, obj);
              }
            }
          }
          return tmp;
        } else {
          tmp = require;
          tmp = dependencyMap;
          obj = {};
          tmp = require(dependencyMap[10]);
          obj.IsAccessorDescriptor = require(dependencyMap[5]);
          let obj1 = 7;
          obj.IsDataDescriptor = require(dependencyMap[7]);
          if (tmp(obj, __Set__)) {
            if (!__Set__.[[Configurable]]) {
              if ("[[Configurable]]" in __Configurable__) {
                if (__Configurable__.[[Configurable]]) {
                  return false;
                }
              }
              if ("[[Enumerable]]" in __Configurable__) {
                if (!require(dependencyMap[8])(__Configurable__.[[Enumerable]], __Set__.[[Enumerable]])) {
                  return false;
                }
              }
              if (!require(dependencyMap[11])(__Configurable__)) {
                const tmp47 = require(dependencyMap[8]);
                if (!tmp47(tmp48, require(dependencyMap[5])(__Set__))) {
                  return false;
                }
                const tmp48 = require(dependencyMap[5])(__Configurable__);
              }
              if (require(dependencyMap[5])(__Set__)) {
                if ("[[Get]]" in __Configurable__) {
                  if (!require(dependencyMap[8])(__Configurable__.[[Get]], __Set__.[[Get]])) {
                    return false;
                  }
                }
                if ("[[Set]]" in __Configurable__) {
                  if (!require(dependencyMap[8])(__Configurable__.[[Set]], __Set__.[[Set]])) {
                    return false;
                  }
                }
              } else if (!__Set__.[[Writable]]) {
                if ("[[Writable]]" in __Configurable__) {
                  if (__Configurable__.[[Writable]]) {
                    return false;
                  }
                }
                if ("[[Value]]" in __Configurable__) {
                  if (!require(dependencyMap[8])(__Configurable__.[[Value]], __Set__.[[Value]])) {
                    return false;
                  }
                }
              }
            }
            if ("Undefined" === tmp) {
              return tmp57;
            } else {
              if (!require(dependencyMap[obj1])(__Set__)) {
                if (require(dependencyMap[5])(__Set__)) {
                  if (require(dependencyMap[obj1])(__Configurable__)) {
                    let tmp76 = __Set__;
                    if ("[[Configurable]]" in __Configurable__) {
                      tmp76 = __Configurable__;
                    }
                    let tmp77 = __Set__;
                    if ("[[Enumerable]]" in __Configurable__) {
                      tmp77 = __Configurable__;
                    }
                    const tmp81 = require(dependencyMap[obj1]);
                    const tmp82 = require(dependencyMap[8]);
                    const tmp83 = require(dependencyMap[9]);
                    obj = { [[Configurable]]: tmp76.[[Configurable]], [[Enumerable]]: tmp77.[[Enumerable]] };
                    let tmp84 = __Set__;
                    if ("[[Value]]" in __Configurable__) {
                      tmp84 = __Configurable__;
                    }
                    obj.[[Value]] = tmp84.[[Value]];
                    let tmp85 = __Set__;
                    if ("[[Writable]]" in __Configurable__) {
                      tmp85 = __Configurable__;
                    }
                    obj.[[Writable]] = tmp85.[[Writable]];
                    let tmp68Result = require(dependencyMap[6])(tmp81, tmp82, tmp83, arg0, arg1, obj);
                    const tmp80 = require(dependencyMap[6]);
                  }
                  tmp = tmp68Result;
                }
                const tmp69 = require(dependencyMap[obj1]);
                const tmp68 = require(dependencyMap[6]);
                tmp68Result = tmp68(tmp69, require(dependencyMap[8]), require(dependencyMap[9]), arg0, arg1, __Configurable__);
                const tmp70 = require(dependencyMap[8]);
              }
              let tmp92 = __Set__;
              if ("[[Configurable]]" in __Configurable__) {
                tmp92 = __Configurable__;
              }
              let tmp93 = __Set__;
              if ("[[Enumerable]]" in __Configurable__) {
                tmp93 = __Configurable__;
              }
              const tmp97 = require(dependencyMap[obj1]);
              const tmp98 = require(dependencyMap[8]);
              const tmp99 = require(dependencyMap[9]);
              obj1 = { [[Configurable]]: tmp92.[[Configurable]], [[Enumerable]]: tmp93.[[Enumerable]] };
              tmp = __Set__;
              if ("[[Get]]" in __Configurable__) {
                tmp = __Configurable__;
              }
              obj1.[[Get]] = tmp.[[Get]];
              if ("[[Set]]" in __Configurable__) {
                [[Set]] = __Configurable__;
              }
              [[Set]] = __Set__.[[Set]];
              obj1.[[Set]] = __Set__;
              tmp = tmp97;
              tmp = tmp98;
              tmp = tmp99;
              tmp = arg0;
              tmp = arg1;
              tmp = obj1;
              tmp68Result = require(dependencyMap[6])(tmp97, tmp98, tmp99, arg0, arg1, obj1);
              const tmp96 = require(dependencyMap[6]);
            }
          } else {
            let tmp36 = require(dependencyMap[2]);
            const prototype5 = tmp36.prototype;
            tmp36 = new tmp36("`current`, when present, must be a fully populated and valid Property Descriptor");
            throw tmp36;
          }
        }
      } else {
        let tmp20 = require(dependencyMap[2]);
        const prototype3 = tmp20.prototype;
        tmp20 = new tmp20("Assertion failed: Desc must be a Property Descriptor");
        throw tmp20;
      }
    }
  } else {
    let tmp13 = require(dependencyMap[2]);
    const prototype2 = tmp13.prototype;
    tmp13 = new tmp13("Assertion failed: P must be a Property Key");
    throw tmp13;
  }
};
