// Module ID: 16182
// Function ID: 16183
// Name: defineProperty2
// Dependencies: [16131, 16183, 16180, 16140, 16163]

// Module 16182 (defineProperty2)
import _mod16131 from "module_16131" /* 16131 */;
import _mod16140 from "module_16140" /* 16140 */;
import _mod16163 from "module_16163" /* 16163 */;
import _mod16180 from "module_16180" /* 16180 */;
import _mod16183 from "module_16183" /* 16183 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16131) {
  if (_mod16183) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16180(fn);
      const tmp2 = _mod16140(arg1);
      _mod16180(value);
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
    _mod16180(arg0);
    const tmp2 = _mod16140(arg1);
    _mod16180(value);
    if (!_mod16163) {
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
