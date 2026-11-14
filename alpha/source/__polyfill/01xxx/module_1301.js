// Module ID: 1301
// Function ID: 1302
// Dependencies: [1302, 1303, 1305]

// Module 1301
import _mod1302 from "module_1302" /* 1302 */;
import _mod1303 from "module_1303" /* 1303 */;
import _mod1305 from "module_1305" /* 1305 */;

let getProto;
if (_mod1302) {
  getProto = function getProto(arg0) {
    return _mod1302(arg0);
  };
} else if (_mod1303) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1303(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1305) {
    getProto = function getProto(arg0) {
      return _mod1305(arg0);
    };
  }
}

export default getProto;
