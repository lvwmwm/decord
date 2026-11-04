// Module ID: 16427
// Function ID: 16428
// Name: defineProperty2
// Dependencies: [16376, 16428, 16425, 16385, 16408]

// Module 16427 (defineProperty2)
import _mod16376 from "module_16376" /* 16376 */;
import _mod16385 from "module_16385" /* 16385 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16425 from "module_16425" /* 16425 */;
import _mod16428 from "module_16428" /* 16428 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16376) {
  if (_mod16428) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16425(fn);
      const tmp2 = _mod16385(arg1);
      _mod16425(value);
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
    _mod16425(arg0);
    const tmp2 = _mod16385(arg1);
    _mod16425(value);
    if (!_mod16408) {
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
