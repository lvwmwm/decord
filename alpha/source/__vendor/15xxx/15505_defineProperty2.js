// Module ID: 15505
// Function ID: 15506
// Name: defineProperty2
// Dependencies: [15454, 15506, 15503, 15463, 15486]

// Module 15505 (defineProperty2)
import _mod15454 from "module_15454" /* 15454 */;
import _mod15463 from "module_15463" /* 15463 */;
import _mod15486 from "module_15486" /* 15486 */;
import _mod15503 from "module_15503" /* 15503 */;
import _mod15506 from "module_15506" /* 15506 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15454) {
  if (_mod15506) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15503(fn);
      const tmp2 = _mod15463(arg1);
      _mod15503(value);
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
    _mod15503(arg0);
    const tmp2 = _mod15463(arg1);
    _mod15503(value);
    if (!_mod15486) {
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
