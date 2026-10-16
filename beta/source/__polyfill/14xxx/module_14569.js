// Module ID: 14569
// Function ID: 14570
// Dependencies: [14570, 14581, 14583, 14586, 14589, 14590]

// Module 14569
import _mod14570 from "module_14570" /* 14570 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14583 from "module_14583" /* 14583 */;
import _mod14586 from "module_14586" /* 14586 */;
import _mod14589 from "module_14589" /* 14589 */;
import _mod14590 from "module_14590" /* 14590 */;

let closure_3 = _mod14570("toPrimitive");

export default function(arg0, arg1) {
  if (_mod14581(arg0)) {
    if (!_mod14583(arg0)) {
      let str = arg1;
      const tmp4 = _mod14586(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14589(tmp4, arg0, str);
        if (_mod14581(tmp5)) {
          if (!_mod14583(tmp5)) {
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
        return _mod14590(arg0, str2);
      }
    }
  }
  return arg0;
};
