// Module ID: 6417
// Function ID: 6418
// Dependencies: [6418, 1308, 6419, 6420]

// Module 6417
import _mod6418 from "module_6418" /* 6418 */;
import _mod6419 from "module_6419" /* 6419 */;
import _mod6420 from "module_6420" /* 6420 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6418) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6418(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6419;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6420) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6420(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
