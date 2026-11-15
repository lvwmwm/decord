// Module ID: 16484
// Function ID: 16485
// Dependencies: [16485, 16496, 16498, 16501, 16504, 16505]

// Module 16484
import _mod16485 from "module_16485" /* 16485 */;
import _mod16496 from "module_16496" /* 16496 */;
import _mod16498 from "module_16498" /* 16498 */;
import _mod16501 from "module_16501" /* 16501 */;
import _mod16504 from "module_16504" /* 16504 */;
import _mod16505 from "module_16505" /* 16505 */;

let closure_3 = _mod16485("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16496(arg0)) {
    if (!_mod16498(arg0)) {
      let str = arg1;
      const tmp4 = _mod16501(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16504(tmp4, arg0, str);
        if (_mod16496(tmp5)) {
          if (!_mod16498(tmp5)) {
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
        return _mod16505(arg0, str2);
      }
    }
  }
  return arg0;
};
