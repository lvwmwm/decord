// Module ID: 15861
// Function ID: 15862
// Name: defineProperty2
// Dependencies: [15810, 15862, 15859, 15819, 15842]

// Module 15861 (defineProperty2)
import _mod15810 from "module_15810" /* 15810 */;
import _mod15819 from "module_15819" /* 15819 */;
import _mod15842 from "module_15842" /* 15842 */;
import _mod15859 from "module_15859" /* 15859 */;
import _mod15862 from "module_15862" /* 15862 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15810) {
  if (_mod15862) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15859(fn);
      const tmp2 = _mod15819(arg1);
      _mod15859(value);
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
    _mod15859(arg0);
    const tmp2 = _mod15819(arg1);
    _mod15859(value);
    if (!_mod15842) {
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
