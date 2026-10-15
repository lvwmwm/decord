// Module ID: 5909
// Function ID: 5910
// Dependencies: [5910, 1306, 5911, 5912]

// Module 5909
import _mod5910 from "module_5910" /* 5910 */;
import _mod5911 from "module_5911" /* 5911 */;
import _mod5912 from "module_5912" /* 5912 */;

let setProto;
let tmp;
const _mod1306 = tmp(1306);
if (_mod5910) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5910(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5911;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5912) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5912(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
