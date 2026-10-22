// Module ID: 15540
// Function ID: 15541
// Name: defineProperty2
// Dependencies: [15489, 15541, 15538, 15498, 15521]

// Module 15540 (defineProperty2)
import _mod15489 from "module_15489" /* 15489 */;
import _mod15498 from "module_15498" /* 15498 */;
import _mod15521 from "module_15521" /* 15521 */;
import _mod15538 from "module_15538" /* 15538 */;
import _mod15541 from "module_15541" /* 15541 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15489) {
  if (_mod15541) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15538(fn);
      const tmp2 = _mod15498(arg1);
      _mod15538(value);
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
    _mod15538(arg0);
    const tmp2 = _mod15498(arg1);
    _mod15538(value);
    if (!_mod15521) {
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
