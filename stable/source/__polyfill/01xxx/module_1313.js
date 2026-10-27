// Module ID: 1313
// Function ID: 1314
// Dependencies: [1314, 1315, 1317]

// Module 1313
import _mod1314 from "module_1314" /* 1314 */;
import _mod1315 from "module_1315" /* 1315 */;
import _mod1317 from "module_1317" /* 1317 */;

let getProto;
if (_mod1314) {
  getProto = function getProto(arg0) {
    return _mod1314(arg0);
  };
} else if (_mod1315) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1315(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1317) {
    getProto = function getProto(arg0) {
      return _mod1317(arg0);
    };
  }
}

export default getProto;
