// Module ID: 5072
// Function ID: 5073
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [5073, 5006, 1286, 5053, 5057, 5070, 5060, 5061, 5062, 5063, 5074, 5075]

// Module 5072 (ValidateAndApplyPropertyDescriptor)
import _mod5053 from "module_5053" /* 5053 */;
import _mod5073 from "module_5073" /* 5073 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod5073(arg0);
  if (undefined !== arg0) {
    if (!tmp(5006)(arg0)) {
      const tmp6 = new tmp(1286)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod5053(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1286)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(5057)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(5057)(prop)) {
          const tmp20 = new tmp(1286)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            const tmpResult = tmp(5060);
            const tmpResult17 = tmp(5061);
            const tmpResult18 = tmp(5062);
            const tmpResult19 = tmp(5063);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = tmp(5070)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor: tmp(5070), IsDataDescriptor: tmp(5061) };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(5062)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(5075)(__Configurable__)) {
              const tmpResult21 = tmp(5062);
              if (!tmpResult21(tmp27, tmp(5070)(prop))) {
                return false;
              }
              tmp27 = tmp(5070)(__Configurable__);
            }
            if (tmp(5070)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(5062)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(5062)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
                  return false;
                }
              }
            } else if (!prop["[[Writable]]"]) {
              if ("[[Writable]]" in __Configurable__) {
                if (__Configurable__["[[Writable]]"]) {
                  return false;
                }
              }
              if ("[[Value]]" in __Configurable__) {
                if (!tmp(5062)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(5061)(prop)) {
              if (tmp(5070)(prop)) {
                if (tmp(5061)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = tmp(5061);
                  const tmpResult24 = tmp(5062);
                  const tmpResult25 = tmp(5063);
                  const obj = { "[[Configurable]]": tmp37["[[Configurable]]"], "[[Enumerable]]": tmp38["[[Enumerable]]"], "[[Value]]": null, "[[Writable]]": null };
                  let tmp43 = prop;
                  if ("[[Value]]" in __Configurable__) {
                    tmp43 = __Configurable__;
                  }
                  obj["[[Value]]"] = tmp43["[[Value]]"];
                  let tmp44 = prop;
                  if ("[[Writable]]" in __Configurable__) {
                    tmp44 = __Configurable__;
                  }
                  obj["[[Writable]]"] = tmp44["[[Writable]]"];
                  let tmpResult6Result = tmp(5060)(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = tmp(5060);
                }
              }
              const tmpResult27 = tmp(5061);
              const tmpResult26 = tmp(5060);
              tmpResult6Result = tmpResult26(tmpResult27, tmp(5062), tmp(5063), arg0, arg1, __Configurable__);
              const tmpResult28 = tmp(5062);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = tmp(5061);
            const tmpResult31 = tmp(5062);
            const tmpResult32 = tmp(5063);
            const obj4 = { "[[Configurable]]": tmp51["[[Configurable]]"], "[[Enumerable]]": tmp52["[[Enumerable]]"], "[[Get]]": null, "[[Set]]": null };
            let tmp57 = prop;
            if ("[[Get]]" in __Configurable__) {
              tmp57 = __Configurable__;
            }
            obj4["[[Get]]"] = tmp57["[[Get]]"];
            if ("[[Set]]" in __Configurable__) {
              prop = __Configurable__;
            }
            prop = prop["[[Set]]"];
            obj4["[[Set]]"] = prop;
            tmpResult6Result = tmp(5060)(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = tmp(5060);
          }
        } else {
          const tmp24 = new tmp(1286)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = tmp(5074);
      }
    } else {
      const tmp15 = new tmp(1286)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(1286)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};
