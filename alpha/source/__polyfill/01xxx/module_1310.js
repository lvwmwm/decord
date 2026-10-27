// Module ID: 1310
// Function ID: 1311
// Dependencies: [1311, 1312, 1314]

// Module 1310
import _mod1311 from "module_1311" /* 1311 */;
import _mod1312 from "module_1312" /* 1312 */;
import _mod1314 from "module_1314" /* 1314 */;

let getProto;
if (_mod1311) {
  getProto = function getProto(arg0) {
    return _mod1311(arg0);
  };
} else if (_mod1312) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1312(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1314) {
    getProto = function getProto(arg0) {
      return _mod1314(arg0);
    };
  }
}

export default getProto;
