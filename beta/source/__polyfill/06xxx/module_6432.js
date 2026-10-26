// Module ID: 6432
// Function ID: 6433
// Dependencies: [6433, 1308, 6434, 6435]

// Module 6432
import _mod6433 from "module_6433" /* 6433 */;
import _mod6434 from "module_6434" /* 6434 */;
import _mod6435 from "module_6435" /* 6435 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6433) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6433(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6434;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6435) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6435(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
