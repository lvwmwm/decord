// Module ID: 6718
// Function ID: 6719
// Name: StripeUtils
// Dependencies: [5, 32, 2186, 1072, 3, 6719, 1242, 6720, 1282, 504, 2]
// Exports: authenticatePaymentIntentForPaymentId, getStripeClientMode, getStripeElementLocale, parseBillingAddressInfoToStripeBillingDetails, parseStripePaymentMethod, useStripeLocale, validateExpiry

// Module 6718 (StripeUtils)
import LoggerDefault from "Logger" /* 3 */;
import get_initialized from "get initialized" /* 504 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c6, locale;

let metroImportDefault;
let metroRequire;
function getStripe(payment_gateway_merchant_account_id) {
  function resolveStripePublishableKey(payment_gateway_merchant_account_id) {
    let obj3;
    let tmp = null;
    if (null != payment_gateway_merchant_account_id) {
      let tmp4;
      const KEYS_BY_MERCHANT_ACCOUNT_ID = closure_0(dependencyMap[5]).StripePaymentSettings.KEYS_BY_MERCHANT_ACCOUNT_ID;
      if (KEYS_BY_MERCHANT_ACCOUNT_ID != null) {
        tmp4 = KEYS_BY_MERCHANT_ACCOUNT_ID[payment_gateway_merchant_account_id];
      }
      tmp = tmp4;
    }
    if (typeof payment_gateway_merchant_account_id === "string") {
      if ("" !== payment_gateway_merchant_account_id) {
        if (typeof tmp !== "string") {
          const obj4 = set;
          if (!set.has(payment_gateway_merchant_account_id)) {
            obj4.add(payment_gateway_merchant_account_id);
            try {
              const obj2 = { tags: obj3 };
              const _window = window;
              obj3 = { app_context: "billing", billing_context: "stripe_publishable_key", payment_gateway_merchant_account_id, build_environment: window.GLOBAL_ENV.PROJECT_ENV };
              obj = closure_1(dependencyMap[6]);
              obj.captureMessage("Stripe publishable key missing for merchant account", obj2, "warning");
            } catch (err) {
            }
          }
        }
      }
    }
    if (typeof tmp !== "string") {
      let str3 = constants.STRIPE.KEY;
      if (str3 == null) {
        str3 = "";
      }
      tmp = str3;
    }
    return tmp;
  }
  let tmp = resolveStripePublishableKey(payment_gateway_merchant_account_id);
  _require = tmp;
  obj = map;
  let value = map.get(tmp);
  if (null != value) {
    return value;
  } else {
    const tmp3 = _require;
    let tmp4 = dependencyMap;
    let obj2 = require("module_6720");
    let closure_1 = obj2.loadStripe(tmp);
    const tmp6 = (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value = tmp;
              closure_0 = tmp4;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value, done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_0 = closure_2;
            set.delete(closure_129_0);
            throw closure_0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp13) {
          closure_2 = tmp13;
          if (0 === c3) {
            c5 = 3;
            throw tmp13;
          } else {
            c4 = 1;
          }
        }
      }
    })();
    const result = obj.set(tmp, tmp6);
    return tmp6;
  }
}
function fetchStripePaymentIntentInfo() {
  return obj(...arguments);
}
let obj = function _fetchStripePaymentIntentInfo() {
  obj = _asyncToGenerator(async (arg0) => {
    let c4;
    let c5;
    let closure_3;
    let merchantAccountId;
    let paymentMethodId;
    let closure_0 = arg0;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: metroRequire.BILLING_STRIPE_PAYMENT_INTENTS(closure_0), oldFormErrors: true, rejectWithError: true };
    const get = HTTP.get;
    await get(obj4);
    const body = arg1.body;
    const obj7 = { clientSecret: body.stripe_payment_intent_client_secret, paymentMethodId, merchantAccountId };
    const stripe_payment_intent_payment_method_id = body.stripe_payment_intent_payment_method_id;
    paymentMethodId = stripe_payment_intent_payment_method_id;
    if (stripe_payment_intent_payment_method_id == null) {
      paymentMethodId = null;
    }
    const payment_gateway_merchant_account_id = body.payment_gateway_merchant_account_id;
    merchantAccountId = payment_gateway_merchant_account_id;
    if (payment_gateway_merchant_account_id == null) {
      merchantAccountId = null;
    }
    return obj7;
  });
  return obj(...arguments);
};
obj = function _authenticatePaymentIntentForPaymentId() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_3;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let tmp48;
      let c4;
      try {
        let clientSecret;
        let merchantAccountId;
        let closure_4;
        let paymentIntent;
        let closure_7;
        let error;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            clientSecret = undefined;
            merchantAccountId = undefined;
            tmp48 = undefined;
            closure_4 = undefined;
            paymentIntent = undefined;
            closure_7 = undefined;
            error = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj4 = { value: fetchStripePaymentIntentInfo(closure_0), done: false };
            return obj4;
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj5 = { error: tmp48.message };
          c6 = 3;
          const obj6 = { value: obj5, done: true };
          return obj6;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            clientSecret = closure_0.clientSecret;
            merchantAccountId = closure_0.merchantAccountId;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: closure_130_12(merchantAccountId), done: false };
            return obj8;
          }
        } else if (3 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            tmp48 = value;
            if (null == tmp48) {
              c4 = 0;
              c6 = 3;
              const obj10 = { value: { error: "unable to load stripe" }, done: true };
              return obj10;
            } else {
              c5 = 4;
              c6 = 1;
              const obj11 = { value: tmp48.retrievePaymentIntent(clientSecret), done: false };
              return obj11;
            }
          }
        } else if (4 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_4 = value;
            error = closure_4.error;
            paymentIntent = closure_4.paymentIntent;
            if (null != error) {
              const obj13 = { error: error.message };
              c4 = 0;
              c6 = 3;
              const obj14 = { value: obj13, done: true };
              return obj14;
            } else if (null == paymentIntent) {
              c4 = 0;
              c6 = 3;
              const obj15 = { value: { error: "payment intent does not exist" }, done: true };
              return obj15;
            } else {
              closure_7 = {};
              const tmp11 = paymentIntent.status === closure_130_11.REQUIRES_PAYMENT_METHOD && null != paymentIntent.last_payment_error && null != paymentIntent.last_payment_error.payment_method;
              if (tmp11) {
                closure_7.payment_method = paymentIntent.last_payment_error.payment_method.id;
              }
              const status = paymentIntent.status;
              if (closure_130_11.REQUIRES_PAYMENT_METHOD !== status) {
                if (closure_130_11.REQUIRES_CONFIRMATION !== status) {
                  if (closure_130_11.REQUIRES_ACTION !== status) {
                    if (closure_130_11.SUCCEEDED !== status) {
                      if (closure_130_11.PROCESSING !== status) {
                        const CANCELED = closure_130_11.CANCELED;
                        const obj16 = { error: "Invalid Payment Intent status: " + paymentIntent.status };
                        const _HermesInternal = HermesInternal;
                        c4 = 0;
                        c6 = 3;
                        const obj17 = { value: obj16, done: true };
                        return obj17;
                      }
                    }
                    c4 = 0;
                    c6 = 3;
                    const obj18 = { value: {}, done: true };
                    return obj18;
                  }
                }
              }
              c5 = 5;
              c6 = 1;
              const obj19 = { value: tmp48.confirmCardPayment(clientSecret, closure_7), done: false };
              return obj19;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else {
          error = value.error;
          if (null != error) {
            const obj21 = { error: error.message };
            obj = obj21;
          } else {
            obj = {};
          }
          c4 = 0;
          c6 = 3;
          const obj22 = { value: obj, done: true };
          return obj22;
        }
      } catch (tmp48) {
        if (0 === c4) {
          c6 = 3;
          throw tmp48;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ Endpoints: metroRequire, PaymentSettings: metroImportDefault } = Constants);
let tmp3 = new LoggerDefault("StripeUtils");
const logger = tmp3;
const map = new Map();
const set = new Set();
let closure_11 = { REQUIRES_PAYMENT_METHOD: "requires_payment_method", REQUIRES_CONFIRMATION: "requires_confirmation", REQUIRES_ACTION: "requires_action", PROCESSING: "processing", CANCELED: "canceled", SUCCEEDED: "succeeded" };
let closure_16 = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
let result = size.fileFinishedImporting("utils/StripeUtils.tsx");

export function validateExpiry(arg0) {
  let tmp4;
  let tmp5;
  function parseExpString(str) {
    let items1;
    let tmp5;
    let tmp6;
    let closure_0 = str;
    const parts = str.split(/[.\-/\s]+/g);
    if (2 !== parts.length) {
      let _HermesInternal = HermesInternal;
      let str3 = "You passed an invalid expiration date ";
      let combined = "You passed an invalid expiration date " + str + "" + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
    }
    const mapped = parts.map((item) => {
      const parsed = parseInt(item);
      if (isNaN(parsed)) {
        const _HermesInternal = HermesInternal;
        let str3 = "" + parts + " is not a number.";
        const tmp3 = closure_0;
        if (str3 == null) {
          str3 = "";
        }
        const _HermesInternal2 = HermesInternal;
        const combined = "You passed an invalid expiration date " + tmp3 + str3 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
      }
      if (parsed < 1) {
        const _HermesInternal3 = HermesInternal;
        const combined1 = "" + parsed + " is less than one.";
        let str8 = combined1;
        const tmp7 = closure_0;
        if (combined1 == null) {
          str8 = "";
        }
        const _HermesInternal4 = HermesInternal;
        const combined2 = "You passed an invalid expiration date " + tmp7 + str8 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
      }
      return parsed;
    });
    if (mapped[0] > 12) {
      const items = [, ];
      [arr3[1], arr3[0]] = mapped;
      items1 = items;
    } else {
      items1 = [, ];
      [arr2[0], arr2[1]] = mapped;
    }
    [tmp5, tmp6] = _slicedToArray(items1, 2);
    const tmp4 = _slicedToArray(items1, 2);
    if (tmp5 > 12) {
      let tmp7 = globalThis;
      let _HermesInternal2 = HermesInternal;
      let str6 = "Month must be a number 1-12, not " + tmp5 + ".";
      if (str6 == null) {
        str6 = "";
      }
      let _HermesInternal3 = HermesInternal;
      let str8 = "You passed an invalid expiration date ";
      let combined1 = "You passed an invalid expiration date " + str + str6 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
    }
    let sum = tmp6;
    if (tmp6 < 100) {
      sum = tmp6 + 2000;
    }
    const items2 = [tmp5, sum];
    return items2;
  }
  try {
    let tmp3 = _slicedToArray(parseExpString(arg0), 2);
    [tmp4, tmp5] = tmp3;
    const tmp6 = globalThis;
    const _Date = Date;
    let tmp7 = tmp5;
    const self = this;
    const self2 = this;
    const date = new Date(tmp5, tmp4);
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date1 = new Date();
    date.setMonth(date.getMonth() - 1);
    date.setMonth(date.getMonth() + 1, 1);
    return date > date1;
  } catch (err) {
    return false;
  }
}
export { getStripe };
export { fetchStripePaymentIntentInfo };
export function getStripeClientMode() {
  let str2;
  if (null == metroImportDefault.STRIPE.KEY) {
    logger.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", metroImportDefault.STRIPE.KEY);
    str2 = "unknown";
  } else {
    const KEY = tmp.STRIPE.KEY;
    str2 = "live";
    if (!KEY.startsWith("pk_live")) {
      const KEY2 = tmp.STRIPE.KEY;
      let str4 = "test";
      if (!KEY2.startsWith("pk_test")) {
        logger.warn("Unexpected value for Stripe public key: ", metroImportDefault.STRIPE.KEY);
        str4 = "unknown";
      }
      str2 = str4;
    }
  }
  return str2;
}
export function parseStripePaymentMethod(billing_details) {
  let str2;
  let str3;
  let str4;
  let str5;
  let str6;
  let str7;
  billing_details = billing_details.billing_details;
  let address = billing_details.address;
  if (address == null) {
    address = {};
  }
  let str = billing_details.name;
  if (str == null) {
    str = "";
  }
  obj = { name: str, line1: str2, line2: str3, city: str4, state: str5, country: str6, postalCode: str7 };
  str2 = address.line1;
  if (str2 == null) {
    str2 = "";
  }
  str3 = address.line2;
  if (str3 == null) {
    str3 = "";
  }
  str4 = address.city;
  if (str4 == null) {
    str4 = "";
  }
  str5 = address.state;
  if (str5 == null) {
    str5 = "";
  }
  str6 = address.country;
  if (str6 == null) {
    str6 = "";
  }
  str7 = address.postal_code;
  if (str7 == null) {
    str7 = "";
  }
  return { token: billing_details.id, billingAddressInfo: obj };
}
export function parseBillingAddressInfoToStripeBillingDetails(name) {
  return { name: name.name, address: { line1: name.line1, line2: name.line2, city: name.city, state: name.state, postal_code: name.postalCode, country: name.country } };
}
export function authenticatePaymentIntentForPaymentId() {
  return obj(...arguments);
}
export function getStripeElementLocale(arg0) {
  let tmp = closure_16[arg0];
  if (tmp == null) {
    tmp = arg0;
  }
  return tmp;
}
export function useStripeLocale() {
  const items = [LocaleStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    locale = locale.locale;
    let tmp = closure_1_16[locale];
    if (tmp == null) {
      tmp = locale;
    }
    return tmp;
  });
}
