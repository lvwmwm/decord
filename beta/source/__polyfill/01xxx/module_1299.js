// Module ID: 1299
// Function ID: 1300
// Dependencies: [1300, 1301, 1303]

// Module 1299
import _mod1300 from "module_1300" /* 1300 */;
import _mod1301 from "module_1301" /* 1301 */;
import _mod1303 from "module_1303" /* 1303 */;

let getProto;
if (_mod1300) {
  getProto = function getProto(arg0) {
    return _mod1300(arg0);
  };
} else if (_mod1301) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1301(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1303) {
    getProto = function getProto(arg0) {
      return _mod1303(arg0);
    };
  }
}

export default getProto;
