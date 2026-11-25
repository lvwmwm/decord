// Module ID: 15600
// Function ID: 15601
// Name: defineProperty2
// Dependencies: [15549, 15601, 15598, 15558, 15581]

// Module 15600 (defineProperty2)
import _mod15549 from "module_15549" /* 15549 */;
import _mod15558 from "module_15558" /* 15558 */;
import _mod15581 from "module_15581" /* 15581 */;
import _mod15598 from "module_15598" /* 15598 */;
import _mod15601 from "module_15601" /* 15601 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15549) {
  if (_mod15601) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15598(fn);
      const tmp2 = _mod15558(arg1);
      _mod15598(value);
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
    _mod15598(arg0);
    const tmp2 = _mod15558(arg1);
    _mod15598(value);
    if (!_mod15581) {
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
