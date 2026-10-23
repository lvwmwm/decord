// Module ID: 6430
// Function ID: 6431
// Dependencies: [6431, 1308, 6432, 6433]

// Module 6430
import _mod6431 from "module_6431" /* 6431 */;
import _mod6432 from "module_6432" /* 6432 */;
import _mod6433 from "module_6433" /* 6433 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6431) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6431(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6432;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6433) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6433(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
