// Module ID: 15295
// Function ID: 15296
// Name: defineProperty2
// Dependencies: [15244, 15296, 15293, 15253, 15276]

// Module 15295 (defineProperty2)
import _mod15244 from "module_15244" /* 15244 */;
import _mod15253 from "module_15253" /* 15253 */;
import _mod15276 from "module_15276" /* 15276 */;
import _mod15293 from "module_15293" /* 15293 */;
import _mod15296 from "module_15296" /* 15296 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15244) {
  if (_mod15296) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15293(fn);
      const tmp2 = _mod15253(arg1);
      _mod15293(value);
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
    _mod15293(arg0);
    const tmp2 = _mod15253(arg1);
    _mod15293(value);
    if (!_mod15276) {
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
