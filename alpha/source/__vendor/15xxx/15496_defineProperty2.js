// Module ID: 15496
// Function ID: 15497
// Name: defineProperty2
// Dependencies: [15445, 15497, 15494, 15454, 15477]

// Module 15496 (defineProperty2)
import _mod15445 from "module_15445" /* 15445 */;
import _mod15454 from "module_15454" /* 15454 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15494 from "module_15494" /* 15494 */;
import _mod15497 from "module_15497" /* 15497 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15445) {
  if (_mod15497) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15494(fn);
      const tmp2 = _mod15454(arg1);
      _mod15494(value);
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
    _mod15494(arg0);
    const tmp2 = _mod15454(arg1);
    _mod15494(value);
    if (!_mod15477) {
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
