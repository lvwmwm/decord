// Module ID: 15786
// Function ID: 15787
// Name: defineProperty2
// Dependencies: [15735, 15787, 15784, 15744, 15767]

// Module 15786 (defineProperty2)
import _mod15735 from "module_15735" /* 15735 */;
import _mod15744 from "module_15744" /* 15744 */;
import _mod15767 from "module_15767" /* 15767 */;
import _mod15784 from "module_15784" /* 15784 */;
import _mod15787 from "module_15787" /* 15787 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15735) {
  if (_mod15787) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15784(fn);
      const tmp2 = _mod15744(arg1);
      _mod15784(value);
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
    _mod15784(arg0);
    const tmp2 = _mod15744(arg1);
    _mod15784(value);
    if (!_mod15767) {
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
