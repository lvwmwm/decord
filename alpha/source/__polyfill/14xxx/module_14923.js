// Module ID: 14923
// Function ID: 14924
// Dependencies: [14924, 14935, 14937, 14940, 14943, 14944]

// Module 14923
import _mod14924 from "module_14924" /* 14924 */;
import _mod14935 from "module_14935" /* 14935 */;
import _mod14937 from "module_14937" /* 14937 */;
import _mod14940 from "module_14940" /* 14940 */;
import _mod14943 from "module_14943" /* 14943 */;
import _mod14944 from "module_14944" /* 14944 */;

let closure_3 = _mod14924("toPrimitive");

export default function(arg0, arg1) {
  if (_mod14935(arg0)) {
    if (!_mod14937(arg0)) {
      let str = arg1;
      const tmp4 = _mod14940(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14943(tmp4, arg0, str);
        if (_mod14935(tmp5)) {
          if (!_mod14937(tmp5)) {
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
        return _mod14944(arg0, str2);
      }
    }
  }
  return arg0;
};
