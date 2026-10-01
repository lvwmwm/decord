// Module ID: 5325
// Function ID: 5326
// Dependencies: [5326, 1282, 5327, 5328]

// Module 5325
import _mod5326 from "module_5326" /* 5326 */;
import _mod5327 from "module_5327" /* 5327 */;
import _mod5328 from "module_5328" /* 5328 */;

const _mod1282 = tmp(1282);
if (_mod5326) {
  function setProto(arg0, arg1) {
    if (_mod5326(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5327;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5328) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5328(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
