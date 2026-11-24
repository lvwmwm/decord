// Module ID: 15590
// Function ID: 15591
// Name: defineProperty2
// Dependencies: [15539, 15591, 15588, 15548, 15571]

// Module 15590 (defineProperty2)
import _mod15539 from "module_15539" /* 15539 */;
import _mod15548 from "module_15548" /* 15548 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15588 from "module_15588" /* 15588 */;
import _mod15591 from "module_15591" /* 15591 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15539) {
  if (_mod15591) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15588(fn);
      const tmp2 = _mod15548(arg1);
      _mod15588(value);
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
    _mod15588(arg0);
    const tmp2 = _mod15548(arg1);
    _mod15588(value);
    if (!_mod15571) {
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
