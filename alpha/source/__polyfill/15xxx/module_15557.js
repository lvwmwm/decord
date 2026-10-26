// Module ID: 15557
// Function ID: 15558
// Dependencies: [15558, 15569, 15571, 15574, 15577, 15578]

// Module 15557
import _mod15558 from "module_15558" /* 15558 */;
import _mod15569 from "module_15569" /* 15569 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15574 from "module_15574" /* 15574 */;
import _mod15577 from "module_15577" /* 15577 */;
import _mod15578 from "module_15578" /* 15578 */;

let closure_3 = _mod15558("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15569(arg0)) {
    if (!_mod15571(arg0)) {
      let str = arg1;
      const tmp4 = _mod15574(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15577(tmp4, arg0, str);
        if (_mod15569(tmp5)) {
          if (!_mod15571(tmp5)) {
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
        return _mod15578(arg0, str2);
      }
    }
  }
  return arg0;
};
