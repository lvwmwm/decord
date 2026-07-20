// Module ID: 4443
// Function ID: 38898
// Name: _deletePaymentSource
// Dependencies: []
// Exports: cancelPaymentAuthentication, cancelSubscription, changePaymentSource, changeSubscriptionCurrency, clearAndFetchPaymentSourceCreationContext, clearPaymentAuthenticationError, clearRemovePaymentSourceError, clearUpdatePaymentSourceError, createSubscription, deletePaymentSource, deleteRenewalMutation, fetchIpCountryCode, fetchIpLocation, fetchMostRecentSubscription, fetchPaymentSource, fetchPaymentSources, fetchPayments, fetchSubscriptions, fetchWalletInformation, getPerksRelevance, payInvoiceManually, popupBridgeCallback, redeemReactivationOffer, redeemUserDiscountOffer, redirectedPaymentSucceeded, resetPaymentIntentId, resetSubscriptionStore, resubscribeToSubscription, startBrowserCheckout, updatePaymentSource, upgradeSubscription, voidPendingPayment

// Module 4443 (_deletePaymentSource)
async function _deletePaymentSource(id, arg1) {
  let obj = callback2(closure_2[8]);
  obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_10.BILLING_PAYMENT_SOURCE(id) };
  yield HTTP.del(obj);
  obj = { type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id };
  callback2(closure_2[8]).dispatch(obj);
}
async function _updatePaymentSource(id, billingAddress, arg2) {
  let line1;
  let line2;
  let postalCode;
  let obj = callback2(closure_2[8]);
  obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
  billingAddress = billingAddress.billingAddress;
  ({ line1, line2, postalCode } = billingAddress);
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { url: closure_10.BILLING_PAYMENT_SOURCE(id) };
  obj = {};
  const obj1 = {};
  const merged = Object.assign(callback3(billingAddress, closure_3));
  obj1["line_1"] = line1;
  obj1["line_2"] = line2;
  obj1["postal_code"] = postalCode;
  obj.billing_address = obj1;
  ({ expiresMonth: obj3.expires_month, expiresYear: obj3.expires_year, isDefault: obj3.default } = billingAddress);
  obj.body = obj;
  obj.rejectWithError = false;
  const fromServer = closure_6.createFromServer(yield HTTP.patch(obj).body);
  const tmp2 = callback3(billingAddress, closure_3);
  callback2(closure_2[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: fromServer });
}
async function _fetchPaymentSources() {
  let value;
  if (!obj.isPaymentSourceFetching) {
    const HTTP = value(closure_2[9]).HTTP;
    let obj = { CONVERSATIONS: null, replace: null, push: null, url: constants.BILLING_PAYMENT_SOURCES };
    value = HTTP.get(obj);
    callback(closure_2[8]).wait(() => {
      let obj = callback(closure_2[8]);
      obj = { type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: value };
      return obj.dispatch(obj);
    });
    const tmp7 = yield value;
    const obj2 = callback(closure_2[8]);
    obj = { type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: tmp7.body };
    callback(closure_2[8]).dispatch(obj);
    return tmp7;
  }
}
async function _fetchPaymentSource(id, arg1) {
  const HTTP = callback(closure_2[9]).HTTP;
  const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_10.BILLING_PAYMENT_SOURCE(id) };
  const tmp = yield HTTP.get(obj);
  const fromServer = closure_6.createFromServer(tmp.body);
  callback2(closure_2[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: fromServer });
  return tmp;
}
async function _fetchWalletInformation(paymentSourceId, arg1) {
  let obj = callback2(closure_2[8]);
  obj = { type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { url: closure_10.BILLING_WALLET_INFORMATION(paymentSourceId), query: { get_history: false }, rejectWithError: true };
  const tmp3 = yield HTTP.get(obj);
  const obj1 = { currency: tmp3.body.currency, amount: tmp3.body.balance };
  callback2(closure_2[8]).dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS", paymentSourceId, currency: obj1.currency, amount: obj1.amount });
  return obj1;
}
function fetchPayment() {
  return _fetchPayment(...arguments);
}
async function _fetchPayment(arg0, arg1) {
  const HTTP = callback(closure_2[9]).HTTP;
  let obj = { url: closure_10.BILLING_PAYMENT(arg0), rejectWithError: true };
  const tmp = yield HTTP.get(obj);
  obj = { type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: tmp.body };
  callback2(closure_2[8]).dispatch(obj);
  return tmp;
}
async function _fetchPayments() {
  const fn = function*(arg0, before) {
    let num = arg0;
    if (num === undefined) {
      num = 10;
    }
    yield undefined;
    let obj = callback2(closure_2[8]);
    obj.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    const HTTP = callback(closure_2[9]).HTTP;
    obj = { url: constants.BILLING_PAYMENTS, query: obj, oldFormErrors: true, rejectWithError: false };
    obj = { limit: num, before };
    const tmp3 = yield HTTP.get(obj);
    callback2(closure_2[8]).dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: tmp3.body });
    return tmp3;
  };
  fn.next();
  return fn;
}
async function _fetchSubscriptions() {
  let obj = callback2(closure_2[8]);
  obj.wait(() => {
    callback(closure_2[8]).dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
  });
  let FULL_RESYNC = constants2.ADD_PERKS_IF_DETECTED;
  const lastLazyPerkSync = lastLazyPerkSync.getLastLazyPerkSync();
  let tmp3 = lastLazyPerkSync;
  let tmp5 = tmp4;
  if (null != lastLazyPerkSync) {
    let obj1 = callback2(closure_2[12])();
    tmp5 = obj1.diff(tmp3, "hours") >= 1;
  }
  if (tmp5) {
    FULL_RESYNC = constants2.FULL_RESYNC;
    tmp3 = callback2(closure_2[12])();
  }
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { CONVERSATIONS: null, replace: null, push: null, url: constants.BILLING_SUBSCRIPTIONS };
  obj = { sync_level: FULL_RESYNC };
  obj.query = obj;
  const tmp12 = yield HTTP.get(obj);
  if (null == tmp12.body) {
    const BillingError = callback(closure_2[10]).BillingError;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const prototype = BillingError.prototype;
    const billingError = new BillingError("response body is null, response: " + JSON.stringify(tmp12), tmp12.status);
    throw billingError;
  } else {
    obj1 = { type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: tmp13.body, lastLazyPerkSync: tmp3 };
    callback2(closure_2[8]).dispatch(obj1);
    return tmp13;
  }
}
async function _getPerksRelevance() {
  let obj = callback2(closure_2[8]);
  obj.wait(() => {
    callback(closure_2[8]).dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_START" });
  });
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { url: constants.BILLING_PERKS_RELEVANCE, rejectWithError: true };
  const tmp2 = yield HTTP.get(obj);
  obj = { type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS", res: tmp2.body };
  callback2(closure_2[8]).dispatch(obj);
}
async function _fetchMostRecentSubscription() {
  let obj = callback2(closure_2[8]);
  obj.wait(() => {
    callback(closure_2[8]).dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
  });
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { url: constants.BILLING_SUBSCRIPTIONS, query: obj, oldFormErrors: true, rejectWithError: true };
  obj = { spriteIndex: "dim", x: "da", size: "s", subscription_type: constants2.PREMIUM };
  const tmp2 = yield HTTP.get(obj);
  const dispatch = callback2(closure_2[8]).dispatch;
  if (tmp2.ok) {
    const obj1 = { type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS" };
    let first = null;
    if (tmp3.body.length > 0) {
      first = tmp3.body[0];
    }
    obj1.subscription = first;
    dispatch(obj1);
    const obj2 = { type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS" };
    let tmp13 = null;
    if (tmp3.body.length > 1) {
      tmp13 = tmp3.body[1];
    }
    obj2.subscription = tmp13;
    callback2(closure_2[8]).dispatch(obj2);
    const obj6 = callback2(closure_2[8]);
  } else {
    const obj3 = { type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" };
    dispatch(obj3);
  }
  return tmp2;
}
async function _createSubscription(arg0, arg1) {
  const fn = function*(arg0) {
    let code;
    let currency;
    let expectedInvoicePrice;
    let expectedRenewalPrice;
    let items;
    let loadId;
    let metadata;
    let paymentSource;
    let referralCode;
    let trialId;
    ({ items, paymentSource } = arg0);
    ({ trialId, code, currency, metadata, referralCode, loadId, expectedInvoicePrice, expectedRenewalPrice } = arg0);
    yield undefined;
    let obj = callback2(closure_2[8]);
    obj.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    let obj1 = callback(closure_2[13]);
    const result = obj1.coerceExistingItemsToNewItemInterval(items);
    let sum = null;
    if (null != paymentSource) {
      if (set.has(paymentSource.type)) {
        let obj2 = callback(closure_2[14]);
        const tmp9 = yield obj2.popupBridgeState(paymentSource.type);
        let str = "";
        const aPIBaseURL = callback(closure_2[9]).getAPIBaseURL();
        if (null != tmp9) {
          str = tmp9;
        }
        sum = aPIBaseURL + closure_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(paymentSource.type, str, "success");
        const obj4 = callback(closure_2[9]);
      }
      const HTTP = callback(closure_2[9]).HTTP;
      obj = { url: closure_10.BILLING_SUBSCRIPTIONS };
      obj = { items: result.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })) };
      let id = null;
      if (null != paymentSource) {
        id = paymentSource.id;
      }
      obj.payment_source_id = id;
      let tmp23 = null;
      if (null != paymentSource) {
        tmp23 = yield callback(closure_2[15]).createPaymentSourceToken(paymentSource);
        const obj7 = callback(closure_2[15]);
      }
      obj.payment_source_token = tmp23;
      obj.trial_id = trialId;
      obj.return_url = sum;
      obj.code = code;
      if (null != paymentSource) {
        let USD = currency;
      } else {
        USD = constants.USD;
      }
      obj.currency = USD;
      obj.metadata = metadata;
      obj.gateway_checkout_context = yield callback(closure_2[16]).createGatewayCheckoutContext(paymentSource);
      const obj8 = callback(closure_2[16]);
      obj.purchase_token = callback(closure_2[17]).getPurchaseToken();
      obj.referral_code = referralCode;
      obj.load_id = loadId;
      obj.expected_invoice_price = expectedInvoicePrice;
      obj.expected_renewal_price = expectedRenewalPrice;
      obj.body = obj;
      obj.oldFormErrors = true;
      obj.rejectWithError = false;
      const tmp34 = yield HTTP.post(obj);
      const obj9 = callback(closure_2[17]);
      obj1 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp34.body };
      callback2(closure_2[8]).dispatch(obj1);
      obj2 = { subscription: tmp34.body, redirectConfirmation: false };
      return obj2;
    }
  };
  fn.next();
  return fn;
}
async function _payInvoiceManually(id, arg1, paymentSource, currency, load_id, arg5) {
  let sum = null;
  if (null != paymentSource) {
    if (set2.has(tmp.type)) {
      let obj = callback(closure_2[14]);
      const tmp8 = yield obj.popupBridgeState(tmp.type);
      let obj1 = callback(closure_2[9]);
      let str = "";
      const aPIBaseURL = obj1.getAPIBaseURL();
      if (null != tmp8) {
        str = tmp8;
      }
      sum = aPIBaseURL + closure_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(tmp.type, str, "success");
    }
    const HTTP = callback(closure_2[9]).HTTP;
    obj = { url: closure_10.BILLING_INVOICE_MANUAL_PAYMENT(id.id, arg1) };
    obj = {};
    id = null;
    if (null != tmp) {
      id = tmp.id;
    }
    obj.payment_source_id = id;
    let tmp21 = null;
    if (null != tmp) {
      tmp21 = yield callback(closure_2[15]).createPaymentSourceToken(tmp);
      const obj5 = callback(closure_2[15]);
    }
    obj.payment_source_token = tmp21;
    obj.return_url = sum;
    obj.currency = currency;
    obj.purchase_token = callback(closure_2[17]).getPurchaseToken();
    obj.load_id = load_id;
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    const tmp27 = yield HTTP.post(obj);
    const obj6 = callback(closure_2[17]);
    obj1 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp27.body };
    callback2(closure_2[8]).dispatch(obj1);
    const obj2 = { subscription: tmp27.body, redirectConfirmation: set.has(tmp.type) };
    return obj2;
  }
}
function handlePaymentConfirmation(arg0, type) {
  if (null != type) {
    if (set.has(type.type)) {
      const AdyenPaymentConfirmationHandler = type(dependencyMap[18]).AdyenPaymentConfirmationHandler;
      const prototype = AdyenPaymentConfirmationHandler.prototype;
      const adyenPaymentConfirmationHandler = new AdyenPaymentConfirmationHandler(type, arg0);
      let confirmPaymentResult = adyenPaymentConfirmationHandler.confirmPayment();
    }
    return confirmPaymentResult;
  }
  confirmPaymentResult = new type(dependencyMap[18]).StripePaymentConfirmationHandler(type, arg0).confirmPayment();
}
async function _redirectedPaymentSucceeded(arg0, arg1) {
  const tmp = yield closure_25(arg0);
  let body;
  if (null != tmp) {
    body = tmp.body;
  }
  if (null == body) {
    throw callback(closure_2[14]).dispatchConfirmationError("could not fetch payment");
  } else {
    const fromServer = closure_6.createFromServer(tmp.body.payment_source);
    if (set.has(fromServer.type)) {
      let status;
      if (null != tmp) {
        body = tmp.body;
        if (null != body) {
          status = body.status;
        }
      }
      if (status === constants2.FAILED) {
        throw callback(closure_2[14]).dispatchConfirmationError("payment failed");
      } else {
        let result = fromServer.paymentGateway !== constants.STRIPE;
        if (!result) {
          result = callback(closure_2[15]).paymentIntentSucceeded(arg0);
          const obj2 = callback(closure_2[15]);
        }
        return result;
      }
    } else {
      throw callback(closure_2[14]).dispatchConfirmationError("unsupported redirect payment source");
    }
  }
}
async function _cancelSubscription(id, location_stack, location, arg3) {
  let obj = callback2(closure_2[8]);
  obj.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { url: closure_10.BILLING_SUBSCRIPTION(id), query: obj, oldFormErrors: true, rejectWithError: false };
  obj = { location, location_stack };
  const tmp2 = yield HTTP.del(obj);
  callback2(closure_2[8]).dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" });
  return tmp2;
}
function updateSubscription(items, arg1, arg2, itemPlansTotalServerPrice, arg4, arg5) {
  return _updateSubscription(...arguments);
}
async function _updateSubscription(id, status, expected_invoice_price, expected_renewal_price, location_stack, location, load_id, arg7) {
  let obj = callback2(closure_2[8]);
  obj.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
  obj = { status: status.status };
  const paymentSource = status.paymentSource;
  id = undefined;
  if (null != paymentSource) {
    id = paymentSource.id;
  }
  obj.payment_source_id = id;
  let tmp3 = null;
  if (null != status.paymentSource) {
    let obj2 = callback(closure_2[15]);
    tmp3 = yield obj2.createPaymentSourceToken(status.paymentSource);
  }
  obj.payment_source_token = tmp3;
  obj.currency = status.currency;
  let obj3 = callback(closure_2[16]);
  obj.gateway_checkout_context = yield obj3.createGatewayCheckoutContext(status.paymentSource);
  obj.load_id = load_id;
  obj.pause_duration = status.pauseDuration;
  obj.purchase_token = callback(closure_2[17]).getPurchaseToken();
  obj.expected_invoice_price = expected_invoice_price;
  obj.expected_renewal_price = expected_renewal_price;
  if (null != status.paymentSource) {
    if (set.has(status.paymentSource.type)) {
      const tmp11 = yield callback(closure_2[14]).popupBridgeState(status.paymentSource.type);
      const obj6 = callback(closure_2[14]);
      let str = "";
      const aPIBaseURL = callback(closure_2[9]).getAPIBaseURL();
      if (null != tmp11) {
        str = tmp11;
      }
      tmp7.return_url = aPIBaseURL + closure_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(status.paymentSource.type, str, "success");
      const obj7 = callback(closure_2[9]);
    }
  }
  if (null != status.items) {
    const result = callback(closure_2[13]).coerceExistingItemsToNewItemInterval(status.items);
    tmp7.items = result.map((planId) => {
      let obj = Object.create(null);
      obj.planId = 0;
      obj = {};
      const merged = Object.assign(Object.assign(planId, obj));
      obj["plan_id"] = planId.planId;
      return obj;
    });
    const obj8 = callback(closure_2[13]);
  }
  const HTTP = callback(closure_2[9]).HTTP;
  obj = { url: closure_10.BILLING_SUBSCRIPTION(id.id), query: obj1, body: obj, oldFormErrors: true, rejectWithError: false };
  const tmp23 = yield HTTP.patch(obj);
  const obj1 = { location, location_stack };
  const obj5 = callback(closure_2[17]);
  obj2 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp23.body };
  callback2(closure_2[8]).dispatch(obj2);
  obj3 = { subscription: tmp23.body, redirectConfirmation: false };
  return obj3;
}
async function _voidPendingPayment(arg0, arg1) {
  const HTTP = callback(closure_2[9]).HTTP;
  const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_10.BILLING_PAYMENTS_VOID(arg0) };
  yield HTTP.post(obj);
}
async function _fetchIpCountryCode() {
  const fn = function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = false;
    }
    let value;
    yield undefined;
    if (!flag) {
      if (null != closure_7.ipCountryCodeRequest) {
        return closure_7.ipCountryCodeRequest;
      }
    }
    const HTTP = value(closure_2[9]).HTTP;
    value = HTTP.get({ url: constants.BILLING_COUNTRY_CODE, rejectWithError: false });
    callback(closure_2[8]).wait(() => {
      let obj = callback(closure_2[8]);
      obj = { type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: value };
      return obj.dispatch(obj);
    });
    const tmp7 = yield value;
    const obj = { url: constants.BILLING_COUNTRY_CODE, rejectWithError: false };
    const obj2 = callback(closure_2[8]);
    callback(closure_2[8]).dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: tmp7.body.country_code });
    return tmp7;
  };
  fn.next();
  return fn;
}
function fetchPaymentSourceCreationContext() {
  const HTTP = arg1(dependencyMap[9]).HTTP;
  const obj = { CONVERSATIONS: null, replace: null, push: null, url: closure_10.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT };
  return HTTP.get(obj);
}
async function _fetchIpLocation() {
  const fn = function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = false;
    }
    let value;
    yield undefined;
    if (!flag) {
      if (null != closure_7.ipLocationRequest) {
        return closure_7.ipLocationRequest;
      }
    }
    const HTTP = value(closure_2[9]).HTTP;
    value = HTTP.get({ url: constants.BILLING_LOCATION, rejectWithError: false });
    callback(closure_2[8]).wait(() => {
      let obj = callback(closure_2[8]);
      obj = { type: "BILLING_IP_LOCATION_FETCH_START", request: value };
      return obj.dispatch(obj);
    });
    const tmp7 = yield value;
    const country_code = tmp7.body.country_code;
    const obj = { url: constants.BILLING_LOCATION, rejectWithError: false };
    const obj2 = callback(closure_2[8]);
    callback(closure_2[8]).dispatch({ type: "BILLING_SET_IP_LOCATION", location: { countryCode: country_code, subdivisionCode: tmp7.body.subdivision_code } });
    const obj3 = callback(closure_2[8]);
    callback(closure_2[8]).dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: country_code });
    return tmp7;
  };
  fn.next();
  return fn;
}
async function _redeemReactivationOffer(id, id2, arg2) {
  const HTTP = callback(closure_2[9]).HTTP;
  let obj = { url: closure_10.REACTIVATION_OFFER_REDEEM(id.id, id2.id), rejectWithError: false };
  const tmp = yield HTTP.post(obj);
  obj = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp.body };
  callback2(closure_2[8]).dispatch(obj);
  const obj2 = callback2(closure_2[8]);
  obj = { type: "BILLING_USER_OFFER_REDEEMED", offerId: id2.id };
  callback2(closure_2[8]).dispatch(obj);
}
async function _redeemUserDiscountOffer(id, arg1) {
  const HTTP = callback(closure_2[9]).HTTP;
  let obj = { url: constants.USER_OFFER_REDEEM, body: obj, rejectWithError: true };
  obj = { user_discount_offer_id: id.id };
  yield HTTP.post(obj);
  obj = { type: "BILLING_USER_OFFER_REDEEMED", offerId: id.id };
  callback2(closure_2[8]).dispatch(obj);
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_9, Endpoints: closure_10, PaymentGateways: closure_11, REDIRECTED_PAYMENT_SOURCES: closure_12, SubscriptionStatusTypes: closure_13 } = arg1(dependencyMap[5]));
const UserLazyPerkSyncLevels = arg1(dependencyMap[6]).UserLazyPerkSyncLevels;
const tmp2 = arg1(dependencyMap[5]);
({ ADYEN_PAYMENT_SOURCES: closure_15, CurrencyCodes: closure_16, PaymentStatusTypes: closure_17, PREPAID_PAYMENT_SOURCES: closure_18, SubscriptionTypes: closure_19 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/billing/actions/BillingActionCreators.tsx");
for (const key10082 in arg1(arg6[15])) {
  let tmp5 = key10082;
  arg5[key10082] = arg1(arg6[15])[key10082];
}
for (const key10087 in arg1(arg6[14])) {
  let tmp6 = key10087;
  arg5[key10087] = arg1(arg6[14])[key10087];
}

export const deletePaymentSource = function deletePaymentSource() {
  return _deletePaymentSource(...arguments);
};
export const updatePaymentSource = function updatePaymentSource() {
  return _updatePaymentSource(...arguments);
};
export const fetchPaymentSources = function fetchPaymentSources() {
  return _fetchPaymentSources(...arguments);
};
export const fetchPaymentSource = function fetchPaymentSource() {
  return _fetchPaymentSource(...arguments);
};
export const fetchWalletInformation = function fetchWalletInformation(stateFromStores) {
  return _fetchWalletInformation(...arguments);
};
export { fetchPayment };
export const fetchPayments = function fetchPayments() {
  return _fetchPayments(...arguments);
};
export const fetchSubscriptions = function fetchSubscriptions(arg0) {
  return _fetchSubscriptions(...arguments);
};
export const getPerksRelevance = function getPerksRelevance() {
  return _getPerksRelevance(...arguments);
};
export const fetchMostRecentSubscription = function fetchMostRecentSubscription() {
  return _fetchMostRecentSubscription(...arguments);
};
export const createSubscription = function createSubscription() {
  return _createSubscription(...arguments);
};
export const payInvoiceManually = function payInvoiceManually() {
  return _payInvoiceManually(...arguments);
};
export { handlePaymentConfirmation };
export const redirectedPaymentSucceeded = function redirectedPaymentSucceeded() {
  return _redirectedPaymentSucceeded(...arguments);
};
export const cancelSubscription = function cancelSubscription(id, arg1) {
  return _cancelSubscription(...arguments);
};
export const deleteRenewalMutation = function deleteRenewalMutation(items) {
  let obj = { items: items.items };
  obj = { amount: 0, currency: items.currency };
  return updateSubscription(items, obj, obj, arg1(dependencyMap[13]).getItemPlansTotalServerPrice(items.items, items.currency, items.paymentSourceId), arg1);
};
export { updateSubscription };
export const resubscribeToSubscription = function resubscribeToSubscription(currency, arg1, id) {
  let items;
  let obj = { status: constants.ACTIVE, paymentSource: id, currency: arg3 };
  obj = { amount: 0, currency: currency.currency };
  id = undefined;
  ({ items, currency } = currency);
  if (null != id) {
    id = id.id;
  }
  return updateSubscription(currency, obj, obj, arg1(dependencyMap[13]).getItemPlansTotalServerPrice(items, currency, id), arg1, arg4);
};
export const upgradeSubscription = function upgradeSubscription(renewalMutations, basePlanId, arg2, itemPlansTotalServerPrice) {
  let obj = basePlanId(dependencyMap[13]);
  obj = { status: constants.ACTIVE, items: obj.getItemsWithUpsertedPremiumPlanId(renewalMutations, basePlanId) };
  return updateSubscription(renewalMutations, obj, arg2, itemPlansTotalServerPrice, arg4, arg5);
};
export const changeSubscriptionCurrency = function changeSubscriptionCurrency(items, currency, itemPlansTotalServerPrice) {
  let obj = { currency };
  obj = { amount: 0, currency: currency.toLowerCase() };
  return updateSubscription(items, obj, obj, itemPlansTotalServerPrice, arg3, arg4);
};
export const changePaymentSource = function changePaymentSource(items, paymentSource, currency) {
  let obj = { paymentSource };
  obj = { amount: 0, currency: currency.currency };
  return updateSubscription(items, obj, obj, currency, arg3, arg4);
};
export const clearUpdatePaymentSourceError = function clearUpdatePaymentSourceError() {
  importDefault(dependencyMap[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
};
export const clearRemovePaymentSourceError = function clearRemovePaymentSourceError() {
  importDefault(dependencyMap[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
};
export const clearPaymentAuthenticationError = function clearPaymentAuthenticationError() {
  importDefault(dependencyMap[8]).dispatch({ type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR" });
};
export const cancelPaymentAuthentication = function cancelPaymentAuthentication() {
  importDefault(dependencyMap[8]).dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
};
export const voidPendingPayment = function voidPendingPayment() {
  return _voidPendingPayment(...arguments);
};
export const popupBridgeCallback = function popupBridgeCallback(paymentSourceType) {
  let insecure;
  let path;
  let query;
  let state;
  paymentSourceType = paymentSourceType.paymentSourceType;
  const arg1 = paymentSourceType;
  ({ state, path, query, insecure } = paymentSourceType);
  let obj = importDefault(dependencyMap[8]);
  obj.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType });
  const HTTP = arg1(dependencyMap[9]).HTTP;
  obj = { url: closure_10.BILLING_POPUP_BRIDGE_CALLBACK(paymentSourceType), body: { state, path, query, insecure }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(obj).then((arg0) => {
    let obj = callback(closure_2[8]);
    obj = { type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType };
    obj.dispatch(obj);
    return arg0;
  });
};
export const fetchIpCountryCode = function fetchIpCountryCode() {
  return _fetchIpCountryCode(...arguments);
};
export { fetchPaymentSourceCreationContext };
export const clearAndFetchPaymentSourceCreationContext = function clearAndFetchPaymentSourceCreationContext() {
  importDefault(dependencyMap[8]).dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" });
  const obj = importDefault(dependencyMap[8]);
  const promise = fetchPaymentSourceCreationContext();
  fetchPaymentSourceCreationContext().then((body) => {
    body = body.body;
    if (null != body) {
      let obj = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS" };
      obj = {};
      const store_country = body.store_country;
      let tmp11 = null;
      if (null != store_country) {
        tmp11 = store_country;
      }
      obj.store_country = tmp11;
      let prop = body.allowed_payment_source_types;
      if (null == prop) {
        prop = [];
      }
      obj.allowed_payment_source_types = prop;
      let prop1 = body.allowed_billing_address_countries;
      if (null == prop1) {
        prop1 = [];
      }
      obj.allowed_billing_address_countries = prop1;
      obj.data = obj;
      callback(closure_2[8]).dispatch(obj);
      const obj3 = callback(closure_2[8]);
    } else {
      obj = callback(closure_2[8]);
      const obj1 = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL" };
      const _Error = Error;
      const error = new Error("Missing response body");
      obj1.error = error;
      obj.dispatch(obj1);
    }
  }).catch((arg0) => {
    let obj = callback(closure_2[8]);
    obj = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL" };
    let error = arg0;
    if (!(arg0 instanceof Error)) {
      const _Error = Error;
      const _String = String;
      error = new Error(String(arg0));
    }
    obj.error = error;
    obj.dispatch(obj);
  });
};
export const fetchIpLocation = function fetchIpLocation() {
  return _fetchIpLocation(...arguments);
};
export const resetPaymentIntentId = function resetPaymentIntentId() {
  importDefault(dependencyMap[8]).dispatch({ type: "RESET_PAYMENT_ID" });
};
export const resetSubscriptionStore = function resetSubscriptionStore() {
  importDefault(dependencyMap[8]).dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
};
export const startBrowserCheckout = function startBrowserCheckout(loadId) {
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId };
  obj.dispatch(obj);
};
export const redeemReactivationOffer = function redeemReactivationOffer() {
  return _redeemReactivationOffer(...arguments);
};
export const redeemUserDiscountOffer = function redeemUserDiscountOffer() {
  return _redeemUserDiscountOffer(...arguments);
};
