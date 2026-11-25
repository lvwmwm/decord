// Module ID: 15559
// Function ID: 15560
// Dependencies: [15560, 15571, 15573, 15576, 15579, 15580]

// Module 15559
import _mod15560 from "module_15560" /* 15560 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15576 from "module_15576" /* 15576 */;
import _mod15579 from "module_15579" /* 15579 */;
import _mod15580 from "module_15580" /* 15580 */;

let closure_3 = _mod15560("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15571(arg0)) {
    if (!_mod15573(arg0)) {
      let str = arg1;
      const tmp4 = _mod15576(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15579(tmp4, arg0, str);
        if (_mod15571(tmp5)) {
          if (!_mod15573(tmp5)) {
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
        return _mod15580(arg0, str2);
      }
    }
  }
  return arg0;
};
