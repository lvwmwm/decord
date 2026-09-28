// Module ID: 5141
// Function ID: 5142
// Dependencies: [5142, 1282, 5143, 5144]

// Module 5141
import _mod5142 from "module_5142" /* 5142 */;
import _mod5143 from "module_5143" /* 5143 */;
import _mod5144 from "module_5144" /* 5144 */;

const _mod1282 = tmp(1282);
if (_mod5142) {
  function setProto(arg0, arg1) {
    if (_mod5142(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5143;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5144) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5144(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
