// Module ID: 5698
// Function ID: 5699
// Dependencies: [5699, 1306, 5700, 5701]

// Module 5698
import _mod5699 from "module_5699" /* 5699 */;
import _mod5700 from "module_5700" /* 5700 */;
import _mod5701 from "module_5701" /* 5701 */;

let setProto;
let tmp;
const _mod1306 = tmp(1306);
if (_mod5699) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5699(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5700;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5701) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5701(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
