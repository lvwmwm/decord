// Module ID: 16454
// Function ID: 16455
// Dependencies: [16455, 16466, 16468, 16471, 16474, 16475]

// Module 16454
import _mod16455 from "module_16455" /* 16455 */;
import _mod16466 from "module_16466" /* 16466 */;
import _mod16468 from "module_16468" /* 16468 */;
import _mod16471 from "module_16471" /* 16471 */;
import _mod16474 from "module_16474" /* 16474 */;
import _mod16475 from "module_16475" /* 16475 */;

let closure_3 = _mod16455("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16466(arg0)) {
    if (!_mod16468(arg0)) {
      let str = arg1;
      const tmp4 = _mod16471(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16474(tmp4, arg0, str);
        if (_mod16466(tmp5)) {
          if (!_mod16468(tmp5)) {
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
        return _mod16475(arg0, str2);
      }
    }
  }
  return arg0;
};
