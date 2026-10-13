// Module ID: 14926
// Function ID: 14927
// Name: defineProperty2
// Dependencies: [14875, 14927, 14924, 14884, 14907]

// Module 14926 (defineProperty2)
import _mod14875 from "module_14875" /* 14875 */;
import _mod14884 from "module_14884" /* 14884 */;
import _mod14907 from "module_14907" /* 14907 */;
import _mod14924 from "module_14924" /* 14924 */;
import _mod14927 from "module_14927" /* 14927 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14875) {
  if (_mod14927) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14924(fn);
      const tmp2 = _mod14884(arg1);
      _mod14924(value);
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
    _mod14924(arg0);
    const tmp2 = _mod14884(arg1);
    _mod14924(value);
    if (!_mod14907) {
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
