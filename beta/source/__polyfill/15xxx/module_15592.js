// Module ID: 15592
// Function ID: 15593
// Dependencies: [15593, 15604, 15606, 15609, 15612, 15613]

// Module 15592
import _mod15593 from "module_15593" /* 15593 */;
import _mod15604 from "module_15604" /* 15604 */;
import _mod15606 from "module_15606" /* 15606 */;
import _mod15609 from "module_15609" /* 15609 */;
import _mod15612 from "module_15612" /* 15612 */;
import _mod15613 from "module_15613" /* 15613 */;

let closure_3 = _mod15593("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15604(arg0)) {
    if (!_mod15606(arg0)) {
      let str = arg1;
      const tmp4 = _mod15609(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15612(tmp4, arg0, str);
        if (_mod15604(tmp5)) {
          if (!_mod15606(tmp5)) {
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
        return _mod15613(arg0, str2);
      }
    }
  }
  return arg0;
};
