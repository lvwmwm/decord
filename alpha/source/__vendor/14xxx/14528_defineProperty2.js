// Module ID: 14528
// Function ID: 14529
// Name: defineProperty2
// Dependencies: [14477, 14529, 14526, 14486, 14509]

// Module 14528 (defineProperty2)
import _mod14477 from "module_14477" /* 14477 */;
import _mod14486 from "module_14486" /* 14486 */;
import _mod14509 from "module_14509" /* 14509 */;
import _mod14526 from "module_14526" /* 14526 */;
import _mod14529 from "module_14529" /* 14529 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14477) {
  if (_mod14529) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14526(fn);
      const tmp2 = _mod14486(arg1);
      _mod14526(value);
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
    _mod14526(arg0);
    const tmp2 = _mod14486(arg1);
    _mod14526(value);
    if (!_mod14509) {
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
