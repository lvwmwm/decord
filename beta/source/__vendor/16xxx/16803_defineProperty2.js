// Module ID: 16803
// Function ID: 16804
// Name: defineProperty2
// Dependencies: [16752, 16804, 16801, 16761, 16784]

// Module 16803 (defineProperty2)
import _mod16752 from "module_16752" /* 16752 */;
import _mod16761 from "module_16761" /* 16761 */;
import _mod16784 from "module_16784" /* 16784 */;
import _mod16801 from "module_16801" /* 16801 */;
import _mod16804 from "module_16804" /* 16804 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16752) {
  if (_mod16804) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16801(fn);
      const tmp2 = _mod16761(arg1);
      _mod16801(value);
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
    _mod16801(arg0);
    const tmp2 = _mod16761(arg1);
    _mod16801(value);
    if (!_mod16784) {
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
