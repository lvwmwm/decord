// Module ID: 15519
// Function ID: 15520
// Name: defineProperty2
// Dependencies: [15468, 15520, 15517, 15477, 15500]

// Module 15519 (defineProperty2)
import _mod15468 from "module_15468" /* 15468 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15500 from "module_15500" /* 15500 */;
import _mod15517 from "module_15517" /* 15517 */;
import _mod15520 from "module_15520" /* 15520 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15468) {
  if (_mod15520) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15517(fn);
      const tmp2 = _mod15477(arg1);
      _mod15517(value);
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
    _mod15517(arg0);
    const tmp2 = _mod15477(arg1);
    _mod15517(value);
    if (!_mod15500) {
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
