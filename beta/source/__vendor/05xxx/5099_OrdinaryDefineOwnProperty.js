// Module ID: 5099
// Function ID: 5100
// Name: OrdinaryDefineOwnProperty
// Dependencies: [5036, 1282, 5083, 5087, 1283, 5100, 1303, 5092, 5088, 5101, 5102]

// Module 5099 (OrdinaryDefineOwnProperty)
import _mod5036 from "module_5036" /* 5036 */;


export default function OrdinaryDefineOwnProperty(arg0, arg1, __Writable__) {
  if (_mod5036(arg0)) {
    if (tmp(5083)(arg1)) {
      if (tmp(5087)(__Writable__)) {
        if (tmp(1283)) {
          const tmp30 = tmp(1283)(arg0, arg1);
          let tmp31 = tmp30;
          if (tmp30) {
            tmp31 = tmp(5088)(tmp30);
          }
          return tmp(5102)(arg0, arg1, tmp(5101)(arg0), __Writable__, tmp31);
        } else if (tmp(5100)(__Writable__)) {
          const tmp28 = new tmp(1303)("This environment does not support accessor property descriptors.");
          throw tmp28;
        } else {
          let tmp17 = !(arg1 in arg0) && __Writable__["[[Writable]]"] && __Writable__["[[Enumerable]]"] && __Writable__["[[Configurable]]"];
          if (tmp17) {
            tmp17 = "[[Value]]" in __Writable__;
          }
          let tmp18 = arg1 in arg0;
          if (tmp18) {
            tmp18 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
            const tmp19 = !("[[Configurable]]" in __Writable__) || __Writable__["[[Configurable]]"];
          }
          if (tmp18) {
            tmp18 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
            const tmp20 = !("[[Enumerable]]" in __Writable__) || __Writable__["[[Enumerable]]"];
          }
          if (tmp18) {
            tmp18 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
            const tmp21 = !("[[Writable]]" in __Writable__) || __Writable__["[[Writable]]"];
          }
          if (tmp18) {
            tmp18 = "[[Value]]" in __Writable__;
          }
          if (!tmp17) {
            if (!tmp18) {
              const tmp24 = new tmp(1303)("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              throw tmp24;
            }
          }
          arg0[arg1] = __Writable__["[[Value]]"];
          return tmp(5092)(arg0[arg1], __Writable__["[[Value]]"]);
        }
      } else {
        const tmp15 = new tmp(1282)("Assertion failed: Desc must be a Property Descriptor");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1282)("Assertion failed: P must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1282)("Assertion failed: O must be an Object");
    throw tmp5;
  }
};
