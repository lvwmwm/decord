// Module ID: 16437
// Function ID: 16438
// Name: defineProperty2
// Dependencies: [16386, 16438, 16435, 16395, 16418]

// Module 16437 (defineProperty2)
import _mod16386 from "module_16386" /* 16386 */;
import _mod16395 from "module_16395" /* 16395 */;
import _mod16418 from "module_16418" /* 16418 */;
import _mod16435 from "module_16435" /* 16435 */;
import _mod16438 from "module_16438" /* 16438 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16386) {
  if (_mod16438) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16435(fn);
      const tmp2 = _mod16395(arg1);
      _mod16435(value);
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
    _mod16435(arg0);
    const tmp2 = _mod16395(arg1);
    _mod16435(value);
    if (!_mod16418) {
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
