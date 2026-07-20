// Module ID: 16018
// Function ID: 123009
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16018 (_isNativeReflectConstruct)
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
const PremiumTypes = arg1(dependencyMap[9]).PremiumTypes;
const EntitlementTypes = arg1(dependencyMap[10]).EntitlementTypes;
const SubscriptionTypes = arg1(dependencyMap[11]).SubscriptionTypes;
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
      obj = { POST_CONNECTION_OPEN: onPostConnectionOpen.bind(tmp3Result), EXPERIMENTS_FETCH_SUCCESS: onPostConnectionOpen2.bind(tmp3Result), BILLING_SUBSCRIPTION_UPDATE_SUCCESS: onSubscriptionUpdated.bind(tmp3Result), IAP_PURCHASE_PRODUCT_SUCCESS: onMobilePurchaseSuccess.bind(tmp3Result), GPLAY_PURCHASE_VERIFIED: onMobilePurchaseSuccess2.bind(tmp3Result), BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated.bind(tmp3Result), BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: onOfferUpdated2.bind(tmp3Result), BILLING_REFERRAL_RESOLVE_SUCCESS: onOfferUpdated3.bind(tmp3Result), VIRTUAL_CURRENCY_REDEEM_SUCCESS: onVCRedeemed.bind(tmp3Result) };
      ({ onPostConnectionOpen, onPostConnectionOpen: onPostConnectionOpen2, onSubscriptionUpdated, onMobilePurchaseSuccess, onMobilePurchaseSuccess: onMobilePurchaseSuccess2, onOfferUpdated, onOfferUpdated: onOfferUpdated2, onOfferUpdated: onOfferUpdated3, onVCRedeemed } = tmp3Result);
      tmp3Result.actions = obj;
      map = new Map();
      onLocaleChanged = tmp3Result.onLocaleChanged;
      tmp3Result.stores = map.set(closure_9, onLocaleChanged.bind(tmp3Result));
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.maybeFetchBogoPromotion = closure_3(tmp);
      return tmp3Result;
    }
  }
  const importDefault = PromotionsManager;
  callback3(PromotionsManager, arg0);
  let obj = {
    key: "onLocaleChanged",
    value() {
      let tmp = null != closure_11.lastFetchedActivePromotions;
      if (tmp) {
        tmp = closure_11.lastFetchedActivePromotionsLocale !== locale.locale;
      }
      if (tmp) {
        const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
        const obj = callback(closure_2[14]);
      }
    }
  };
  const items = [obj, , , , , ];
  obj = { key: "onPostConnectionOpen" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function onPostConnectionOpen() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "onSubscriptionUpdated",
    value(subscription) {
      if (subscription.subscription.type === constants.PREMIUM) {
        const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
        const obj = callback(closure_2[14]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "onMobilePurchaseSuccess",
    value() {
      const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
    }
  };
  items[4] = {
    key: "onOfferUpdated",
    value() {
      const result = callback(closure_2[14]).maybeFetchActivePromotions(false);
    }
  };
  items[5] = {
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
