// Module ID: 1430
// Function ID: 16705
// Name: awaitOnline
// Dependencies: [1431, 2]

// Module 1430 (awaitOnline)
let closure_2 = [];
let c3 = false;
const obj = {};
const merged = Object.assign(require("ensureChangeListenerCreated").default);
obj["awaitOnline"] = function awaitOnline() {
  return new Promise((arg0) => {
    function whenOnline() {
      const item = outer2_2.forEach((arg0) => arg0());
      outer2_2.length = 0;
      const outer2_3 = false;
      outer2_0(outer2_1[0]).default.removeOnlineCallback(whenOnline);
    }
    if (_default.isOnline()) {
      return arg0();
    } else {
      outer1_2.push(arg0);
      if (!outer1_3) {
        outer1_3 = true;
        outer1_0(outer1_1[0]).default.addOnlineCallback(whenOnline);
      }
    }
    _default = outer1_0(outer1_1[0]).default;
  });
};
const result = require("set").fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;
