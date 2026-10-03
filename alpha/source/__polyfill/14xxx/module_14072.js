// Module ID: 14072
// Function ID: 14073
// Dependencies: [14073, 14084, 14086, 14089, 14092, 14093]

// Module 14072
import _mod14073 from "module_14073" /* 14073 */;
import _mod14084 from "module_14084" /* 14084 */;
import _mod14086 from "module_14086" /* 14086 */;
import _mod14089 from "module_14089" /* 14089 */;
import _mod14092 from "module_14092" /* 14092 */;
import _mod14093 from "module_14093" /* 14093 */;

let closure_3 = _mod14073("toPrimitive");

export default function(arg0, arg1) {
  if (_mod14084(arg0)) {
    if (!_mod14086(arg0)) {
      let str = arg1;
      const tmp4 = _mod14089(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14092(tmp4, arg0, str);
        if (_mod14084(tmp5)) {
          if (!_mod14086(tmp5)) {
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
        return _mod14093(arg0, str2);
      }
    }
  }
  return arg0;
};
