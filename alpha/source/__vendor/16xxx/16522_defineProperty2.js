// Module ID: 16522
// Function ID: 16523
// Name: defineProperty2
// Dependencies: [16471, 16523, 16520, 16480, 16503]

// Module 16522 (defineProperty2)
import _mod16471 from "module_16471" /* 16471 */;
import _mod16480 from "module_16480" /* 16480 */;
import _mod16503 from "module_16503" /* 16503 */;
import _mod16520 from "module_16520" /* 16520 */;
import _mod16523 from "module_16523" /* 16523 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16471) {
  if (_mod16523) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16520(fn);
      const tmp2 = _mod16480(arg1);
      _mod16520(value);
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
    _mod16520(arg0);
    const tmp2 = _mod16480(arg1);
    _mod16520(value);
    if (!_mod16503) {
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
