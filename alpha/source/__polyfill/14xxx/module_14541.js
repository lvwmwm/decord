// Module ID: 14541
// Function ID: 14542
// Dependencies: [14542, 14553, 14555, 14558, 14561, 14562]

// Module 14541
import _mod14542 from "module_14542" /* 14542 */;
import _mod14553 from "module_14553" /* 14553 */;
import _mod14555 from "module_14555" /* 14555 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14561 from "module_14561" /* 14561 */;
import _mod14562 from "module_14562" /* 14562 */;

let closure_3 = _mod14542("toPrimitive");

export default function(arg0, arg1) {
  if (_mod14553(arg0)) {
    if (!_mod14555(arg0)) {
      let str = arg1;
      const tmp4 = _mod14558(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14561(tmp4, arg0, str);
        if (_mod14553(tmp5)) {
          if (!_mod14555(tmp5)) {
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
        return _mod14562(arg0, str2);
      }
    }
  }
  return arg0;
};
