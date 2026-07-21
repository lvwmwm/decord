// Module ID: 6654
// Function ID: 51169
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6654 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = { giftOptionsReceiptMap: {} };
let tmp2 = (PersistedStore) => {
  class GiftPromotionStore {
    constructor() {
      self = this;
      tmp = GiftPromotionStore(this, GiftPromotionStore);
      obj = closure_3(GiftPromotionStore);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GiftPromotionStore;
  callback2(GiftPromotionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(giftOptionsReceiptMap) {
      if (null != giftOptionsReceiptMap) {
        const obj = {};
        const merged = Object.assign(giftOptionsReceiptMap.giftOptionsReceiptMap);
        closure_5.giftOptionsReceiptMap = obj;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGiftOptionsForKey",
    value(arg0) {
      return obj.giftOptionsReceiptMap[arg0];
    }
  };
  items[2] = obj;
  return callback(GiftPromotionStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "GiftPromotionStore";
tmp2.persistKey = "GiftPromotionStore";
const items = [
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
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGOUT: function handleLogout() {
    let closure_5 = { giftOptionsReceiptMap: {} };
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION: function handleCacheGiftOptions(key) {
    obj.giftOptionsReceiptMap[key.key] = key.giftOptions;
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION: function handleClearCachedGiftOptions(arg0) {
    delete r0[r1];
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/gifting/GiftPromotionStore.tsx");

export default tmp2;
