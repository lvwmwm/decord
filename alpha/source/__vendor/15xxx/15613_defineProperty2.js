// Module ID: 15613
// Function ID: 15614
// Name: defineProperty2
// Dependencies: [15562, 15614, 15611, 15571, 15594]

// Module 15613 (defineProperty2)
import _mod15562 from "module_15562" /* 15562 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15611 from "module_15611" /* 15611 */;
import _mod15614 from "module_15614" /* 15614 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15562) {
  if (_mod15614) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15611(fn);
      const tmp2 = _mod15571(arg1);
      _mod15611(value);
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
    _mod15611(arg0);
    const tmp2 = _mod15571(arg1);
    _mod15611(value);
    if (!_mod15594) {
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
