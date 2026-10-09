// Module ID: 5690
// Function ID: 5691
// Dependencies: [5691, 1306, 5692, 5693]

// Module 5690
import _mod5691 from "module_5691" /* 5691 */;
import _mod5692 from "module_5692" /* 5692 */;
import _mod5693 from "module_5693" /* 5693 */;

let setProto;
let tmp;
const _mod1306 = tmp(1306);
if (_mod5691) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5691(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1306("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5692;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5693) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5693(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
