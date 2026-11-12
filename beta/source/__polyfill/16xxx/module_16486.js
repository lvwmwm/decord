// Module ID: 16486
// Function ID: 16487
// Dependencies: [16487, 16498, 16500, 16503, 16506, 16507]

// Module 16486
import _mod16487 from "module_16487" /* 16487 */;
import _mod16498 from "module_16498" /* 16498 */;
import _mod16500 from "module_16500" /* 16500 */;
import _mod16503 from "module_16503" /* 16503 */;
import _mod16506 from "module_16506" /* 16506 */;
import _mod16507 from "module_16507" /* 16507 */;

let closure_3 = _mod16487("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16498(arg0)) {
    if (!_mod16500(arg0)) {
      let str = arg1;
      const tmp4 = _mod16503(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16506(tmp4, arg0, str);
        if (_mod16498(tmp5)) {
          if (!_mod16500(tmp5)) {
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
        return _mod16507(arg0, str2);
      }
    }
  }
  return arg0;
};
