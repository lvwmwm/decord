// Module ID: 4448
// Function ID: 39054
// Name: _validatePaymentSourceBillingAddress
// Dependencies: []
// Exports: createPaymentSource, dispatchConfirmationError, popupBridgeState, validatePaymentSourceBillingAddress

// Module 4448 (_validatePaymentSourceBillingAddress)
async function _validatePaymentSourceBillingAddress(name, arg1) {
  const HTTP = callback(closure_2[4]).HTTP;
  let obj = { url: constants.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS, body: { billing_address: obj }, rejectWithError: false };
  obj = { name: name.name, line_1: name.line1, line_2: name.line2, city: name.city, state: name.state, postal_code: name.postalCode, country: name.country, email: name.email };
  return yield HTTP.post(obj).body.token;
}
async function _popupBridgeState(paymentSourceType, arg1) {
  const HTTP = callback(closure_2[4]).HTTP;
  let obj = { lc: null, type: null, end: null, url: closure_7.BILLING_POPUP_BRIDGE(paymentSourceType) };
  const state = yield HTTP.post(obj).body.state;
  obj = { type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state, paymentSourceType };
  callback2(closure_2[6]).dispatch(obj);
  return state;
}
async function _createPaymentSource(arg0, arg1, arg2, arg3, arg4) {
  const fn = function*(payment_gateway, token, name, analyticsLocation) {
    let flag = arg4;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = callback2(closure_2[6]);
    obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    const HTTP = callback(closure_2[4]).HTTP;
    obj = { url: constants.BILLING_PAYMENT_SOURCES, query: obj };
    obj = { location: analyticsLocation.analyticsLocation };
    const obj1 = { payment_gateway, token, billing_address: obj2, billing_address_token: analyticsLocation.billingAddressToken, bank: analyticsLocation.bank };
    let tmp3;
    if (null != analyticsLocation.pix) {
      const obj3 = { tax_id: analyticsLocation.pix.taxId };
      tmp3 = obj3;
    }
    obj1.pix = tmp3;
    obj1.return_url = analyticsLocation.returnUrl;
    obj1.default = flag;
    obj.body = obj1;
    obj.rejectWithError = false;
    const fromServer = closure_4.createFromServer(yield HTTP.post(obj).body);
    callback2(closure_2[6]).dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: fromServer });
    return fromServer;
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const StripeErrorTypes = arg1(dependencyMap[2]).StripeErrorTypes;
({ AnalyticEvents: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/billing/actions/BillingSharedActionCreators.tsx");

export const validatePaymentSourceBillingAddress = function validatePaymentSourceBillingAddress(email) {
  return _validatePaymentSourceBillingAddress(...arguments);
};
export const dispatchConfirmationError = function dispatchConfirmationError(error, flag, stringResult, arg3) {
  let payment_method;
  let message = error;
  let obj = arg3;
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = flag(dependencyMap[7]).intl;
    stringResult = intl.string(flag(dependencyMap[7]).t.khEaRI);
  }
  if (obj === undefined) {
    obj = {};
  }
  if (StripeErrorTypes.includes(message.type)) {
    let combined = stringResult;
    if (null != message.message) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringResult + ": " + message.message;
    }
    obj = { failure_message: combined };
    ({ type: obj3.error_type, code: obj3.failure_code, decline_code: obj3.failure_sub_code, payment_method } = message);
    let type;
    if (null != payment_method) {
      type = payment_method.type;
    }
    obj.payment_source_type = type;
    if ("card_error" === message.type) {
      let obj3 = importDefault(dependencyMap[8]);
      obj = {};
      const merged = Object.assign(obj);
      const _Error = Error;
      error = new Error();
      obj["stacktrace"] = error.stack;
      obj3.track(constants.PAYMENT_SOURCE_CREATION_FAILED, obj);
      flag = false;
    }
    const BillingError2 = flag(dependencyMap[9]).BillingError;
    const prototype3 = BillingError2.prototype;
    let billingError2 = new BillingError2(combined);
    let flag2 = flag;
    let tmp13 = obj;
  } else {
    const obj1 = {};
    const BillingError = flag(dependencyMap[9]).BillingError;
    let tmp6 = message;
    if ("string" === typeof message) {
      tmp6 = stringResult;
    }
    const prototype = BillingError.prototype;
    const billingError = new BillingError(tmp6);
    ({ message: obj2.failure_message, code: obj2.status_code } = billingError);
    flag2 = flag;
    billingError2 = billingError;
    tmp13 = obj1;
    if (429 === billingError.code) {
      flag2 = false;
      billingError2 = billingError;
      tmp13 = obj1;
    }
  }
  const obj2 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError2 };
  importDefault(dependencyMap[6]).dispatch(obj2);
  if ("string" !== typeof message) {
    message = billingError2.message;
  }
  const error1 = new Error(message);
  if (flag2) {
    obj3 = {};
    const merged1 = Object.assign(obj);
    const obj4 = {};
    const merged2 = Object.assign(tmp13);
    const merged3 = Object.assign(obj.extra);
    obj3["extra"] = obj4;
    const result = flag(dependencyMap[10]).captureBillingException(error1, obj3);
    const obj8 = flag(dependencyMap[10]);
  }
  return error1;
};
export const popupBridgeState = function popupBridgeState(type) {
  return _popupBridgeState(...arguments);
};
export const createPaymentSource = function createPaymentSource(STRIPE, id, billingAddressInfo, arg3, arg4) {
  return _createPaymentSource(...arguments);
};
