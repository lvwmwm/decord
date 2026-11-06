// Module ID: 16136
// Function ID: 16137
// Dependencies: [16137, 16148, 16150, 16153, 16156, 16157]

// Module 16136
import _mod16137 from "module_16137" /* 16137 */;
import _mod16148 from "module_16148" /* 16148 */;
import _mod16150 from "module_16150" /* 16150 */;
import _mod16153 from "module_16153" /* 16153 */;
import _mod16156 from "module_16156" /* 16156 */;
import _mod16157 from "module_16157" /* 16157 */;

let closure_3 = _mod16137("toPrimitive");

export default function(arg0, arg1) {
  if (_mod16148(arg0)) {
    if (!_mod16150(arg0)) {
      let str = arg1;
      const tmp4 = _mod16153(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16156(tmp4, arg0, str);
        if (_mod16148(tmp5)) {
          if (!_mod16150(tmp5)) {
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
        return _mod16157(arg0, str2);
      }
    }
  }
  return arg0;
};
