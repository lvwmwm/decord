// Module ID: 14662
// Function ID: 14663
// Dependencies: [14611, 14663, 14660, 14620, 14643]

// Module 14662
import _mod14611 from "module_14611" /* 14611 */;
import text from "text" /* 14620 */;
import _mod14643 from "module_14643" /* 14643 */;
import _mod14660 from "module_14660" /* 14660 */;
import _mod14663 from "module_14663" /* 14663 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14611) {
  if (_mod14663) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14660(fn);
      const tmp2 = text(arg1);
      _mod14660(value);
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
    _mod14660(arg0);
    const tmp2 = text(arg1);
    _mod14660(value);
    if (!_mod14643) {
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
