// Module ID: 15549
// Function ID: 15550
// Dependencies: [15550, 15561, 15563, 15566, 15569, 15570]

// Module 15549
import _mod15550 from "module_15550" /* 15550 */;
import _mod15561 from "module_15561" /* 15561 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15570 from "module_15570" /* 15570 */;

let closure_3 = _mod15550("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15561(arg0)) {
    if (!_mod15563(arg0)) {
      let str = arg1;
      const tmp4 = _mod15566(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15569(tmp4, arg0, str);
        if (_mod15561(tmp5)) {
          if (!_mod15563(tmp5)) {
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
        return _mod15570(arg0, str2);
      }
    }
  }
  return arg0;
};
