// Module ID: 12728
// Function ID: 99063
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 3767, 664, 21, 566, 686, 2]

// Module 12728 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = 180 * require("set").Millis.DAY;
let c10 = false;
let tmp2 = ((Store) => {
  class PremiumPromoStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PremiumPromoStore);
      obj = outer1_5(PremiumPromoStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PremiumPromoStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_7);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isEligible",
    value() {
      return outer1_10;
    }
  };
  items[1] = obj;
  return callback(PremiumPromoStore, items);
})(require("initialize").Store);
tmp2.displayName = "PremiumPromoStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = friendIDs.getFriendIDs().length >= 10;
    if (tmp2) {
      const _Date = Date;
      const obj = importDefault(21);
      tmp2 = importDefault(21).extractTimestamp(id.getId()) < Date.now() - closure_9;
      const extractTimestampResult = importDefault(21).extractTimestamp(id.getId());
    }
    let c10 = tmp2;
    return c10 !== tmp2;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default tmp2;
