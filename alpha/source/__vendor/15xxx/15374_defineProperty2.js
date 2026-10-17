// Module ID: 15374
// Function ID: 15375
// Name: defineProperty2
// Dependencies: [15323, 15375, 15372, 15332, 15355]

// Module 15374 (defineProperty2)
import _mod15323 from "module_15323" /* 15323 */;
import _mod15332 from "module_15332" /* 15332 */;
import _mod15355 from "module_15355" /* 15355 */;
import _mod15372 from "module_15372" /* 15372 */;
import _mod15375 from "module_15375" /* 15375 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15323) {
  if (_mod15375) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15372(fn);
      const tmp2 = _mod15332(arg1);
      _mod15372(value);
      let tmp4 = value;
      if (typeof fn === "function") {
        tmp4 = value;
        if ("prototype" === tmp2) {
          tmp4 = value;
          if ("value" in value) {
            tmp4 = value;
            if (writable in value) {
              tmp4 = value;
              if (!value[writable]) {
                const tmp7 = getOwnPropertyDescriptor(fn, tmp2);
                tmp4 = value;
                const tmp8 = tmp7 && tmp7[writable];
                if (tmp8) {
                  fn[tmp2] = value.value;
                  tmp4 = { configurable: configurable in value ? value[configurable] : tmp7[configurable], enumerable: enumerable in value ? value[enumerable] : tmp7[enumerable], writable: false };
                  const obj = { configurable: configurable in value ? value[configurable] : tmp7[configurable], enumerable: enumerable in value ? value[enumerable] : tmp7[enumerable], writable: false };
                }
              }
            }
          }
        }
      }
      return defineProperty(fn, tmp2, tmp4);
    };
  }
  defineProperty2 = defineProperty;
} else {
  defineProperty2 = function defineProperty(arg0, arg1, value) {
    _mod15372(arg0);
    const tmp2 = _mod15332(arg1);
    _mod15372(value);
    if (!_mod15355) {
      if (!("get" in value)) {
        if (!("set" in value)) {
          if ("value" in value) {
            arg0[tmp2] = value.value;
          }
          return arg0;
        }
      }
      const self = this;
      const self2 = this;
      const tmp6 = new TypeError("Accessors not supported");
      throw tmp6;
    } else {
      try {
        return defineProperty(arg0, tmp2, value);
      } catch (err) {
      }
    }
  };
}

export const f = defineProperty2;
