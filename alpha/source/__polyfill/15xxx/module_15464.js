// Module ID: 15464
// Function ID: 15465
// Dependencies: [15465, 15476, 15478, 15481, 15484, 15485]

// Module 15464
import _mod15465 from "module_15465" /* 15465 */;
import _mod15476 from "module_15476" /* 15476 */;
import _mod15478 from "module_15478" /* 15478 */;
import _mod15481 from "module_15481" /* 15481 */;
import _mod15484 from "module_15484" /* 15484 */;
import _mod15485 from "module_15485" /* 15485 */;

let closure_3 = _mod15465("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15476(arg0)) {
    if (!_mod15478(arg0)) {
      let str = arg1;
      const tmp4 = _mod15481(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15484(tmp4, arg0, str);
        if (_mod15476(tmp5)) {
          if (!_mod15478(tmp5)) {
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
        return _mod15485(arg0, str2);
      }
    }
  }
  return arg0;
};
