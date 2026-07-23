// Module ID: 4367
// Function ID: 38751
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4029, 566, 686, 2]

// Module 4367 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
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
  let c7 = null;
}
let c7 = null;
let c8 = null;
let c9 = null;
let tmp2 = ((Store) => {
  class PremiumPaymentModalStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PremiumPaymentModalStore);
      obj = outer1_5(PremiumPaymentModalStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(PremiumPaymentModalStore, Store);
  let obj = {
    key: "paymentError",
    get() {
      return outer1_7;
    }
  };
  const items = [obj, ];
  obj = {
    key: "getGiftCode",
    value(arg0) {
      let tmp = null;
      if (arg0 === outer1_9) {
        tmp = outer1_8;
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(PremiumPaymentModalStore, items);
})(require("initialize").Store);
tmp2.displayName = "PremiumPaymentModalStore";
tmp2 = new tmp2(require("dispatcher"), {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_UPDATE_FAIL: handleSubscribeFailure,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function handleSubscribeSuccess() {
    handleClearError();
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: handleClearError,
  PREMIUM_PAYMENT_ERROR_CLEAR: handleClearError,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function handlePayPalTokenizeFailure(message) {
    const billingError = new require(4029) /* V6OrEarlierAPIError */.BillingError(message.message);
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function handleVenmoTokenizeFailure(message) {
    const billingError = new require(4029) /* V6OrEarlierAPIError */.BillingError(message.message);
  },
  SKU_PURCHASE_SUCCESS: function handleSKUPurchaseSuccess(arg0) {
    let c8;
    let c9;
    ({ giftCode: c8, skuId: c9 } = arg0);
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
      if (giftCode.sku_id === c9) {
        const code = giftCode.code;
      }
    }
    return false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PremiumPaymentModalStore.tsx");

export default tmp2;
