// Module ID: 6504
// Function ID: 6505
// Dependencies: [6505, 1293, 6506, 6507]

// Module 6504
import _mod6505 from "module_6505" /* 6505 */;
import _mod6506 from "module_6506" /* 6506 */;
import _mod6507 from "module_6507" /* 6507 */;

let setProto;
let tmp;
const _mod1293 = tmp(1293);
if (_mod6505) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6505(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6506;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6507) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6507(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
