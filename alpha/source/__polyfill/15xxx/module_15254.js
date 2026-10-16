// Module ID: 15254
// Function ID: 15255
// Dependencies: [15255, 15266, 15268, 15271, 15274, 15275]

// Module 15254
import _mod15255 from "module_15255" /* 15255 */;
import _mod15266 from "module_15266" /* 15266 */;
import _mod15268 from "module_15268" /* 15268 */;
import _mod15271 from "module_15271" /* 15271 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15275 from "module_15275" /* 15275 */;

let closure_3 = _mod15255("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15266(arg0)) {
    if (!_mod15268(arg0)) {
      let str = arg1;
      const tmp4 = _mod15271(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15274(tmp4, arg0, str);
        if (_mod15266(tmp5)) {
          if (!_mod15268(tmp5)) {
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
        return _mod15275(arg0, str2);
      }
    }
  }
  return arg0;
};
