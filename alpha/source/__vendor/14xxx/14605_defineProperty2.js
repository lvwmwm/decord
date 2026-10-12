// Module ID: 14605
// Function ID: 14606
// Name: defineProperty2
// Dependencies: [14554, 14606, 14603, 14563, 14586]

// Module 14605 (defineProperty2)
import _mod14554 from "module_14554" /* 14554 */;
import _mod14563 from "module_14563" /* 14563 */;
import _mod14586 from "module_14586" /* 14586 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14606 from "module_14606" /* 14606 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14554) {
  if (_mod14606) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14603(fn);
      const tmp2 = _mod14563(arg1);
      _mod14603(value);
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
    _mod14603(arg0);
    const tmp2 = _mod14563(arg1);
    _mod14603(value);
    if (!_mod14586) {
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
