// Module ID: 15563
// Function ID: 15564
// Dependencies: [15564, 15575, 15577, 15580, 15583, 15584]

// Module 15563
import _mod15564 from "module_15564" /* 15564 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15577 from "module_15577" /* 15577 */;
import _mod15580 from "module_15580" /* 15580 */;
import _mod15583 from "module_15583" /* 15583 */;
import _mod15584 from "module_15584" /* 15584 */;

let closure_3 = _mod15564("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15575(arg0)) {
    if (!_mod15577(arg0)) {
      let str = arg1;
      const tmp4 = _mod15580(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15583(tmp4, arg0, str);
        if (_mod15575(tmp5)) {
          if (!_mod15577(tmp5)) {
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
        return _mod15584(arg0, str2);
      }
    }
  }
  return arg0;
};
