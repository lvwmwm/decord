// Module ID: 14610
// Function ID: 14611
// Name: defineProperty2
// Dependencies: [14559, 14611, 14608, 14568, 14591]

// Module 14610 (defineProperty2)
import _mod14559 from "module_14559" /* 14559 */;
import _mod14568 from "module_14568" /* 14568 */;
import _mod14591 from "module_14591" /* 14591 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14611 from "module_14611" /* 14611 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14559) {
  if (_mod14611) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14608(fn);
      const tmp2 = _mod14568(arg1);
      _mod14608(value);
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
    _mod14608(arg0);
    const tmp2 = _mod14568(arg1);
    _mod14608(value);
    if (!_mod14591) {
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
