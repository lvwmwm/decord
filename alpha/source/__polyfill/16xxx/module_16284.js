// Module ID: 16284
// Function ID: 16285
// Dependencies: [16285, 16296, 16298, 16301, 16304, 16305]

// Module 16284
import _mod16285 from "module_16285" /* 16285 */;
import _mod16296 from "module_16296" /* 16296 */;
import _mod16298 from "module_16298" /* 16298 */;
import _mod16301 from "module_16301" /* 16301 */;
import _mod16304 from "module_16304" /* 16304 */;
import _mod16305 from "module_16305" /* 16305 */;

let closure_3 = _mod16285("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16296(arg0)) {
    if (!_mod16298(arg0)) {
      let str = arg1;
      const tmp4 = _mod16301(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16304(tmp4, arg0, str);
        if (_mod16296(tmp5)) {
          if (!_mod16298(tmp5)) {
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
        return _mod16305(arg0, str2);
      }
    }
  }
  return arg0;
};
