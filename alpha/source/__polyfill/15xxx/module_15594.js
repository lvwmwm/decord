// Module ID: 15594
// Function ID: 15595
// Dependencies: [15595, 15606, 15608, 15611, 15614, 15615]

// Module 15594
import _mod15595 from "module_15595" /* 15595 */;
import _mod15606 from "module_15606" /* 15606 */;
import _mod15608 from "module_15608" /* 15608 */;
import _mod15611 from "module_15611" /* 15611 */;
import _mod15614 from "module_15614" /* 15614 */;
import _mod15615 from "module_15615" /* 15615 */;

let closure_3 = _mod15595("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15606(arg0)) {
    if (!_mod15608(arg0)) {
      let str = arg1;
      const tmp4 = _mod15611(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15614(tmp4, arg0, str);
        if (_mod15606(tmp5)) {
          if (!_mod15608(tmp5)) {
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
        return _mod15615(arg0, str2);
      }
    }
  }
  return arg0;
};
