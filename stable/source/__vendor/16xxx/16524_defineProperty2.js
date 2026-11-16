// Module ID: 16524
// Function ID: 16525
// Name: defineProperty2
// Dependencies: [16473, 16525, 16522, 16482, 16505]

// Module 16524 (defineProperty2)
import _mod16473 from "module_16473" /* 16473 */;
import _mod16482 from "module_16482" /* 16482 */;
import _mod16505 from "module_16505" /* 16505 */;
import _mod16522 from "module_16522" /* 16522 */;
import _mod16525 from "module_16525" /* 16525 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16473) {
  if (_mod16525) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16522(fn);
      const tmp2 = _mod16482(arg1);
      _mod16522(value);
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
    _mod16522(arg0);
    const tmp2 = _mod16482(arg1);
    _mod16522(value);
    if (!_mod16505) {
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
