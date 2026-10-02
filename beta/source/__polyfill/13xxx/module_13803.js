// Module ID: 13803
// Function ID: 13804
// Dependencies: [13804, 13815, 13817, 13820, 13823, 13824]

// Module 13803
import _mod13804 from "module_13804" /* 13804 */;
import _mod13815 from "module_13815" /* 13815 */;
import _mod13817 from "module_13817" /* 13817 */;
import _mod13820 from "module_13820" /* 13820 */;
import _mod13823 from "module_13823" /* 13823 */;
import _mod13824 from "module_13824" /* 13824 */;

let closure_3 = _mod13804("toPrimitive");

export default function(arg0, arg1) {
  if (_mod13815(arg0)) {
    if (!_mod13817(arg0)) {
      let str = arg1;
      const tmp4 = _mod13820(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13823(tmp4, arg0, str);
        if (_mod13815(tmp5)) {
          if (!_mod13817(tmp5)) {
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
        return _mod13824(arg0, str2);
      }
    }
  }
  return arg0;
};
