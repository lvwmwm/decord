// Module ID: 5080
// Function ID: 5081
// Dependencies: [5081, 1286, 5082, 5083]

// Module 5080
import _mod5081 from "module_5081" /* 5081 */;
import _mod5082 from "module_5082" /* 5082 */;
import _mod5083 from "module_5083" /* 5083 */;

const _mod1286 = tmp(1286);
if (_mod5081) {
  function setProto(arg0, arg1) {
    if (_mod5081(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1286("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5082;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5083) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5083(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
