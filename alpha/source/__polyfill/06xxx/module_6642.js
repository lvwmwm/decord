// Module ID: 6642
// Function ID: 6643
// Dependencies: [6643, 1293, 6644, 6645]

// Module 6642
import _mod6643 from "module_6643" /* 6643 */;
import _mod6644 from "module_6644" /* 6644 */;
import _mod6645 from "module_6645" /* 6645 */;

let setProto;
let tmp;
const _mod1293 = tmp(1293);
if (_mod6643) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6643(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6644;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6645) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6645(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
