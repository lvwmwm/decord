// Module ID: 4442
// Function ID: 38940
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [4443, 4376, 518, 4423, 4427, 4440, 4430, 4431, 4432, 4433, 4444, 4445]

// Module 4442 (ValidateAndApplyPropertyDescriptor)

export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, arg2, __Configurable__) {
  __Set__ = arg4;
  let tmp = require(4443) /* Type */(arg0);
  if (undefined !== arg0) {
    if (!require(4376) /* isObject */(arg0)) {
      let tmp6 = require(518);
      const prototype = tmp6.prototype;
      tmp6 = new tmp6("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (require(4423) /* isPropertyKey */(arg1)) {
    if ("boolean" !== typeof arg2) {
      tmp = require;
      tmp = dependencyMap;
      tmp = require(518);
      const prototype6 = tmp.prototype;
      tmp = new.target;
      tmp = new.target;
      tmp = new tmp("Assertion failed: extensible must be a Boolean");
      throw tmp;
    } else {
      tmp = require;
      tmp = dependencyMap;
      if (require(4427) /* isPropertyDescriptor */(__Configurable__)) {
        if (undefined !== __Set__) {
          if (!require(4427) /* isPropertyDescriptor */(__Set__)) {
            let tmp29 = require(518);
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
              tmp = require(4440) /* IsAccessorDescriptor */(__Configurable__);
              tmp = require(4430) /* result */;
              tmp = require(4431) /* IsDataDescriptor */;
              tmp = require(4432) /* SameValue */;
              tmp = require(4433) /* FromPropertyDescriptor */;
              if (tmp) {
                tmp = arg0;
                tmp = arg1;
                tmp = __Configurable__;
                tmp = tmp(tmp, tmp, tmp, arg0, arg1, __Configurable__);
              } else {
                let obj = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
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
          tmp = require(4444) /* isFullyPopulatedPropertyDescriptor */;
          obj.IsAccessorDescriptor = require(4440) /* IsAccessorDescriptor */;
          let obj1 = 7;
          obj.IsDataDescriptor = require(4431) /* IsDataDescriptor */;
          if (tmp(obj, __Set__)) {
            if (!__Set__["[[Configurable]]"]) {
              if ("[[Configurable]]" in __Configurable__) {
                if (__Configurable__["[[Configurable]]"]) {
                  return false;
                }
              }
              if ("[[Enumerable]]" in __Configurable__) {
                if (!require(4432) /* SameValue */(__Configurable__["[[Enumerable]]"], __Set__["[[Enumerable]]"])) {
                  return false;
                }
              }
              if (!require(4445) /* IsGenericDescriptor */(__Configurable__)) {
                const tmp47 = require(4432) /* SameValue */;
                if (!tmp47(tmp48, require(4440) /* IsAccessorDescriptor */(__Set__))) {
                  return false;
                }
                tmp48 = require(4440) /* IsAccessorDescriptor */(__Configurable__);
              }
              if (require(4440) /* IsAccessorDescriptor */(__Set__)) {
                if ("[[Get]]" in __Configurable__) {
                  if (!require(4432) /* SameValue */(__Configurable__["[[Get]]"], __Set__["[[Get]]"])) {
                    return false;
                  }
                }
                if ("[[Set]]" in __Configurable__) {
                  if (!require(4432) /* SameValue */(__Configurable__["[[Set]]"], __Set__["[[Set]]"])) {
                    return false;
                  }
                }
              } else if (!__Set__["[[Writable]]"]) {
                if ("[[Writable]]" in __Configurable__) {
                  if (__Configurable__["[[Writable]]"]) {
                    return false;
                  }
                }
                if ("[[Value]]" in __Configurable__) {
                  if (!require(4432) /* SameValue */(__Configurable__["[[Value]]"], __Set__["[[Value]]"])) {
                    return false;
                  }
                }
              }
            }
            if ("Undefined" === tmp) {
              return tmp57;
            } else {
              if (!require(dependencyMap[obj1])(__Set__)) {
                if (require(4440) /* IsAccessorDescriptor */(__Set__)) {
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
                    const tmp82 = require(4432) /* SameValue */;
                    const tmp83 = require(4433) /* FromPropertyDescriptor */;
                    obj = { "[[Configurable]]": tmp76["[[Configurable]]"], "[[Enumerable]]": tmp77["[[Enumerable]]"] };
                    let tmp84 = __Set__;
                    if ("[[Value]]" in __Configurable__) {
                      tmp84 = __Configurable__;
                    }
                    obj["[[Value]]"] = tmp84["[[Value]]"];
                    let tmp85 = __Set__;
                    if ("[[Writable]]" in __Configurable__) {
                      tmp85 = __Configurable__;
                    }
                    obj["[[Writable]]"] = tmp85["[[Writable]]"];
                    let tmp68Result = require(4430) /* result */(tmp81, tmp82, tmp83, arg0, arg1, obj);
                    const tmp80 = require(4430) /* result */;
                  }
                  tmp = tmp68Result;
                }
                const tmp69 = require(dependencyMap[obj1]);
                const tmp68 = require(4430) /* result */;
                tmp68Result = tmp68(tmp69, require(4432) /* SameValue */, require(4433) /* FromPropertyDescriptor */, arg0, arg1, __Configurable__);
                const tmp70 = require(4432) /* SameValue */;
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
              const tmp98 = require(4432) /* SameValue */;
              const tmp99 = require(4433) /* FromPropertyDescriptor */;
              obj1 = { "[[Configurable]]": tmp92["[[Configurable]]"], "[[Enumerable]]": tmp93["[[Enumerable]]"] };
              tmp = __Set__;
              if ("[[Get]]" in __Configurable__) {
                tmp = __Configurable__;
              }
              obj1["[[Get]]"] = tmp["[[Get]]"];
              if ("[[Set]]" in __Configurable__) {
                __Set__ = __Configurable__;
              }
              __Set__ = __Set__["[[Set]]"];
              obj1["[[Set]]"] = __Set__;
              tmp = tmp97;
              tmp = tmp98;
              tmp = tmp99;
              tmp = arg0;
              tmp = arg1;
              tmp = obj1;
              tmp68Result = require(4430) /* result */(tmp97, tmp98, tmp99, arg0, arg1, obj1);
              const tmp96 = require(4430) /* result */;
            }
          } else {
            let tmp36 = require(518);
            const prototype5 = tmp36.prototype;
            tmp36 = new tmp36("`current`, when present, must be a fully populated and valid Property Descriptor");
            throw tmp36;
          }
        }
      } else {
        let tmp20 = require(518);
        const prototype3 = tmp20.prototype;
        tmp20 = new tmp20("Assertion failed: Desc must be a Property Descriptor");
        throw tmp20;
      }
    }
  } else {
    let tmp13 = require(518);
    const prototype2 = tmp13.prototype;
    tmp13 = new tmp13("Assertion failed: P must be a Property Key");
    throw tmp13;
  }
};
