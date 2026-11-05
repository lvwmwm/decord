// Module ID: 16440
// Function ID: 16441
// Name: defineProperty2
// Dependencies: [16389, 16441, 16438, 16398, 16421]

// Module 16440 (defineProperty2)
import _mod16389 from "module_16389" /* 16389 */;
import _mod16398 from "module_16398" /* 16398 */;
import _mod16421 from "module_16421" /* 16421 */;
import _mod16438 from "module_16438" /* 16438 */;
import _mod16441 from "module_16441" /* 16441 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16389) {
  if (_mod16441) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16438(fn);
      const tmp2 = _mod16398(arg1);
      _mod16438(value);
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
    _mod16438(arg0);
    const tmp2 = _mod16398(arg1);
    _mod16438(value);
    if (!_mod16421) {
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
