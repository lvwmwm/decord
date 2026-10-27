// Module ID: 15378
// Function ID: 15379
// Name: defineProperty2
// Dependencies: [15327, 15379, 15376, 15336, 15359]

// Module 15378 (defineProperty2)
import _mod15327 from "module_15327" /* 15327 */;
import _mod15336 from "module_15336" /* 15336 */;
import _mod15359 from "module_15359" /* 15359 */;
import _mod15376 from "module_15376" /* 15376 */;
import _mod15379 from "module_15379" /* 15379 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15327) {
  if (_mod15379) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15376(fn);
      const tmp2 = _mod15336(arg1);
      _mod15376(value);
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
    _mod15376(arg0);
    const tmp2 = _mod15336(arg1);
    _mod15376(value);
    if (!_mod15359) {
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
