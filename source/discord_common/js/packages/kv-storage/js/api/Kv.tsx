// Module ID: 1896
// Function ID: 21264
// Name: Kv
// Dependencies: [6, 7, 1892, 2]

// Module 1896 (Kv)
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
