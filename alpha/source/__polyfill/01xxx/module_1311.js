// Module ID: 1311
// Function ID: 1312
// Dependencies: [1312, 1313, 1315]

// Module 1311
import _mod1312 from "module_1312" /* 1312 */;
import _mod1313 from "module_1313" /* 1313 */;
import _mod1315 from "module_1315" /* 1315 */;

let getProto;
if (_mod1312) {
  getProto = function getProto(arg0) {
    return _mod1312(arg0);
  };
} else if (_mod1313) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1313(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1315) {
    getProto = function getProto(arg0) {
      return _mod1315(arg0);
    };
  }
}

export default getProto;
