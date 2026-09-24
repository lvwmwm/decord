// Module ID: 14672
// Function ID: 14673
// Dependencies: [14621, 14673, 14670, 14630, 14653]

// Module 14672
import _mod14621 from "module_14621" /* 14621 */;
import text from "text" /* 14630 */;
import _mod14653 from "module_14653" /* 14653 */;
import _mod14670 from "module_14670" /* 14670 */;
import _mod14673 from "module_14673" /* 14673 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14621) {
  if (_mod14673) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14670(fn);
      const tmp2 = text(arg1);
      _mod14670(value);
      let tmp4 = value;
      if (typeof fn === "function") {
        tmp4 = value;
        if ("prototype" === tmp2) {
          tmp4 = value;
          if ("value" in value) {
            tmp4 = value;
            if (writable in value) {
              tmp4 = value;
              if (!value[tmp5]) {
                const tmp7 = getOwnPropertyDescriptor(fn, tmp2);
                let tmp8 = tmp7;
                if (tmp7) {
                  tmp8 = tmp7[tmp5];
                }
                tmp4 = value;
                if (tmp8) {
                  fn[tmp2] = value.value;
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
  let defineProperty2 = defineProperty;
} else {
  defineProperty2 = function defineProperty(arg0, arg1, value) {
    _mod14670(arg0);
    const tmp2 = text(arg1);
    _mod14670(value);
    if (!_mod14653) {
      if (!("get" in value)) {
        if (!("set" in value)) {
          if ("value" in value) {
            arg0[tmp2] = value.value;
          }
          return arg0;
        }
      }
      const tmp8 = new TypeError("Accessors not supported");
      throw tmp8;
    } else {
      try {
        return defineProperty(arg0, tmp2, value);
      } catch (err) {
      }
    }
  };
}

export const f = defineProperty2;
