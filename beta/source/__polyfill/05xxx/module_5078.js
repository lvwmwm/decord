// Module ID: 5078
// Function ID: 5079
// Dependencies: [5079, 1282, 5080, 5081]

// Module 5078
import _mod5079 from "module_5079" /* 5079 */;
import _mod5080 from "module_5080" /* 5080 */;
import _mod5081 from "module_5081" /* 5081 */;

const _mod1282 = tmp(1282);
if (_mod5079) {
  function setProto(arg0, arg1) {
    if (_mod5079(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5080;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5081) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5081(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
