// Module ID: 15574
// Function ID: 15575
// Name: defineProperty2
// Dependencies: [15523, 15575, 15572, 15532, 15555]

// Module 15574 (defineProperty2)
import _mod15523 from "module_15523" /* 15523 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15555 from "module_15555" /* 15555 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15575 from "module_15575" /* 15575 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15523) {
  if (_mod15575) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15572(fn);
      const tmp2 = _mod15532(arg1);
      _mod15572(value);
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
    _mod15572(arg0);
    const tmp2 = _mod15532(arg1);
    _mod15572(value);
    if (!_mod15555) {
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
