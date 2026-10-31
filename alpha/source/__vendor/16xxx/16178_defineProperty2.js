// Module ID: 16178
// Function ID: 16179
// Name: defineProperty2
// Dependencies: [16127, 16179, 16176, 16136, 16159]

// Module 16178 (defineProperty2)
import _mod16127 from "module_16127" /* 16127 */;
import _mod16136 from "module_16136" /* 16136 */;
import _mod16159 from "module_16159" /* 16159 */;
import _mod16176 from "module_16176" /* 16176 */;
import _mod16179 from "module_16179" /* 16179 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16127) {
  if (_mod16179) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16176(fn);
      const tmp2 = _mod16136(arg1);
      _mod16176(value);
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
    _mod16176(arg0);
    const tmp2 = _mod16136(arg1);
    _mod16176(value);
    if (!_mod16159) {
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
