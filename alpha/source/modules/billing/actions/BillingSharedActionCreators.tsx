// Module ID: 6768
// Function ID: 6769
// Name: BillingSharedActionCreators
// Dependencies: [5, 2177, 1072, 1285, 5126, 572, 1113, 5118, 1256, 6757, 6769, 2]
// Exports: createPaymentSource, dispatchConfirmationError, popupBridgeState, validatePaymentSourceBillingAddress

// Module 6768 (BillingSharedActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import BillingUtils from "BillingUtils" /* 5118 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6757 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PaymentSourceRecord from "PaymentSourceRecord" /* 2177 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_7;

let hasOwnProperty;
let metroRequire;
let obj = function _validatePaymentSourceBillingAddress() {
  obj = _asyncToGenerator(async (error) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj6;
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              error = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS, body: obj6, rejectWithError: false };
              obj6 = { billing_address: obj7 };
              obj7 = { name: null, line_1: null, line_2: null, city: null, state: null, postal_code: null, country: null, email: null };
              ({ name: obj11.name, line1: obj11.line_1, line2: obj11.line_2, city: obj11.city, state: obj11.state, postalCode: obj11.postal_code, country: obj11.country, email: obj11.email } = error);
              c5 = 2;
              c6 = 1;
              const obj8 = { value: HTTP.post(request), done: false };
              return obj8;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            const obj3 = closure_130_0(closure_130_2[4]);
            error = obj3.parseV8BillingAddressSkemaErrorToBillingError(closure_1);
            const obj9 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error };
            const obj4 = closure_130_1(closure_130_2[5]);
            obj4.dispatch(obj9);
            throw error;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: value.body.token, done: true };
          }
        } catch (tmp17) {
          closure_3 = tmp17;
          if (0 === c4) {
            c6 = 3;
            throw tmp17;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _popupBridgeState() {
  obj = _asyncToGenerator(async (paymentSourceType) => {
    let closure_1;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      const HTTP = HTTPUtils.HTTP;
      const post = HTTP.post;
      const obj4 = { url: closure_2_6.BILLING_POPUP_BRIDGE(paymentSourceType), oldFormErrors: true, rejectWithError: true };
      await post(obj4);
      const state = value.body.state;
      const obj7 = { type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state, paymentSourceType };
      obj = closure_130_1(closure_130_2[5]);
      obj.dispatch(obj7);
      return state;
    })();
  });
  return obj(...arguments);
};
obj = function _createPaymentSource() {
  obj = _asyncToGenerator(async (payment_gateway, token, arg2, arg3) => {
    let closure_6;
    const user = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    const iter = (async function(arg0, value, arg2, arg3) {
      let obj5;
      let obj7;
      let obj8;
      let tmp48;
      function addFieldsToBillingError(billingError, body) {
        let adyen_redirect_url;
        if (body != null) {
          body = body.body;
          if (body != null) {
            adyen_redirect_url = body.adyen_redirect_url;
          }
        }
        if (adyen_redirect_url) {
          let adyen_redirect_url1;
          const fields = billingError.fields;
          if (body != null) {
            const body2 = body.body;
            if (body2 != null) {
              adyen_redirect_url1 = body2.adyen_redirect_url;
            }
          }
          fields.adyen_redirect_url = adyen_redirect_url1;
        }
      }
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c8;
        try {
          let flag;
          let tmp;
          let billingError;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              body = tmp4;
              flag = closure_4;
              if (closure_4 === undefined) {
                flag = false;
              }
              body = undefined;
              tmp = undefined;
              billingError = undefined;
              c9 = 1;
              c10 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              const obj13 = closure_134_1(closure_134_2[5]);
              obj13.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              c8 = 1;
              const HTTP = closure_134_0(closure_134_2[3]).HTTP;
              const request = { url: closure_134_6.BILLING_PAYMENT_SOURCES, query: obj5, body: obj7, rejectWithError: false };
              obj7 = { payment_gateway, token, billing_address: obj8, billing_address_token: closure_3.billingAddressToken, bank: closure_3.bank, pix: tmp48, return_url: closure_3.returnUrl, default: flag };
              tmp48 = undefined;
              const post = HTTP.post;
              obj5 = { location: closure_3.analyticsLocation };
              obj8 = { name: user.name, line_1: user.line1, line_2: user.line2, city: user.city, state: user.state, postal_code: user.postalCode, country: user.country, email: user.email };
              if (null != closure_3.pix) {
                tmp48 = { tax_id: closure_3.pix.taxId };
                const obj9 = { tax_id: closure_3.pix.taxId };
              }
              c9 = 3;
              c10 = 1;
              const obj10 = { value: post(request), done: false };
              return obj10;
            }
          } else if (2 === c9) {
            c8 = 0;
            message = closure_7;
            if (message instanceof closure_134_0(closure_134_2[10]).CaptchaCancelError) {
              message = message.message;
              const self = this;
              const self2 = this;
              billingError = new tmp22(tmp23[9]).BillingError(message, closure_134_0(closure_134_2[4]).ErrorCodes.INVALID_PAYMENT_SOURCE);
            } else {
              const tmp22Result = closure_134_0(closure_134_2[4]);
              billingError = tmp22Result.parseV8BillingAddressSkemaErrorToBillingError(message);
            }
            addFieldsToBillingError(billingError, message);
            if (billingError.code !== closure_134_0(closure_134_2[4]).ErrorCodes.CONFIRMATION_REQUIRED) {
              const obj11 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError };
              const obj6 = closure_134_1(closure_134_2[5]);
              obj6.dispatch(obj11);
            }
            throw billingError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            body = value;
            tmp = closure_134_4.createFromServer(body.body);
            const obj14 = { type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: tmp };
            obj = closure_134_1(closure_134_2[5]);
            obj.dispatch(obj14);
            c8 = 0;
            c10 = 3;
            return { value: tmp, done: true };
          }
        } catch (tmp56) {
          closure_7 = tmp56;
          if (0 === c8) {
            c10 = 3;
            throw tmp56;
          } else {
            c9 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, Endpoints: metroRequire } = Constants);
const set = new Set(["setup_intent_authentication_failure", "payment_intent_authentication_failure"]);
let result = size.fileFinishedImporting("modules/billing/actions/BillingSharedActionCreators.tsx");

export function validatePaymentSourceBillingAddress() {
  return obj(...arguments);
}
export function dispatchConfirmationError(error, captureException) {
  let _String2;
  let _String3;
  let _String4;
  let billingError;
  let code;
  let code2;
  let flag2;
  let obj16;
  let obj6;
  let payment_method;
  let str2;
  let str3;
  let str4;
  let tmp12;
  let type;
  obj = captureException;
  if (captureException == null) {
    obj = {};
  }
  let defaultErrorMessage = obj.defaultErrorMessage;
  if (undefined === defaultErrorMessage) {
    const intl = intl2.intl;
    defaultErrorMessage = intl.string(intl2.t.khEaRI);
  }
  let prop = obj.captureExceptionOptions;
  if (undefined === prop) {
    prop = {};
  }
  let flag;
  if (captureException != null) {
    flag = captureException.captureException;
  }
  if (flag == null) {
    flag = true;
  }
  const obj3 = BillingUtils;
  if (obj3.isOfTypeStripeError(error)) {
    let combined = defaultErrorMessage;
    if (null != error.message) {
      const _HermesInternal = HermesInternal;
      combined = "" + defaultErrorMessage + ": " + error.message;
    }
    const obj2 = { failure_message: combined, error_type: null, failure_code: null, failure_sub_code: null, payment_source_type: type };
    ({ type: obj7.error_type, code: obj7.failure_code, decline_code: obj7.failure_sub_code, payment_method } = error);
    type = undefined;
    if (payment_method != null) {
      type = payment_method.type;
    }
    let tmp17 = "card_error" === error.type || "validation_error" === error.type;
    if (!tmp17) {
      const hasItem = "invalid_request_error" === error.type && null != error.code && set.has(error.code);
      tmp17 = hasItem;
    }
    if (tmp17) {
      const obj4 = { stacktrace: error.stack };
      const track = AnalyticsUtilsDefault.track;
      const PAYMENT_SOURCE_CREATION_FAILED = hasOwnProperty.PAYMENT_SOURCE_CREATION_FAILED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(obj2);
      const _Error = Error;
      const self3 = this;
      const self4 = this;
      error = new Error();
      track(PAYMENT_SOURCE_CREATION_FAILED, obj4);
      flag = false;
    }
    obj6 = {};
    const self5 = this;
    const self6 = this;
    billingError = new tmp3(6757).BillingError(combined);
    flag2 = flag;
    tmp12 = obj2;
  } else {
    let str;
    const _String = String;
    if (error != null) {
      str = error.type;
    }
    if (str == null) {
      str = "unknown";
    }
    const obj8 = { raw_error_type: _String(str), raw_error_code: _String2(str2), raw_error_name: _String3(str3), raw_error_decline_code: _String4(str4) };
    str2 = undefined;
    _String2 = String;
    if (error != null) {
      str2 = error.code;
    }
    if (str2 == null) {
      str2 = "unknown";
    }
    str3 = undefined;
    _String3 = String;
    if (error != null) {
      str3 = error.name;
    }
    if (str3 == null) {
      str3 = "unknown";
    }
    str4 = undefined;
    _String4 = String;
    if (error != null) {
      str4 = error.decline_code;
    }
    if (str4 == null) {
      str4 = "unknown";
    }
    let billingError1 = error;
    if (!(error instanceof V6OrEarlierAPIError.BillingError)) {
      let tmp7 = error;
      const BillingError = tmp3(6757).BillingError;
      if (typeof error === "string") {
        tmp7 = defaultErrorMessage;
      }
      const self = this;
      const self2 = this;
      billingError1 = new BillingError(tmp7);
    }
    const obj10 = { failure_message: null, status_code: null };
    ({ message: obj5.failure_message, code: obj5.status_code } = billingError1);
    const merged1 = Object.assign(obj8);
    obj6 = obj8;
    flag2 = flag;
    tmp12 = obj10;
    billingError = billingError1;
    if (429 === billingError1.status) {
      flag2 = false;
      obj6 = obj8;
      tmp12 = obj10;
      billingError = billingError1;
    }
  }
  const obj9 = DispatcherDefault;
  obj9.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError });
  let message = error;
  const _Error2 = Error;
  if (typeof error !== "string") {
    message = billingError.message;
  }
  const _Error21 = new _Error2(message);
  if (flag2) {
    let tmp41;
    const obj11 = { extra: obj16 };
    const merged2 = Object.assign(prop);
    const obj12 = { fingerprint: null, tags: null };
    const tmp3Result = BillingUtils;
    if (tmp3Result.isOfTypeStripeError(error)) {
      const items = ["billing-confirmation-error"];
      ({ type: arr2[1], code } = error);
      if (code == null) {
        code = "unknown";
      }
      items[2] = code;
      obj12.fingerprint = items;
      const obj13 = { failure_code: code2 };
      const merged3 = Object.assign(prop.tags);
      ({ type: obj14.error_type, code: code2 } = error);
      if (code2 == null) {
        code2 = "unknown";
      }
      obj12.tags = obj13;
      tmp41 = obj12;
    } else {
      const items1 = ["billing-confirmation-error", "non_stripe", "unknown" !== obj6.raw_error_type ? obj6.raw_error_type : obj6.raw_error_name];
      obj12.fingerprint = items1;
      const obj15 = {};
      const merged4 = Object.assign(prop.tags);
      const merged5 = Object.assign(obj6);
      obj12.tags = obj15;
      tmp41 = obj12;
    }
    const merged6 = Object.assign(tmp41);
    obj16 = {};
    const merged7 = Object.assign(tmp12);
    const merged8 = Object.assign(prop.extra);
    const tmp3Result2 = BillingUtils;
    const result = tmp3Result2.captureBillingException(_Error21, obj11);
  }
  return _Error21;
}
export function popupBridgeState() {
  return obj(...arguments);
}
export function createPaymentSource() {
  return obj(...arguments);
}
