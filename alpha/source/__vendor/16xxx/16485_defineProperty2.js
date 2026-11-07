// Module ID: 16485
// Function ID: 16486
// Name: defineProperty2
// Dependencies: [16434, 16486, 16483, 16443, 16466]

// Module 16485 (defineProperty2)
import _mod16434 from "module_16434" /* 16434 */;
import _mod16443 from "module_16443" /* 16443 */;
import _mod16466 from "module_16466" /* 16466 */;
import _mod16483 from "module_16483" /* 16483 */;
import _mod16486 from "module_16486" /* 16486 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16434) {
  if (_mod16486) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16483(fn);
      const tmp2 = _mod16443(arg1);
      _mod16483(value);
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
    _mod16483(arg0);
    const tmp2 = _mod16443(arg1);
    _mod16483(value);
    if (!_mod16466) {
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
