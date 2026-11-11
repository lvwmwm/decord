// Module ID: 16683
// Function ID: 16684
// Name: defineProperty2
// Dependencies: [16632, 16684, 16681, 16641, 16664]

// Module 16683 (defineProperty2)
import _mod16632 from "module_16632" /* 16632 */;
import _mod16641 from "module_16641" /* 16641 */;
import _mod16664 from "module_16664" /* 16664 */;
import _mod16681 from "module_16681" /* 16681 */;
import _mod16684 from "module_16684" /* 16684 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16632) {
  if (_mod16684) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16681(fn);
      const tmp2 = _mod16641(arg1);
      _mod16681(value);
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
    _mod16681(arg0);
    const tmp2 = _mod16641(arg1);
    _mod16681(value);
    if (!_mod16664) {
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
