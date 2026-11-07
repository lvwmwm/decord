// Module ID: 16444
// Function ID: 16445
// Dependencies: [16445, 16456, 16458, 16461, 16464, 16465]

// Module 16444
import _mod16445 from "module_16445" /* 16445 */;
import _mod16456 from "module_16456" /* 16456 */;
import _mod16458 from "module_16458" /* 16458 */;
import _mod16461 from "module_16461" /* 16461 */;
import _mod16464 from "module_16464" /* 16464 */;
import _mod16465 from "module_16465" /* 16465 */;

let closure_3 = _mod16445("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16456(arg0)) {
    if (!_mod16458(arg0)) {
      let str = arg1;
      const tmp4 = _mod16461(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16464(tmp4, arg0, str);
        if (_mod16456(tmp5)) {
          if (!_mod16458(tmp5)) {
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
        return _mod16465(arg0, str2);
      }
    }
  }
  return arg0;
};
