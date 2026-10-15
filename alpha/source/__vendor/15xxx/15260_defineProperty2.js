// Module ID: 15260
// Function ID: 15261
// Name: defineProperty2
// Dependencies: [15209, 15261, 15258, 15218, 15241]

// Module 15260 (defineProperty2)
import _mod15209 from "module_15209" /* 15209 */;
import _mod15218 from "module_15218" /* 15218 */;
import _mod15241 from "module_15241" /* 15241 */;
import _mod15258 from "module_15258" /* 15258 */;
import _mod15261 from "module_15261" /* 15261 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15209) {
  if (_mod15261) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15258(fn);
      const tmp2 = _mod15218(arg1);
      _mod15258(value);
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
    _mod15258(arg0);
    const tmp2 = _mod15218(arg1);
    _mod15258(value);
    if (!_mod15241) {
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
