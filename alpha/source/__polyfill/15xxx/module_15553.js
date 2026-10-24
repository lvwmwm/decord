// Module ID: 15553
// Function ID: 15554
// Dependencies: [15554, 15565, 15567, 15570, 15573, 15574]

// Module 15553
import _mod15554 from "module_15554" /* 15554 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15574 from "module_15574" /* 15574 */;

let closure_3 = _mod15554("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15565(arg0)) {
    if (!_mod15567(arg0)) {
      let str = arg1;
      const tmp4 = _mod15570(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15573(tmp4, arg0, str);
        if (_mod15565(tmp5)) {
          if (!_mod15567(tmp5)) {
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
        return _mod15574(arg0, str2);
      }
    }
  }
  return arg0;
};
