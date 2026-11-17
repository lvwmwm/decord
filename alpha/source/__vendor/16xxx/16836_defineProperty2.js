// Module ID: 16836
// Function ID: 16837
// Name: defineProperty2
// Dependencies: [16785, 16837, 16834, 16794, 16817]

// Module 16836 (defineProperty2)
import _mod16785 from "module_16785" /* 16785 */;
import _mod16794 from "module_16794" /* 16794 */;
import _mod16817 from "module_16817" /* 16817 */;
import _mod16834 from "module_16834" /* 16834 */;
import _mod16837 from "module_16837" /* 16837 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16785) {
  if (_mod16837) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16834(fn);
      const tmp2 = _mod16794(arg1);
      _mod16834(value);
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
    _mod16834(arg0);
    const tmp2 = _mod16794(arg1);
    _mod16834(value);
    if (!_mod16817) {
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
