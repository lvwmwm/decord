// Module ID: 3766
// Function ID: 28854
// Name: BasicPermissionUtils
// Dependencies: [6, 7, 483, 2]

// Module 3766 (BasicPermissionUtils)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class BasicPermissionUtils {
    constructor() {
      tmp = outer1_2(this, BasicPermissionUtils);
      return;
    }
  }
  let obj = {
    key: "has",
    value(arg0, arg1) {
      return arg0 & arg1;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "asBasicFlag",
    value(arg0) {
      return BasicPermissionUtils(outer1_1[2]).asUintN(20, arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "asBigFlag",
    value(arg0) {
      const self = this;
      if (!Object.hasOwn(this.cache, arg0)) {
        self.cache[arg0] = BasicPermissionUtils(outer1_1[2]).deserialize(arg0);
        const obj = BasicPermissionUtils(outer1_1[2]);
      }
      return self.cache[arg0];
    }
  };
  items[2] = obj;
  return callback(BasicPermissionUtils, null, items);
})();
tmp2.cache = {};
const result = require("fromHexReverseArray").fileFinishedImporting("utils/BasicPermissionUtils.tsx");

export default tmp2;
