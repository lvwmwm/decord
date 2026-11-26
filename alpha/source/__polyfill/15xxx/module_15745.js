// Module ID: 15745
// Function ID: 15746
// Dependencies: [15746, 15757, 15759, 15762, 15765, 15766]

// Module 15745
import _mod15746 from "module_15746" /* 15746 */;
import _mod15757 from "module_15757" /* 15757 */;
import _mod15759 from "module_15759" /* 15759 */;
import _mod15762 from "module_15762" /* 15762 */;
import _mod15765 from "module_15765" /* 15765 */;
import _mod15766 from "module_15766" /* 15766 */;

let closure_3 = _mod15746("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15757(arg0)) {
    if (!_mod15759(arg0)) {
      let str = arg1;
      const tmp4 = _mod15762(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15765(tmp4, arg0, str);
        if (_mod15757(tmp5)) {
          if (!_mod15759(tmp5)) {
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
        return _mod15766(arg0, str2);
      }
    }
  }
  return arg0;
};
