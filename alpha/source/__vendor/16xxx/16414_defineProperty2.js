// Module ID: 16414
// Function ID: 16415
// Name: defineProperty2
// Dependencies: [16363, 16415, 16412, 16372, 16395]

// Module 16414 (defineProperty2)
import _mod16363 from "module_16363" /* 16363 */;
import _mod16372 from "module_16372" /* 16372 */;
import _mod16395 from "module_16395" /* 16395 */;
import _mod16412 from "module_16412" /* 16412 */;
import _mod16415 from "module_16415" /* 16415 */;

let defineProperty2;
const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod16363) {
  if (_mod16415) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod16412(fn);
      const tmp2 = _mod16372(arg1);
      _mod16412(value);
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
    _mod16412(arg0);
    const tmp2 = _mod16372(arg1);
    _mod16412(value);
    if (!_mod16395) {
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
