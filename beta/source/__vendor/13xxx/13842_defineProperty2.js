// Module ID: 13842
// Function ID: 13843
// Name: defineProperty2
// Dependencies: [13791, 13843, 13840, 13800, 13823]

// Module 13842 (defineProperty2)
import _mod13791 from "module_13791" /* 13791 */;
import _mod13800 from "module_13800" /* 13800 */;
import _mod13823 from "module_13823" /* 13823 */;
import _mod13840 from "module_13840" /* 13840 */;
import _mod13843 from "module_13843" /* 13843 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod13791) {
  if (_mod13843) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod13840(fn);
      const tmp2 = _mod13800(arg1);
      _mod13840(value);
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
    _mod13840(arg0);
    const tmp2 = _mod13800(arg1);
    _mod13840(value);
    if (!_mod13823) {
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
