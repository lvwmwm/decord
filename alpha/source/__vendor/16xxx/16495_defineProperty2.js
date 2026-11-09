// Module ID: 16495
// Function ID: 16496
// Name: defineProperty2
// Dependencies: [16444, 16496, 16493, 16453, 16476]

// Module 16495 (defineProperty2)
import _mod16444 from "module_16444" /* 16444 */;
import _mod16453 from "module_16453" /* 16453 */;
import _mod16476 from "module_16476" /* 16476 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16496 from "module_16496" /* 16496 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16444) {
  if (_mod16496) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16493(fn);
      const tmp2 = _mod16453(arg1);
      _mod16493(value);
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
    _mod16493(arg0);
    const tmp2 = _mod16453(arg1);
    _mod16493(value);
    if (!_mod16476) {
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
