// Module ID: 16678
// Function ID: 16679
// Name: defineProperty2
// Dependencies: [16627, 16679, 16676, 16636, 16659]

// Module 16678 (defineProperty2)
import _mod16627 from "module_16627" /* 16627 */;
import _mod16636 from "module_16636" /* 16636 */;
import _mod16659 from "module_16659" /* 16659 */;
import _mod16676 from "module_16676" /* 16676 */;
import _mod16679 from "module_16679" /* 16679 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16627) {
  if (_mod16679) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16676(fn);
      const tmp2 = _mod16636(arg1);
      _mod16676(value);
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
    _mod16676(arg0);
    const tmp2 = _mod16636(arg1);
    _mod16676(value);
    if (!_mod16659) {
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
