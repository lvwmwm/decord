// Module ID: 16097
// Function ID: 16098
// Name: defineProperty2
// Dependencies: [16046, 16098, 16095, 16055, 16078]

// Module 16097 (defineProperty2)
import _mod16046 from "module_16046" /* 16046 */;
import _mod16055 from "module_16055" /* 16055 */;
import _mod16078 from "module_16078" /* 16078 */;
import _mod16095 from "module_16095" /* 16095 */;
import _mod16098 from "module_16098" /* 16098 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16046) {
  if (_mod16098) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16095(fn);
      const tmp2 = _mod16055(arg1);
      _mod16095(value);
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
    _mod16095(arg0);
    const tmp2 = _mod16055(arg1);
    _mod16095(value);
    if (!_mod16078) {
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
