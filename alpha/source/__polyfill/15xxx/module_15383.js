// Module ID: 15383
// Function ID: 15384
// Dependencies: [15384, 15395, 15397, 15400, 15403, 15404]

// Module 15383
import _mod15384 from "module_15384" /* 15384 */;
import _mod15395 from "module_15395" /* 15395 */;
import _mod15397 from "module_15397" /* 15397 */;
import _mod15400 from "module_15400" /* 15400 */;
import _mod15403 from "module_15403" /* 15403 */;
import _mod15404 from "module_15404" /* 15404 */;

let closure_3 = _mod15384("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15395(arg0)) {
    if (!_mod15397(arg0)) {
      let str = arg1;
      const tmp4 = _mod15400(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15403(tmp4, arg0, str);
        if (_mod15395(tmp5)) {
          if (!_mod15397(tmp5)) {
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
        return _mod15404(arg0, str2);
      }
    }
  }
  return arg0;
};
