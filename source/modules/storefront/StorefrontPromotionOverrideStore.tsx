// Module ID: 7362
// Function ID: 59328
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7362 (_isNativeReflectConstruct)
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
let closure_5;
let tmp2 = (Store) => {
  class StorefrontPromotionOverrideStore {
    constructor() {
      self = this;
      tmp = StorefrontPromotionOverrideStore(this, StorefrontPromotionOverrideStore);
      obj = closure_3(StorefrontPromotionOverrideStore);
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
  let closure_0 = StorefrontPromotionOverrideStore;
  callback2(StorefrontPromotionOverrideStore, Store);
  const items = [
    {
      key: "getPromotionIdOverride",
      value() {
        return closure_5;
      }
    }
  ];
  return callback(StorefrontPromotionOverrideStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "StorefrontPromotionOverrideStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  LOGOUT: function handleLogout() {
    let closure_5;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default tmp2;
