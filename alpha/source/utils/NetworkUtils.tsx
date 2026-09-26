// Module ID: 1463
// Function ID: 1464
// Name: NetworkUtils
// Dependencies: [1464, 2]

// Module 1463 (NetworkUtils)
import utils_NetworkUtils from "utils/NetworkUtils" /* 1464 */;
import size from "module_2" /* 2 */;

let closure_2 = [];
let c3 = false;
const obj = {};
const merged = Object.assign(utils_NetworkUtils.default);
obj.awaitOnline = function awaitOnline() {
  return new Promise((fn) => {
    if (_default.isOnline()) {
      return fn();
    } else {
      function whenOnline() {
        const item = closure_2_2.forEach((fn) => fn());
        closure_2_2.length = 0;
        c3 = false;
        utils_NetworkUtils.default.removeOnlineCallback(whenOnline);
      }
      closure_2.push(fn);
      if (!c3) {
        c3 = true;
        tmp(1464).default.addOnlineCallback(whenOnline);
      }
    }
    _default = whenOnline(1464).default;
    tmp = whenOnline;
  });
};
const result = size.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;
