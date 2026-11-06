// Module ID: 16177
// Function ID: 16178
// Name: defineProperty2
// Dependencies: [16126, 16178, 16175, 16135, 16158]

// Module 16177 (defineProperty2)
import _mod16126 from "module_16126" /* 16126 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16158 from "module_16158" /* 16158 */;
import _mod16175 from "module_16175" /* 16175 */;
import _mod16178 from "module_16178" /* 16178 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16126) {
  if (_mod16178) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16175(fn);
      const tmp2 = _mod16135(arg1);
      _mod16175(value);
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
    _mod16175(arg0);
    const tmp2 = _mod16135(arg1);
    _mod16175(value);
    if (!_mod16158) {
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
