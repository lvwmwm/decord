// Module ID: 13801
// Function ID: 13802
// Dependencies: [13802, 13813, 13815, 13818, 13821, 13822]

// Module 13801
import _mod13802 from "module_13802" /* 13802 */;
import _mod13813 from "module_13813" /* 13813 */;
import _mod13815 from "module_13815" /* 13815 */;
import _mod13818 from "module_13818" /* 13818 */;
import _mod13821 from "module_13821" /* 13821 */;
import _mod13822 from "module_13822" /* 13822 */;

let closure_3 = _mod13802("toPrimitive");

export default function(arg0, arg1) {
  if (_mod13813(arg0)) {
    if (!_mod13815(arg0)) {
      let str = arg1;
      const tmp4 = _mod13818(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13821(tmp4, arg0, str);
        if (_mod13813(tmp5)) {
          if (!_mod13815(tmp5)) {
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
        return _mod13822(arg0, str2);
      }
    }
  }
  return arg0;
};
