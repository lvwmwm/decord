// Module ID: 16025
// Function ID: 123035
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16025 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const PremiumTypes = arg1(dependencyMap[10]).PremiumTypes;
const EntitlementTypes = arg1(dependencyMap[11]).EntitlementTypes;
let tmp2 = (arg0) => {
  class PromotionsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_4(this, PromotionsManager);
      items1 = [...items];
      obj = closure_7(PromotionsManager);
      tmp3 = closure_6;
      if (closure_15()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(tmp3Result), EXPERIMENTS_FETCH_SUCCESS: onPostConnectionOpen2.bind(tmp3Result), IAP_PURCHASE_PRODUCT_SUCCESS: onMobilePurchaseSuccess.bind(tmp3Result), GPLAY_PURCHASE_VERIFIED: onMobilePurchaseSuccess2.bind(tmp3Result), BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated.bind(tmp3Result), BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated2.bind(tmp3Result), BILLING_REFERRAL_RESOLVE_SUCCESS: onOfferUpdated3.bind(tmp3Result), VIRTUAL_CURRENCY_REDEEM_SUCCESS: onVCRedeemed.bind(tmp3Result) };
      ({ onPostConnectionOpen, onPostConnectionOpen: onPostConnectionOpen2, onMobilePurchaseSuccess, onMobilePurchaseSuccess: onMobilePurchaseSuccess2, onOfferUpdated, onOfferUpdated: onOfferUpdated2, onOfferUpdated: onOfferUpdated3, onVCRedeemed } = tmp3Result);
      tmp3Result.actions = obj;
      map = new Map();
      onLocaleChanged = tmp3Result.onLocaleChanged;
      result = map.set(closure_9, onLocaleChanged.bind(tmp3Result));
      onSubscriptionStateChanged = tmp3Result.onSubscriptionStateChanged;
      result1 = result.set(closure_11, onSubscriptionStateChanged.bind(tmp3Result));
      onPromotionsFetchSettled = tmp3Result.onPromotionsFetchSettled;
      tmp3Result.stores = result1.set(closure_12, onPromotionsFetchSettled.bind(tmp3Result));
      tmp3Result.lastSubscriptionStateSignature = null;
      tmp3Result.hasPendingSubscriptionRefetch = false;
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.maybeFetchBogoPromotion = closure_3(tmp);
      return tmp3Result;
    }
  }
  const importDefault = PromotionsManager;
  callback3(PromotionsManager, arg0);
  let obj = {
    key: "_terminate",
    value() {
      this.hasPendingSubscriptionRefetch = false;
      this.lastSubscriptionStateSignature = null;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "onLocaleChanged",
    value() {
      let tmp = null != closure_12.lastFetchedActivePromotions;
      if (tmp) {
        tmp = closure_12.lastFetchedActivePromotionsLocale !== locale.locale;
      }
      if (tmp) {
        const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
        const obj = callback(closure_2[14]);
      }
    }
  };
  items[1] = obj;
  obj = { key: "onPostConnectionOpen" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function onPostConnectionOpen() {
    return callback(...arguments);
  };
  items[2] = obj;
  items[3] = {
    key: "onSubscriptionStateChanged",
    value() {
      const self = this;
      const tmp = function getSubscriptionStateSignature() {
        const subscriptions = subscriptions.getSubscriptions(false);
        let str = "";
        if (null != subscriptions) {
          const _Object = Object;
          const values = Object.values(subscriptions);
          const mapped = values.map((items) => {
            items = items.items;
            const mapped = items.map((planId) => planId.planId);
            const sorted = mapped.sort();
            return "" + items.id + ":" + items.type + ":" + items.status + ":" + sorted.join("|");
          });
          const sorted = mapped.sort();
          str = sorted.join(",");
        }
        return str;
      }();
      if (tmp !== this.lastSubscriptionStateSignature) {
        self.lastSubscriptionStateSignature = tmp;
        if (null != closure_12.lastFetchedActivePromotions) {
          if (closure_12.isFetchingActivePromotions) {
            self.hasPendingSubscriptionRefetch = true;
          } else {
            const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
            const obj = callback(closure_2[14]);
          }
        }
      }
    }
  };
  items[4] = {
    key: "onPromotionsFetchSettled",
    value() {
      if (this.hasPendingSubscriptionRefetch) {
        if (!closure_12.isFetchingActivePromotions) {
          tmp.hasPendingSubscriptionRefetch = false;
          const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
          const obj = callback(closure_2[14]);
        }
      }
    }
  };
  items[5] = {
    key: "onMobilePurchaseSuccess",
    value() {
      const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
    }
  };
  items[6] = {
    key: "onOfferUpdated",
    value() {
      const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
    }
  };
  items[7] = {
    key: "onVCRedeemed",
    value(entitlements) {
      entitlements = entitlements.entitlements;
      if (entitlements.some((type) => type.type === constants.FRACTIONAL_REDEMPTION)) {
        const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
        const obj = callback(closure_2[14]);
      }
    }
  };
  return callback2(PromotionsManager, items);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/premium/promotions/PromotionsManager.tsx");

export default tmp2;
