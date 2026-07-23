// Module ID: 7368
// Function ID: 59385
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 7368 (_isNativeReflectConstruct)
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
let c5;
let tmp2 = ((Store) => {
  class StorefrontPromotionOverrideStore {
    constructor() {
      self = this;
      tmp = StorefrontPromotionOverrideStore(this, StorefrontPromotionOverrideStore);
      obj = outer1_3(StorefrontPromotionOverrideStore);
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
  callback2(StorefrontPromotionOverrideStore, Store);
  const items = [
    {
      key: "getPromotionIdOverride",
      value() {
        return outer1_5;
      }
    }
  ];
  return callback(StorefrontPromotionOverrideStore, items);
})(require("initialize").Store);
tmp2.displayName = "StorefrontPromotionOverrideStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let c5;
  },
  STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function handleSet(promotionIdOverride) {
    promotionIdOverride = promotionIdOverride.promotionIdOverride;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/storefront/StorefrontPromotionOverrideStore.tsx");

export default tmp2;
