// Module ID: 15604
// Function ID: 15605
// Name: defineProperty2
// Dependencies: [15553, 15605, 15602, 15562, 15585]

// Module 15604 (defineProperty2)
import _mod15553 from "module_15553" /* 15553 */;
import _mod15562 from "module_15562" /* 15562 */;
import _mod15585 from "module_15585" /* 15585 */;
import _mod15602 from "module_15602" /* 15602 */;
import _mod15605 from "module_15605" /* 15605 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15553) {
  if (_mod15605) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15602(fn);
      const tmp2 = _mod15562(arg1);
      _mod15602(value);
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
    _mod15602(arg0);
    const tmp2 = _mod15562(arg1);
    _mod15602(value);
    if (!_mod15585) {
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
