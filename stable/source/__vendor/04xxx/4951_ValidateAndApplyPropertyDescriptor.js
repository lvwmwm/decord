// Module ID: 4951
// Function ID: 4952
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [4952, 4885, 1281, 4932, 4936, 4949, 4939, 4940, 4941, 4942, 4953, 4954]

// Module 4951 (ValidateAndApplyPropertyDescriptor)
import _mod4932 from "module_4932" /* 4932 */;
import _mod4952 from "module_4952" /* 4952 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4952(arg0);
  if (undefined !== arg0) {
    if (!tmp(4885)(arg0)) {
      const tmp6 = new tmp(1281)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4932(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1281)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(4936)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(4936)(prop)) {
          const tmp20 = new tmp(1281)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            const tmpResult = tmp(4939);
            const tmpResult17 = tmp(4940);
            const tmpResult18 = tmp(4941);
            const tmpResult19 = tmp(4942);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = tmp(4949)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor: tmp(4949), IsDataDescriptor: tmp(4940) };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4941)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4954)(__Configurable__)) {
              const tmpResult21 = tmp(4941);
              if (!tmpResult21(tmp27, tmp(4949)(prop))) {
                return false;
              }
              tmp27 = tmp(4949)(__Configurable__);
            }
            if (tmp(4949)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4941)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4941)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
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
                if (!tmp(4941)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(4940)(prop)) {
              if (tmp(4949)(prop)) {
                if (tmp(4940)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = tmp(4940);
                  const tmpResult24 = tmp(4941);
                  const tmpResult25 = tmp(4942);
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
                  let tmpResult6Result = tmp(4939)(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = tmp(4939);
                }
              }
              const tmpResult27 = tmp(4940);
              const tmpResult26 = tmp(4939);
              tmpResult6Result = tmpResult26(tmpResult27, tmp(4941), tmp(4942), arg0, arg1, __Configurable__);
              const tmpResult28 = tmp(4941);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = tmp(4940);
            const tmpResult31 = tmp(4941);
            const tmpResult32 = tmp(4942);
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
            tmpResult6Result = tmp(4939)(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = tmp(4939);
          }
        } else {
          const tmp24 = new tmp(1281)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = tmp(4953);
      }
    } else {
      const tmp15 = new tmp(1281)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(1281)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};
