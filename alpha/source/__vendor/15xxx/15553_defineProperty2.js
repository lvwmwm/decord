// Module ID: 15553
// Function ID: 15554
// Name: defineProperty2
// Dependencies: [15502, 15554, 15551, 15511, 15534]

// Module 15553 (defineProperty2)
import _mod15502 from "module_15502" /* 15502 */;
import _mod15511 from "module_15511" /* 15511 */;
import _mod15534 from "module_15534" /* 15534 */;
import _mod15551 from "module_15551" /* 15551 */;
import _mod15554 from "module_15554" /* 15554 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod15502) {
  if (_mod15554) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod15551(fn);
      const tmp2 = _mod15511(arg1);
      _mod15551(value);
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
    _mod15551(arg0);
    const tmp2 = _mod15511(arg1);
    _mod15551(value);
    if (!_mod15534) {
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
