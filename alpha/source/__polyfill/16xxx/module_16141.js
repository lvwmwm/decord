// Module ID: 16141
// Function ID: 16142
// Dependencies: [16142, 16153, 16155, 16158, 16161, 16162]

// Module 16141
import _mod16142 from "module_16142" /* 16142 */;
import _mod16153 from "module_16153" /* 16153 */;
import _mod16155 from "module_16155" /* 16155 */;
import _mod16158 from "module_16158" /* 16158 */;
import _mod16161 from "module_16161" /* 16161 */;
import _mod16162 from "module_16162" /* 16162 */;

let closure_3 = _mod16142("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16153(arg0)) {
    if (!_mod16155(arg0)) {
      let str = arg1;
      const tmp4 = _mod16158(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16161(tmp4, arg0, str);
        if (_mod16153(tmp5)) {
          if (!_mod16155(tmp5)) {
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
        return _mod16162(arg0, str2);
      }
    }
  }
  return arg0;
};
