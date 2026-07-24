// Module ID: 4457
// Function ID: 39291
// Name: getStripe
// Dependencies: [5, 57, 1921, 653, 3, 4458, 507, 566, 2]
// Exports: authenticatePaymentIntentForPaymentId, getStripeClientMode, parseBillingAddressInfoToStripeBillingDetails, parseStripePaymentMethod, useStripeLocale, validateExpiry

// Module 4457 (getStripe)
import _typeof from "_typeof";
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "ME";

let closure_6;
let closure_7;
const require = arg1;
function getStripe() {
  if (null != closure_2) {
    let resolved = Promise.resolve(closure_2);
  } else {
    const stripe = require(4458) /* _typeof */.loadStripe(constants.STRIPE.KEY);
    resolved = stripe.then((arg0) => {
      const outer1_2 = arg0;
      return arg0;
    });
    const obj = require(4458) /* _typeof */;
  }
  return resolved;
}
async function _authenticatePaymentIntentForPaymentId(arg0, arg1) {
  const HTTP = outer2_0(outer2_1[6]).HTTP;
  let obj = { url: outer2_6.BILLING_STRIPE_PAYMENT_INTENTS(arg0), oldFormErrors: true, rejectWithError: false };
  const stripe_payment_intent_client_secret = yield HTTP.get(obj).body.stripe_payment_intent_client_secret;
  const tmp = yield outer2_11();
  let obj1 = tmp;
  if (null == tmp) {
    obj = { error: "unable to load stripe" };
    return obj;
  } else {
    const tmp21 = yield obj1.retrievePaymentIntent(stripe_payment_intent_client_secret);
    const error = tmp21.error;
    const paymentIntent = tmp21.paymentIntent;
    if (null != error) {
      obj = { error: error.message };
      return obj;
    } else if (null == paymentIntent) {
      obj1 = { error: "payment intent does not exist" };
      return obj1;
    } else {
      const obj2 = {};
      let tmp4 = tmp25;
      if (paymentIntent.status === outer2_9.REQUIRES_PAYMENT_METHOD) {
        tmp4 = null != paymentIntent.last_payment_error;
      }
      let tmp5 = tmp4;
      if (tmp4) {
        tmp5 = null != paymentIntent.last_payment_error.payment_method;
      }
      if (tmp5) {
        obj2.payment_method = paymentIntent.last_payment_error.payment_method.id;
      }
      const status = paymentIntent.status;
      if (outer2_9.REQUIRES_PAYMENT_METHOD !== status) {
        if (outer2_9.REQUIRES_CONFIRMATION !== status) {
          if (outer2_9.REQUIRES_ACTION !== status) {
            if (outer2_9.SUCCEEDED !== status) {
              if (outer2_9.PROCESSING !== status) {
                const CANCELED = outer2_9.CANCELED;
                const obj3 = {};
                const _HermesInternal = HermesInternal;
                obj3.error = "Invalid Payment Intent status: " + paymentIntent.status;
                return obj3;
              }
            }
            return {};
          }
        }
      }
      const error2 = yield obj1.confirmCardPayment(stripe_payment_intent_client_secret, obj2).error;
      if (null != error2) {
        const obj4 = { error: error2.message };
        let obj5 = obj4;
      } else {
        obj5 = {};
      }
      return obj5;
    }
  }
}
function getStripeElementLocale(arg0) {
  let tmp = arg0;
  if (null != table[arg0]) {
    tmp = tmp2;
  }
  return tmp;
}
({ Endpoints: closure_6, PaymentSettings: closure_7 } = ME);
importDefaultResult = new importDefaultResult("StripeUtils");
let closure_9 = { REQUIRES_PAYMENT_METHOD: "requires_payment_method", REQUIRES_CONFIRMATION: "requires_confirmation", REQUIRES_ACTION: "requires_action", PROCESSING: "processing", CANCELED: "canceled", SUCCEEDED: "succeeded" };
let closure_10 = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/StripeUtils.tsx");

export const validateExpiry = function validateExpiry(arg0) {
  const tmp = callback2((function parseExpString(str) {
    let closure_0 = str;
    function throwErr(arg0) {
      let str = "";
      if (null != arg0) {
        str = arg0;
      }
      return "You passed an invalid expiration date " + closure_0 + str + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
    }
    const parts = str.split(/[.\-/\s]+/g);
    if (2 !== parts.length) {
      throwErr();
    }
    const mapped = parts.map((replaced) => {
      const parsed = parseInt(replaced);
      if (isNaN(parsed)) {
        const _HermesInternal = HermesInternal;
        throwErr("" + parts + " is not a number.");
      }
      if (parsed < 1) {
        const _HermesInternal2 = HermesInternal;
        throwErr("" + parsed + " is less than one.");
      }
      return parsed;
    });
    if (mapped[0] > 12) {
      const items = [, ];
      [arr3[1], arr3[0]] = mapped;
      let items1 = items;
    } else {
      items1 = [mapped[0], mapped[1]];
    }
    const tmp3 = outer1_4(items1, 2);
    const first = tmp3[0];
    if (first > 12) {
      let _HermesInternal = HermesInternal;
      throwErr("Month must be a number 1-12, not " + first + ".");
    }
    let sum = tmp5;
    if (tmp3[1] < 100) {
      sum = tmp5 + 2000;
    }
    const items2 = [first, sum];
    return items2;
  })(arg0), 2);
  const date = new Date(tmp[1], tmp[0]);
  date.setMonth(date.getMonth() - 1);
  date.setMonth(date.getMonth() + 1, 1);
  return date > new Date();
};
export { getStripe };
export const getStripeClientMode = function getStripeClientMode() {
  if (null == constants.STRIPE.KEY) {
    importDefaultResult.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", constants.STRIPE.KEY);
    let str4 = "unknown";
  } else {
    const KEY2 = constants.STRIPE.KEY;
    str4 = "live";
    if (!KEY2.startsWith("pk_live")) {
      const KEY = constants.STRIPE.KEY;
      let str2 = "test";
      if (!KEY.startsWith("pk_test")) {
        importDefaultResult.warn("Unexpected value for Stripe public key: ", constants.STRIPE.KEY);
        str2 = "unknown";
      }
      str4 = str2;
    }
  }
  return str4;
};
export const parseStripePaymentMethod = function parseStripePaymentMethod(billing_details) {
  billing_details = billing_details.billing_details;
  let address = billing_details.address;
  if (null == address) {
    address = {};
  }
  let obj = {};
  const name = billing_details.name;
  let str = "";
  let str2 = "";
  if (null != name) {
    str2 = name;
  }
  obj.name = str2;
  const line1 = address.line1;
  let tmp = str;
  if (null != line1) {
    tmp = line1;
  }
  obj.line1 = tmp;
  const line2 = address.line2;
  let tmp2 = str;
  if (null != line2) {
    tmp2 = line2;
  }
  obj.line2 = tmp2;
  const city = address.city;
  let tmp3 = str;
  if (null != city) {
    tmp3 = city;
  }
  obj.city = tmp3;
  const state = address.state;
  let tmp4 = str;
  if (null != state) {
    tmp4 = state;
  }
  obj.state = tmp4;
  const country = address.country;
  let tmp5 = str;
  if (null != country) {
    tmp5 = country;
  }
  obj.country = tmp5;
  const postal_code = address.postal_code;
  if (null != postal_code) {
    str = postal_code;
  }
  obj.postalCode = str;
  obj = { token: billing_details.id, billingAddressInfo: obj };
  return obj;
};
export const parseBillingAddressInfoToStripeBillingDetails = function parseBillingAddressInfoToStripeBillingDetails(name) {
  obj = { name: name.name, address: obj };
  obj = { line1: name.line1, line2: name.line2, city: name.city, state: name.state, postal_code: name.postalCode, country: name.country };
  return obj;
};
export const authenticatePaymentIntentForPaymentId = function authenticatePaymentIntentForPaymentId() {
  return _authenticatePaymentIntentForPaymentId(...arguments);
};
export { getStripeElementLocale };
export const useStripeLocale = function useStripeLocale() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => outer1_13(outer1_5.locale));
};
