// Module ID: 1430
// Function ID: 16698
// Name: awaitOnline
// Dependencies: []

// Module 1430 (awaitOnline)
let closure_2 = [];
let closure_3 = false;
const obj = {};
const merged = Object.assign(require(dependencyMap[0]).default);
obj["awaitOnline"] = function awaitOnline() {
  return new Promise((arg0) => {
    function whenOnline(arg0) {
      const item = closure_2.forEach((arg0) => arg0());
      closure_2.length = 0;
      let closure_3 = false;
      whenOnline(closure_1[0]).default.removeOnlineCallback(whenOnline);
    }
    if (_default.isOnline()) {
      return arg0();
    } else {
      const arr = arr.push(arg0);
      if (!closure_3) {
        closure_3 = true;
        whenOnline(closure_1[0]).default.addOnlineCallback(whenOnline);
      }
    }
    const _default = whenOnline(closure_1[0]).default;
  });
};
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;
