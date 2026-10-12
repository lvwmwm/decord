// Module ID: 14564
// Function ID: 14565
// Dependencies: [14565, 14576, 14578, 14581, 14584, 14585]

// Module 14564
import _mod14565 from "module_14565" /* 14565 */;
import _mod14576 from "module_14576" /* 14576 */;
import _mod14578 from "module_14578" /* 14578 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14585 from "module_14585" /* 14585 */;

let closure_3 = _mod14565("toPrimitive");

export default function(arg0, arg1) {
  if (_mod14576(arg0)) {
    if (!_mod14578(arg0)) {
      let str = arg1;
      const tmp4 = _mod14581(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14584(tmp4, arg0, str);
        if (_mod14576(tmp5)) {
          if (!_mod14578(tmp5)) {
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
        return _mod14585(arg0, str2);
      }
    }
  }
  return arg0;
};
