// Module ID: 16096
// Function ID: 16097
// Dependencies: [16097, 16108, 16110, 16113, 16116, 16117]

// Module 16096
import _mod16097 from "module_16097" /* 16097 */;
import _mod16108 from "module_16108" /* 16108 */;
import _mod16110 from "module_16110" /* 16110 */;
import _mod16113 from "module_16113" /* 16113 */;
import _mod16116 from "module_16116" /* 16116 */;
import _mod16117 from "module_16117" /* 16117 */;

let closure_3 = _mod16097("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16108(arg0)) {
    if (!_mod16110(arg0)) {
      let str = arg1;
      const tmp4 = _mod16113(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16116(tmp4, arg0, str);
        if (_mod16108(tmp5)) {
          if (!_mod16110(tmp5)) {
            const self = this;
            const self2 = this;
            const tmp7 = new TypeError("Can't convert object to primitive value");
            throw tmp7;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return _mod16117(arg0, str2);
      }
    }
  }
  return arg0;
};
