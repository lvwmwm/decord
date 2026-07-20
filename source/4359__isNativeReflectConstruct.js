// Module ID: 4359
// Function ID: 38655
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4359 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSubscribeFailure(error) {
  error = error.error;
}
function handleClearError() {
  let closure_7 = null;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = null;
let closure_8 = null;
let closure_9 = null;
let tmp2 = (Store) => {
  class PremiumPaymentModalStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PremiumPaymentModalStore);
      obj = closure_5(PremiumPaymentModalStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = PremiumPaymentModalStore;
  callback2(PremiumPaymentModalStore, Store);
  let obj = {
    key: "paymentError",
    get() {
      return closure_7;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGiftCode",
    value(arg0) {
      let tmp = null;
      if (arg0 === closure_9) {
        tmp = closure_8;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(PremiumPaymentModalStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "PremiumPaymentModalStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_UPDATE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function handleSubscribeSuccess() {
    handleClearError();
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: handleClearError,
  PREMIUM_PAYMENT_ERROR_CLEAR: handleClearError,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function handlePayPalTokenizeFailure(message) {
    const billingError = new arg1(dependencyMap[5]).BillingError(message.message);
    let closure_7 = billingError;
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function handleVenmoTokenizeFailure(message) {
    const billingError = new arg1(dependencyMap[5]).BillingError(message.message);
    let closure_7 = billingError;
  },
  SKU_PURCHASE_SUCCESS: function handleSKUPurchaseSuccess(arg0) {
    ({ giftCode: closure_8, skuId: closure_9 } = arg0);
  },
  SKU_PURCHASE_FAIL: function handleSKUPurchaseFail(error) {
    error = error.error;
  },
  SKU_PURCHASE_AWAIT_CONFIRMATION: function handleSKUPurchaseAwaitConfirmation(isGift) {
    if (isGift.isGift) {
      const skuId = isGift.skuId;
    }
  },
  GIFT_CODE_CREATE: function handleGiftCodeCreate(giftCode) {
    giftCode = giftCode.giftCode;
    if (0 === giftCode.uses) {
      if (giftCode.sku_id === closure_9) {
        const code = giftCode.code;
      }
    }
    return false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/PremiumPaymentModalStore.tsx");

export default tmp2;
