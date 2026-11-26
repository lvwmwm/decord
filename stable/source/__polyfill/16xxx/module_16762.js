// Module ID: 16762
// Function ID: 16763
// Dependencies: [16763, 16774, 16776, 16779, 16782, 16783]

// Module 16762
import _mod16763 from "module_16763" /* 16763 */;
import _mod16774 from "module_16774" /* 16774 */;
import _mod16776 from "module_16776" /* 16776 */;
import _mod16779 from "module_16779" /* 16779 */;
import _mod16782 from "module_16782" /* 16782 */;
import _mod16783 from "module_16783" /* 16783 */;

let closure_3 = _mod16763("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16774(arg0)) {
    if (!_mod16776(arg0)) {
      let str = arg1;
      const tmp4 = _mod16779(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16782(tmp4, arg0, str);
        if (_mod16774(tmp5)) {
          if (!_mod16776(tmp5)) {
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
        return _mod16783(arg0, str2);
      }
    }
  }
  return arg0;
};
