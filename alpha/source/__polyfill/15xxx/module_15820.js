// Module ID: 15820
// Function ID: 15821
// Dependencies: [15821, 15832, 15834, 15837, 15840, 15841]

// Module 15820
import _mod15821 from "module_15821" /* 15821 */;
import _mod15832 from "module_15832" /* 15832 */;
import _mod15834 from "module_15834" /* 15834 */;
import _mod15837 from "module_15837" /* 15837 */;
import _mod15840 from "module_15840" /* 15840 */;
import _mod15841 from "module_15841" /* 15841 */;

let closure_3 = _mod15821("toPrimitive");

export default function(arg0, arg1) {
  if (_mod15832(arg0)) {
    if (!_mod15834(arg0)) {
      let str = arg1;
      const tmp4 = _mod15837(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15840(tmp4, arg0, str);
        if (_mod15832(tmp5)) {
          if (!_mod15834(tmp5)) {
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
        return _mod15841(arg0, str2);
      }
    }
  }
  return arg0;
};
