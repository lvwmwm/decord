// Module ID: 4453
// Function ID: 39258
// Name: getStripe
// Dependencies: []
// Exports: authenticatePaymentIntentForPaymentId, getStripeClientMode, parseBillingAddressInfoToStripeBillingDetails, parseStripePaymentMethod, useStripeLocale, validateExpiry

// Module 4453 (getStripe)
function getStripe() {
  if (null != closure_2) {
    let resolved = Promise.resolve(closure_2);
  } else {
    const stripe = arg1(dependencyMap[5]).loadStripe(constants.STRIPE.KEY);
    resolved = stripe.then((arg0) => arg0);
    const obj = arg1(dependencyMap[5]);
  }
  return resolved;
}
async function _authenticatePaymentIntentForPaymentId(paymentId, arg1) {
  const HTTP = callback(closure_1[6]).HTTP;
  let obj = { y: 1567300603, isArray: 221342020, accessible: 822948183, url: closure_6.BILLING_STRIPE_PAYMENT_INTENTS(paymentId) };
  const stripe_payment_intent_client_secret = yield HTTP.get(obj).body.stripe_payment_intent_client_secret;
  const tmp = yield closure_11();
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
      if (paymentIntent.status === constants.REQUIRES_PAYMENT_METHOD) {
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
      if (constants.REQUIRES_PAYMENT_METHOD !== status) {
        if (constants.REQUIRES_CONFIRMATION !== status) {
          if (constants.REQUIRES_ACTION !== status) {
            if (constants.SUCCEEDED !== status) {
              if (constants.PROCESSING !== status) {
                const CANCELED = constants.CANCELED;
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
  if (null != closure_10[arg0]) {
    tmp = tmp2;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ Endpoints: closure_6, PaymentSettings: closure_7 } = arg1(dependencyMap[3]));
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("StripeUtils");
let closure_9 = { REQUIRES_PAYMENT_METHOD: "requires_payment_method", REQUIRES_CONFIRMATION: "requires_confirmation", REQUIRES_ACTION: "requires_action", PROCESSING: "processing", CANCELED: "canceled", SUCCEEDED: "succeeded" };
let closure_10 = { player_mux_plugin_name: null, player_mux_plugin_version: "title", 9223372036854775807: "__closure" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("utils/StripeUtils.tsx");

export const validateExpiry = function validateExpiry(arg0) {
  const tmp = callback2(function parseExpString(str) {
    function throwErr(arg0) {
      let str = "";
      if (null != arg0) {
        str = arg0;
      }
      return "You passed an invalid expiration date " + arg0 + str + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
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
    const tmp3 = callback(items1, 2);
    const first = tmp3[0];
    if (first > 12) {
      const _HermesInternal = HermesInternal;
      throwErr("Month must be a number 1-12, not " + first + ".");
    }
    let sum = tmp5;
    if (tmp3[1] < 100) {
      sum = tmp5 + 2000;
    }
    const items2 = [first, sum];
    return items2;
  }(arg0), 2);
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
  let obj = { name: name.name, address: obj };
  obj = { line1: name.line1, line2: name.line2, city: name.city, state: name.state, postal_code: name.postalCode, country: name.country };
  return obj;
};
export const authenticatePaymentIntentForPaymentId = function authenticatePaymentIntentForPaymentId() {
  return _authenticatePaymentIntentForPaymentId(...arguments);
};
export { getStripeElementLocale };
export const useStripeLocale = function useStripeLocale() {
  const items = [closure_5];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => callback(locale.locale));
};
