// Module ID: 15469
// Function ID: 15470
// Name: defineProperty2
// Dependencies: [15418, 15470, 15467, 15427, 15450]

// Module 15469 (defineProperty2)
import _mod15418 from "module_15418" /* 15418 */;
import _mod15427 from "module_15427" /* 15427 */;
import _mod15450 from "module_15450" /* 15450 */;
import _mod15467 from "module_15467" /* 15467 */;
import _mod15470 from "module_15470" /* 15470 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15418) {
  if (_mod15470) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15467(fn);
      const tmp2 = _mod15427(arg1);
      _mod15467(value);
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
    _mod15467(arg0);
    const tmp2 = _mod15427(arg1);
    _mod15467(value);
    if (!_mod15450) {
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
