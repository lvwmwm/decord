// Module ID: 14582
// Function ID: 14583
// Name: defineProperty2
// Dependencies: [14531, 14583, 14580, 14540, 14563]

// Module 14582 (defineProperty2)
import _mod14531 from "module_14531" /* 14531 */;
import _mod14540 from "module_14540" /* 14540 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14580 from "module_14580" /* 14580 */;
import _mod14583 from "module_14583" /* 14583 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14531) {
  if (_mod14583) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14580(fn);
      const tmp2 = _mod14540(arg1);
      _mod14580(value);
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
    _mod14580(arg0);
    const tmp2 = _mod14540(arg1);
    _mod14580(value);
    if (!_mod14563) {
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
