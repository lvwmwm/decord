// Module ID: 6418
// Function ID: 6419
// Dependencies: [6419, 1308, 6420, 6421]

// Module 6418
import _mod6419 from "module_6419" /* 6419 */;
import _mod6420 from "module_6420" /* 6420 */;
import _mod6421 from "module_6421" /* 6421 */;

let setProto;
let tmp;
const _mod1308 = tmp(1308);
if (_mod6419) {
  setProto = function setProto(arg0, arg1) {
    if (_mod6419(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod6420;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6421) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6421(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
