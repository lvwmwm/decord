// Module ID: 13844
// Function ID: 13845
// Name: defineProperty2
// Dependencies: [13793, 13845, 13842, 13802, 13825]

// Module 13844 (defineProperty2)
import _mod13793 from "module_13793" /* 13793 */;
import _mod13802 from "module_13802" /* 13802 */;
import _mod13825 from "module_13825" /* 13825 */;
import _mod13842 from "module_13842" /* 13842 */;
import _mod13845 from "module_13845" /* 13845 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod13793) {
  if (_mod13845) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod13842(fn);
      const tmp2 = _mod13802(arg1);
      _mod13842(value);
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
    _mod13842(arg0);
    const tmp2 = _mod13802(arg1);
    _mod13842(value);
    if (!_mod13825) {
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
