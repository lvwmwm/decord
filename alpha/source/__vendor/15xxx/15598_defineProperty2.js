// Module ID: 15598
// Function ID: 15599
// Name: defineProperty2
// Dependencies: [15547, 15599, 15596, 15556, 15579]

// Module 15598 (defineProperty2)
import _mod15547 from "module_15547" /* 15547 */;
import _mod15556 from "module_15556" /* 15556 */;
import _mod15579 from "module_15579" /* 15579 */;
import _mod15596 from "module_15596" /* 15596 */;
import _mod15599 from "module_15599" /* 15599 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15547) {
  if (_mod15599) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15596(fn);
      const tmp2 = _mod15556(arg1);
      _mod15596(value);
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
    _mod15596(arg0);
    const tmp2 = _mod15556(arg1);
    _mod15596(value);
    if (!_mod15579) {
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
