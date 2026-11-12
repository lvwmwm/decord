// Module ID: 16527
// Function ID: 16528
// Name: defineProperty2
// Dependencies: [16476, 16528, 16525, 16485, 16508]

// Module 16527 (defineProperty2)
import _mod16476 from "module_16476" /* 16476 */;
import _mod16485 from "module_16485" /* 16485 */;
import _mod16508 from "module_16508" /* 16508 */;
import _mod16525 from "module_16525" /* 16525 */;
import _mod16528 from "module_16528" /* 16528 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16476) {
  if (_mod16528) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16525(fn);
      const tmp2 = _mod16485(arg1);
      _mod16525(value);
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
    _mod16525(arg0);
    const tmp2 = _mod16485(arg1);
    _mod16525(value);
    if (!_mod16508) {
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
