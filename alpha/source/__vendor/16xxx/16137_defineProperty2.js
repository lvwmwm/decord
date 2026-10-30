// Module ID: 16137
// Function ID: 16138
// Name: defineProperty2
// Dependencies: [16086, 16138, 16135, 16095, 16118]

// Module 16137 (defineProperty2)
import _mod16086 from "module_16086" /* 16086 */;
import _mod16095 from "module_16095" /* 16095 */;
import _mod16118 from "module_16118" /* 16118 */;
import _mod16135 from "module_16135" /* 16135 */;
import _mod16138 from "module_16138" /* 16138 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16086) {
  if (_mod16138) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16135(fn);
      const tmp2 = _mod16095(arg1);
      _mod16135(value);
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
    _mod16135(arg0);
    const tmp2 = _mod16095(arg1);
    _mod16135(value);
    if (!_mod16118) {
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
