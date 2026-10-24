// Module ID: 15594
// Function ID: 15595
// Name: defineProperty2
// Dependencies: [15543, 15595, 15592, 15552, 15575]

// Module 15594 (defineProperty2)
import _mod15543 from "module_15543" /* 15543 */;
import _mod15552 from "module_15552" /* 15552 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15595 from "module_15595" /* 15595 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15543) {
  if (_mod15595) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15592(fn);
      const tmp2 = _mod15552(arg1);
      _mod15592(value);
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
    _mod15592(arg0);
    const tmp2 = _mod15552(arg1);
    _mod15592(value);
    if (!_mod15575) {
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
