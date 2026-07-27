// Module ID: 1897
// Function ID: 21277
// Name: Kv
// Dependencies: [6, 7, 1893, 2]

// Module 1897 (Kv)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class Kv {
    constructor() {
      tmp = outer1_2(this, Kv);
      return;
    }
  }
  let obj = {
    key: "databases",
    value() {
      const Host = Kv(outer1_1[2]).Host;
      return Host.list();
    }
  };
  const items = [obj, ];
  obj = {
    key: "optimize",
    value(arg0) {
      const Host = Kv(outer1_1[2]).Host;
      return Host.optimize(arg0);
    }
  };
  items[1] = obj;
  return callback(Kv, null, items);
})();
const result = require("Host").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Kv.tsx");

export const Kv = tmp2;
