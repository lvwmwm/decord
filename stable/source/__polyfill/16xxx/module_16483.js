// Module ID: 16483
// Function ID: 16484
// Dependencies: [16484, 16495, 16497, 16500, 16503, 16504]

// Module 16483
import _mod16484 from "module_16484" /* 16484 */;
import _mod16495 from "module_16495" /* 16495 */;
import _mod16497 from "module_16497" /* 16497 */;
import _mod16500 from "module_16500" /* 16500 */;
import _mod16503 from "module_16503" /* 16503 */;
import _mod16504 from "module_16504" /* 16504 */;

let closure_3 = _mod16484("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16495(arg0)) {
    if (!_mod16497(arg0)) {
      let str = arg1;
      const tmp4 = _mod16500(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16503(tmp4, arg0, str);
        if (_mod16495(tmp5)) {
          if (!_mod16497(tmp5)) {
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
        return _mod16504(arg0, str2);
      }
    }
  }
  return arg0;
};
