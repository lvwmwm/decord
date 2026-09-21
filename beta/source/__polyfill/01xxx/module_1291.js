// Module ID: 1291
// Function ID: 1292
// Dependencies: [1292, 1293, 1295]

// Module 1291
import _mod1292 from "module_1292" /* 1292 */;
import _mod1293 from "module_1293" /* 1293 */;
import _mod1295 from "module_1295" /* 1295 */;

if (_mod1292) {
  function getProto(arg0) {
    return _mod1292(arg0);
  }
} else if (_mod1293) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1293(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1295) {
    getProto = function getProto(arg0) {
      return _mod1295(arg0);
    };
  }
}

export default getProto;
