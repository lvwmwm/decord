// Module ID: 15428
// Function ID: 15429
// Dependencies: [15429, 15440, 15442, 15445, 15448, 15449]

// Module 15428
import _mod15429 from "module_15429" /* 15429 */;
import _mod15440 from "module_15440" /* 15440 */;
import _mod15442 from "module_15442" /* 15442 */;
import _mod15445 from "module_15445" /* 15445 */;
import _mod15448 from "module_15448" /* 15448 */;
import _mod15449 from "module_15449" /* 15449 */;

let closure_3 = _mod15429("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15440(arg0)) {
    if (!_mod15442(arg0)) {
      let str = arg1;
      const tmp4 = _mod15445(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15448(tmp4, arg0, str);
        if (_mod15440(tmp5)) {
          if (!_mod15442(tmp5)) {
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
        return _mod15449(arg0, str2);
      }
    }
  }
  return arg0;
};
