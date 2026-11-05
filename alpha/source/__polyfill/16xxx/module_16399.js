// Module ID: 16399
// Function ID: 16400
// Dependencies: [16400, 16411, 16413, 16416, 16419, 16420]

// Module 16399
import _mod16400 from "module_16400" /* 16400 */;
import _mod16411 from "module_16411" /* 16411 */;
import _mod16413 from "module_16413" /* 16413 */;
import _mod16416 from "module_16416" /* 16416 */;
import _mod16419 from "module_16419" /* 16419 */;
import _mod16420 from "module_16420" /* 16420 */;

let closure_3 = _mod16400("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16411(arg0)) {
    if (!_mod16413(arg0)) {
      let str = arg1;
      const tmp4 = _mod16416(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16419(tmp4, arg0, str);
        if (_mod16411(tmp5)) {
          if (!_mod16413(tmp5)) {
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
        return _mod16420(arg0, str2);
      }
    }
  }
  return arg0;
};
