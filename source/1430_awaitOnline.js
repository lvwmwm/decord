// Module ID: 1430
// Function ID: 16698
// Name: awaitOnline
// Dependencies: [31, 1451]

// Module 1430 (awaitOnline)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2 = [];
let closure_3 = false;
const obj = {};
const merged = Object.assign(require("module_31").default);
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
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;
