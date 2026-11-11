// Module ID: 16642
// Function ID: 16643
// Dependencies: [16643, 16654, 16656, 16659, 16662, 16663]

// Module 16642
import _mod16643 from "module_16643" /* 16643 */;
import _mod16654 from "module_16654" /* 16654 */;
import _mod16656 from "module_16656" /* 16656 */;
import _mod16659 from "module_16659" /* 16659 */;
import _mod16662 from "module_16662" /* 16662 */;
import _mod16663 from "module_16663" /* 16663 */;

let closure_3 = _mod16643("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16654(arg0)) {
    if (!_mod16656(arg0)) {
      let str = arg1;
      const tmp4 = _mod16659(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16662(tmp4, arg0, str);
        if (_mod16654(tmp5)) {
          if (!_mod16656(tmp5)) {
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
        return _mod16663(arg0, str2);
      }
    }
  }
  return arg0;
};
