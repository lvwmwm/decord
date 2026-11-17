// Module ID: 16795
// Function ID: 16796
// Dependencies: [16796, 16807, 16809, 16812, 16815, 16816]

// Module 16795
import _mod16796 from "module_16796" /* 16796 */;
import _mod16807 from "module_16807" /* 16807 */;
import _mod16809 from "module_16809" /* 16809 */;
import _mod16812 from "module_16812" /* 16812 */;
import _mod16815 from "module_16815" /* 16815 */;
import _mod16816 from "module_16816" /* 16816 */;

let closure_3 = _mod16796("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16807(arg0)) {
    if (!_mod16809(arg0)) {
      let str = arg1;
      const tmp4 = _mod16812(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16815(tmp4, arg0, str);
        if (_mod16807(tmp5)) {
          if (!_mod16809(tmp5)) {
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
        return _mod16816(arg0, str2);
      }
    }
  }
  return arg0;
};
