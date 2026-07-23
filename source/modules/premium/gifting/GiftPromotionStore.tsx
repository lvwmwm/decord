// Module ID: 6659
// Function ID: 51209
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 6659 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = { giftOptionsReceiptMap: {} };
let tmp2 = ((PersistedStore) => {
  class GiftPromotionStore {
    constructor() {
      self = this;
      tmp = GiftPromotionStore(this, GiftPromotionStore);
      obj = outer1_3(GiftPromotionStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GiftPromotionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(giftOptionsReceiptMap) {
      if (null != giftOptionsReceiptMap) {
        const obj = {};
        const merged = Object.assign(giftOptionsReceiptMap.giftOptionsReceiptMap);
        outer1_5.giftOptionsReceiptMap = obj;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGiftOptionsForKey",
    value(arg0) {
      return outer1_5.giftOptionsReceiptMap[arg0];
    }
  };
  items[2] = obj;
  return callback(GiftPromotionStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "GiftPromotionStore";
tmp2.persistKey = "GiftPromotionStore";
let items = [
  (giftOptionsReceiptMap) => {
    let tmp = giftOptionsReceiptMap;
    if (null != giftOptionsReceiptMap) {
      const obj = {};
      giftOptionsReceiptMap = giftOptionsReceiptMap.giftOptionsReceiptMap;
      let tmp2 = null;
      if (null != giftOptionsReceiptMap) {
        tmp2 = giftOptionsReceiptMap;
      }
      obj.giftOptionsReceiptMap = tmp2;
      tmp = obj;
    }
    return tmp;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let closure_5 = { giftOptionsReceiptMap: {} };
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION: function handleCacheGiftOptions(key) {
    obj.giftOptionsReceiptMap[key.key] = key.giftOptions;
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION: function handleClearCachedGiftOptions(arg0) {
    delete tmp[tmp2];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/gifting/GiftPromotionStore.tsx");

export default tmp2;
