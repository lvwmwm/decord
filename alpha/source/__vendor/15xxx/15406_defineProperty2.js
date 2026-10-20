// Module ID: 15406
// Function ID: 15407
// Name: defineProperty2
// Dependencies: [15355, 15407, 15404, 15364, 15387]

// Module 15406 (defineProperty2)
import _mod15355 from "module_15355" /* 15355 */;
import _mod15364 from "module_15364" /* 15364 */;
import _mod15387 from "module_15387" /* 15387 */;
import _mod15404 from "module_15404" /* 15404 */;
import _mod15407 from "module_15407" /* 15407 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15355) {
  if (_mod15407) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15404(fn);
      const tmp2 = _mod15364(arg1);
      _mod15404(value);
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
    _mod15404(arg0);
    const tmp2 = _mod15364(arg1);
    _mod15404(value);
    if (!_mod15387) {
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
