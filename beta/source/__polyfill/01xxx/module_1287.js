// Module ID: 1287
// Function ID: 1288
// Dependencies: [1288, 1289, 1291]

// Module 1287
import _mod1288 from "module_1288" /* 1288 */;
import _mod1289 from "module_1289" /* 1289 */;
import _mod1291 from "module_1291" /* 1291 */;

let getProto;
if (_mod1288) {
  getProto = function getProto(arg0) {
    return _mod1288(arg0);
  };
} else if (_mod1289) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1289(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1291) {
    getProto = function getProto(arg0) {
      return _mod1291(arg0);
    };
  }
}

export default getProto;
