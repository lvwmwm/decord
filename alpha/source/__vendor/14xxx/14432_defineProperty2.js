// Module ID: 14432
// Function ID: 14433
// Name: defineProperty2
// Dependencies: [14381, 14433, 14430, 14390, 14413]

// Module 14432 (defineProperty2)
import _mod14381 from "module_14381" /* 14381 */;
import _mod14390 from "module_14390" /* 14390 */;
import _mod14413 from "module_14413" /* 14413 */;
import _mod14430 from "module_14430" /* 14430 */;
import _mod14433 from "module_14433" /* 14433 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14381) {
  if (_mod14433) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14430(fn);
      const tmp2 = _mod14390(arg1);
      _mod14430(value);
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
    _mod14430(arg0);
    const tmp2 = _mod14390(arg1);
    _mod14430(value);
    if (!_mod14413) {
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
