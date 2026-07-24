// Module ID: 4451
// Function ID: 38995
// Name: _deletePaymentSource
// Dependencies: [29, 5, 3780, 3778, 3782, 653, 3787, 482, 686, 507, 4029, 3798, 3712, 3776, 4452, 4454, 3791, 4460, 4461, 675, 2]
// Exports: cancelPaymentAuthentication, cancelSubscription, changePaymentSource, changeSubscriptionCurrency, clearAndFetchPaymentSourceCreationContext, clearPaymentAuthenticationError, clearRemovePaymentSourceError, clearUpdatePaymentSourceError, createSubscription, deletePaymentSource, deleteRenewalMutation, fetchIpCountryCode, fetchIpLocation, fetchMostRecentSubscription, fetchPaymentSource, fetchPaymentSources, fetchPayments, fetchSubscriptions, fetchWalletInformation, getPerksRelevance, payInvoiceManually, popupBridgeCallback, redeemReactivationOffer, redeemUserDiscountOffer, redirectedPaymentSucceeded, resetPaymentIntentId, resetSubscriptionStore, resubscribeToSubscription, startBrowserCheckout, updatePaymentSource, upgradeSubscription, voidPendingPayment

// Module 4451 (_deletePaymentSource)
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_5 from "ME";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { UserLazyPerkSyncLevels } from "set";
import sum from "sum";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_9;
const require = arg1;
async function _deletePaymentSource(arg0, arg1) {
  let obj = outer2_1(outer2_2[8]);
  obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_PAYMENT_SOURCE(arg0), oldFormErrors: true, rejectWithError: false };
  yield HTTP.del(obj);
  obj = { type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: arg0 };
  outer2_1(outer2_2[8]).dispatch(obj);
}
async function _updatePaymentSource(arg0, arg1, arg2) {
  let line1;
  let line2;
  let postalCode;
  let obj = outer2_1(outer2_2[8]);
  obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
  const billingAddress = arg1.billingAddress;
  ({ line1, line2, postalCode } = billingAddress);
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_PAYMENT_SOURCE(arg0) };
  obj = {};
  const obj1 = {};
  const merged = Object.assign(outer2_4(billingAddress, outer2_3));
  obj1["line_1"] = line1;
  obj1["line_2"] = line2;
  obj1["postal_code"] = postalCode;
  obj.billing_address = obj1;
  ({ expiresMonth: obj3.expires_month, expiresYear: obj3.expires_year, isDefault: obj3.default } = arg1);
  obj.body = obj;
  obj.rejectWithError = false;
  const fromServer = outer2_6.createFromServer(yield HTTP.patch(obj).body);
  const tmp2 = outer2_4(billingAddress, outer2_3);
  outer2_1(outer2_2[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: fromServer });
}
async function _fetchPaymentSources() {
  let c0;
  if (!outer2_7.isPaymentSourceFetching) {
    const HTTP = outer2_0(outer2_2[9]).HTTP;
    let obj = { url: outer2_10.BILLING_PAYMENT_SOURCES, oldFormErrors: true, rejectWithError: false };
    const value = HTTP.get(obj);
    c0 = value;
    outer2_1(outer2_2[8]).wait(() => {
      let obj = outer3_1(outer3_2[8]);
      obj = { type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: c0 };
      return obj.dispatch(obj);
    });
    const tmp7 = yield value;
    const obj2 = outer2_1(outer2_2[8]);
    obj = { type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: tmp7.body };
    outer2_1(outer2_2[8]).dispatch(obj);
    return tmp7;
  }
}
async function _fetchPaymentSource(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  const obj = { url: outer2_10.BILLING_PAYMENT_SOURCE(arg0), oldFormErrors: true, rejectWithError: false };
  const tmp = yield HTTP.get(obj);
  const fromServer = outer2_6.createFromServer(tmp.body);
  outer2_1(outer2_2[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: fromServer });
  return tmp;
}
async function _fetchWalletInformation(arg0, arg1) {
  let obj = outer2_1(outer2_2[8]);
  obj = { type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId: arg0 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_WALLET_INFORMATION(arg0), query: { get_history: false }, rejectWithError: true };
  const tmp3 = yield HTTP.get(obj);
  const obj1 = { currency: tmp3.body.currency, amount: tmp3.body.balance };
  outer2_1(outer2_2[8]).dispatch({ type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS", paymentSourceId: arg0, currency: obj1.currency, amount: obj1.amount });
  return obj1;
}
function fetchPayment() {
  return _fetchPayment(...arguments);
}
async function _fetchPayment(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  let obj = { url: outer2_10.BILLING_PAYMENT(arg0), rejectWithError: true };
  const tmp = yield HTTP.get(obj);
  obj = { type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: tmp.body };
  outer2_1(outer2_2[8]).dispatch(obj);
  return tmp;
}
async function _fetchPayments() {
  let iter = (function*(arg0, before) {
    let num = arg0;
    if (num === undefined) {
      num = 10;
    }
    yield undefined;
    let obj = outer2_1(outer2_2[8]);
    obj.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
    const HTTP = outer2_0(outer2_2[9]).HTTP;
    obj = { url: outer2_10.BILLING_PAYMENTS, query: obj, oldFormErrors: true, rejectWithError: false };
    obj = { limit: num, before };
    const tmp3 = yield HTTP.get(obj);
    outer2_1(outer2_2[8]).dispatch({ type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: tmp3.body });
    return tmp3;
  })();
  iter.next();
  return iter;
}
async function _fetchSubscriptions() {
  let obj = outer2_1(outer2_2[8]);
  obj.wait(() => {
    outer3_1(outer3_2[8]).dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
  });
  let FULL_RESYNC = outer2_14.ADD_PERKS_IF_DETECTED;
  const lastLazyPerkSync = outer2_8.getLastLazyPerkSync();
  let tmp3 = lastLazyPerkSync;
  let tmp5 = tmp4;
  if (null != lastLazyPerkSync) {
    let obj1 = outer2_1(outer2_2[12])();
    tmp5 = obj1.diff(tmp3, "hours") >= 1;
  }
  if (tmp5) {
    FULL_RESYNC = outer2_14.FULL_RESYNC;
    tmp3 = outer2_1(outer2_2[12])();
  }
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_SUBSCRIPTIONS, oldFormErrors: true, rejectWithError: false };
  obj = { sync_level: FULL_RESYNC };
  obj.query = obj;
  const tmp12 = yield HTTP.get(obj);
  if (null == tmp12.body) {
    const BillingError = outer2_0(outer2_2[10]).BillingError;
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    const prototype = BillingError.prototype;
    const billingError = new BillingError("response body is null, response: " + JSON.stringify(tmp12), tmp12.status);
    throw billingError;
  } else {
    obj1 = { type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: tmp13.body, lastLazyPerkSync: tmp3 };
    outer2_1(outer2_2[8]).dispatch(obj1);
    return tmp13;
  }
}
async function _getPerksRelevance() {
  let obj = outer2_1(outer2_2[8]);
  obj.wait(() => {
    outer3_1(outer3_2[8]).dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_START" });
  });
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_PERKS_RELEVANCE, rejectWithError: true };
  const tmp2 = yield HTTP.get(obj);
  obj = { type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS", res: tmp2.body };
  outer2_1(outer2_2[8]).dispatch(obj);
}
async function _fetchMostRecentSubscription() {
  let obj = outer2_1(outer2_2[8]);
  obj.wait(() => {
    outer3_1(outer3_2[8]).dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
  });
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_SUBSCRIPTIONS, query: obj, oldFormErrors: true, rejectWithError: true };
  obj = { include_inactive: true, limit: 2, exclude_unpaid_statuses: true, subscription_type: outer2_19.PREMIUM };
  const tmp2 = yield HTTP.get(obj);
  const dispatch = outer2_1(outer2_2[8]).dispatch;
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
    outer2_1(outer2_2[8]).dispatch(obj2);
    const obj6 = outer2_1(outer2_2[8]);
  } else {
    const obj3 = { type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" };
    dispatch(obj3);
  }
  return tmp2;
}
async function _createSubscription(arg0, arg1) {
  let iter = (function*(arg0) {
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
    let obj = outer2_1(outer2_2[8]);
    obj.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
    let obj1 = outer2_0(outer2_2[13]);
    const result = obj1.coerceExistingItemsToNewItemInterval(items);
    let sum = null;
    if (null != paymentSource) {
      if (outer2_15.has(paymentSource.type)) {
        let obj2 = outer2_0(outer2_2[14]);
        const tmp9 = yield obj2.popupBridgeState(paymentSource.type);
        let str = "";
        const aPIBaseURL = outer2_0(outer2_2[9]).getAPIBaseURL();
        if (null != tmp9) {
          str = tmp9;
        }
        sum = aPIBaseURL + outer2_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(paymentSource.type, str, "success");
        const obj4 = outer2_0(outer2_2[9]);
      }
      const HTTP = outer2_0(outer2_2[9]).HTTP;
      obj = { url: outer2_10.BILLING_SUBSCRIPTIONS };
      obj = { items: result.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })) };
      let id = null;
      if (null != paymentSource) {
        id = paymentSource.id;
      }
      obj.payment_source_id = id;
      let tmp23 = null;
      if (null != paymentSource) {
        tmp23 = yield outer2_0(outer2_2[15]).createPaymentSourceToken(paymentSource);
        const obj7 = outer2_0(outer2_2[15]);
      }
      obj.payment_source_token = tmp23;
      obj.trial_id = trialId;
      obj.return_url = sum;
      obj.code = code;
      if (null != paymentSource) {
        let USD = currency;
      } else {
        USD = outer2_16.USD;
      }
      obj.currency = USD;
      obj.metadata = metadata;
      obj.gateway_checkout_context = yield outer2_0(outer2_2[16]).createGatewayCheckoutContext(paymentSource);
      const obj8 = outer2_0(outer2_2[16]);
      obj.purchase_token = outer2_0(outer2_2[17]).getPurchaseToken();
      obj.referral_code = referralCode;
      obj.load_id = loadId;
      obj.expected_invoice_price = expectedInvoicePrice;
      obj.expected_renewal_price = expectedRenewalPrice;
      obj.body = obj;
      obj.oldFormErrors = true;
      obj.rejectWithError = false;
      const tmp34 = yield HTTP.post(obj);
      const obj9 = outer2_0(outer2_2[17]);
      obj1 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp34.body };
      outer2_1(outer2_2[8]).dispatch(obj1);
      obj2 = { subscription: tmp34.body, redirectConfirmation: false };
      return obj2;
    }
  })();
  iter.next();
  return iter;
}
async function _payInvoiceManually(arg0, arg1, arg2, arg3, arg4, arg5) {
  let sum = null;
  if (null != arg2) {
    if (outer2_18.has(tmp.type)) {
      let obj = outer2_0(outer2_2[14]);
      const tmp8 = yield obj.popupBridgeState(tmp.type);
      let obj1 = outer2_0(outer2_2[9]);
      let str = "";
      const aPIBaseURL = obj1.getAPIBaseURL();
      if (null != tmp8) {
        str = tmp8;
      }
      sum = aPIBaseURL + outer2_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(tmp.type, str, "success");
    }
    const HTTP = outer2_0(outer2_2[9]).HTTP;
    obj = { url: outer2_10.BILLING_INVOICE_MANUAL_PAYMENT(arg0.id, arg1) };
    obj = {};
    let id = null;
    if (null != tmp) {
      id = tmp.id;
    }
    obj.payment_source_id = id;
    let tmp21 = null;
    if (null != tmp) {
      tmp21 = yield outer2_0(outer2_2[15]).createPaymentSourceToken(tmp);
      const obj5 = outer2_0(outer2_2[15]);
    }
    obj.payment_source_token = tmp21;
    obj.return_url = sum;
    obj.currency = arg3;
    obj.purchase_token = outer2_0(outer2_2[17]).getPurchaseToken();
    obj.load_id = arg4;
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = false;
    const tmp27 = yield HTTP.post(obj);
    const obj6 = outer2_0(outer2_2[17]);
    obj1 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp27.body };
    outer2_1(outer2_2[8]).dispatch(obj1);
    const obj2 = { subscription: tmp27.body, redirectConfirmation: outer2_12.has(tmp.type) };
    return obj2;
  }
}
function handlePaymentConfirmation(arg0, type) {
  if (null != type) {
    if (set.has(type.type)) {
      const AdyenPaymentConfirmationHandler = require(4461) /* _callSuper */.AdyenPaymentConfirmationHandler;
      const prototype = AdyenPaymentConfirmationHandler.prototype;
      const adyenPaymentConfirmationHandler = new AdyenPaymentConfirmationHandler(type, arg0);
      let confirmPaymentResult = adyenPaymentConfirmationHandler.confirmPayment();
    }
    return confirmPaymentResult;
  }
  confirmPaymentResult = new require(4461) /* _callSuper */.StripePaymentConfirmationHandler(type, arg0).confirmPayment();
}
async function _redirectedPaymentSucceeded(arg0, arg1) {
  const tmp = yield outer2_25(arg0);
  let body;
  if (null != tmp) {
    body = tmp.body;
  }
  if (null == body) {
    throw outer2_0(outer2_2[14]).dispatchConfirmationError("could not fetch payment");
  } else {
    const fromServer = outer2_6.createFromServer(tmp.body.payment_source);
    if (outer2_12.has(fromServer.type)) {
      let status;
      if (null != tmp) {
        body = tmp.body;
        if (null != body) {
          status = body.status;
        }
      }
      if (status === outer2_17.FAILED) {
        throw outer2_0(outer2_2[14]).dispatchConfirmationError("payment failed");
      } else {
        let result = fromServer.paymentGateway !== outer2_11.STRIPE;
        if (!result) {
          result = outer2_0(outer2_2[15]).paymentIntentSucceeded(arg0);
          const obj2 = outer2_0(outer2_2[15]);
        }
        return result;
      }
    } else {
      throw outer2_0(outer2_2[14]).dispatchConfirmationError("unsupported redirect payment source");
    }
  }
}
async function _cancelSubscription(arg0, arg1, arg2, arg3) {
  let obj = outer2_1(outer2_2[8]);
  obj.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_SUBSCRIPTION(arg0), query: obj, oldFormErrors: true, rejectWithError: false };
  obj = { location: arg2, location_stack: arg1 };
  const tmp2 = yield HTTP.del(obj);
  outer2_1(outer2_2[8]).dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" });
  return tmp2;
}
function updateSubscription(items, arg1, arg2, itemPlansTotalServerPrice, arg4, arg5) {
  return _updateSubscription(...arguments);
}
async function _updateSubscription(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  let obj = outer2_1(outer2_2[8]);
  obj.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
  obj = { status: arg1.status };
  const paymentSource = arg1.paymentSource;
  let id;
  if (null != paymentSource) {
    id = paymentSource.id;
  }
  obj.payment_source_id = id;
  let tmp3 = null;
  if (null != arg1.paymentSource) {
    let obj2 = outer2_0(outer2_2[15]);
    tmp3 = yield obj2.createPaymentSourceToken(arg1.paymentSource);
  }
  obj.payment_source_token = tmp3;
  obj.currency = arg1.currency;
  let obj3 = outer2_0(outer2_2[16]);
  obj.gateway_checkout_context = yield obj3.createGatewayCheckoutContext(arg1.paymentSource);
  obj.load_id = arg6;
  obj.pause_duration = arg1.pauseDuration;
  obj.purchase_token = outer2_0(outer2_2[17]).getPurchaseToken();
  obj.expected_invoice_price = arg2;
  obj.expected_renewal_price = arg3;
  if (null != arg1.paymentSource) {
    if (outer2_15.has(arg1.paymentSource.type)) {
      const tmp11 = yield outer2_0(outer2_2[14]).popupBridgeState(arg1.paymentSource.type);
      const obj6 = outer2_0(outer2_2[14]);
      let str = "";
      const aPIBaseURL = outer2_0(outer2_2[9]).getAPIBaseURL();
      if (null != tmp11) {
        str = tmp11;
      }
      tmp7.return_url = aPIBaseURL + outer2_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(arg1.paymentSource.type, str, "success");
      const obj7 = outer2_0(outer2_2[9]);
    }
  }
  if (null != arg1.items) {
    const result = outer2_0(outer2_2[13]).coerceExistingItemsToNewItemInterval(arg1.items);
    tmp7.items = result.map((planId) => {
      let obj = Object.create(null);
      obj.planId = 0;
      obj = {};
      const merged = Object.assign(Object.assign(planId, obj));
      obj["plan_id"] = planId.planId;
      return obj;
    });
    const obj8 = outer2_0(outer2_2[13]);
  }
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.BILLING_SUBSCRIPTION(arg0.id), query: obj1, body: obj, oldFormErrors: true, rejectWithError: false };
  const tmp23 = yield HTTP.patch(obj);
  obj1 = { location: arg5, location_stack: arg4 };
  const obj5 = outer2_0(outer2_2[17]);
  obj2 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp23.body };
  outer2_1(outer2_2[8]).dispatch(obj2);
  obj3 = { subscription: tmp23.body, redirectConfirmation: false };
  return obj3;
}
async function _voidPendingPayment(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  const obj = { url: outer2_10.BILLING_PAYMENTS_VOID(arg0), oldFormErrors: true, rejectWithError: false };
  yield HTTP.post(obj);
}
async function _fetchIpCountryCode() {
  let iter = (function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = false;
    }
    let c0;
    yield undefined;
    if (!flag) {
      if (null != outer2_7.ipCountryCodeRequest) {
        return outer2_7.ipCountryCodeRequest;
      }
    }
    const HTTP = outer2_0(outer2_2[9]).HTTP;
    const value = HTTP.get({ url: outer2_10.BILLING_COUNTRY_CODE, rejectWithError: false });
    c0 = value;
    outer2_1(outer2_2[8]).wait(() => {
      let obj = outer3_1(outer3_2[8]);
      obj = { type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: c0 };
      return obj.dispatch(obj);
    });
    const tmp7 = yield value;
    let obj = { url: outer2_10.BILLING_COUNTRY_CODE, rejectWithError: false };
    const obj2 = outer2_1(outer2_2[8]);
    outer2_1(outer2_2[8]).dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: tmp7.body.country_code });
    return tmp7;
  })();
  iter.next();
  return iter;
}
function fetchPaymentSourceCreationContext() {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  const obj = { url: closure_10.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false };
  return HTTP.get(obj);
}
async function _fetchIpLocation() {
  let iter = (function*() {
    let flag = arg0;
    if (flag === undefined) {
      flag = false;
    }
    let c0;
    yield undefined;
    if (!flag) {
      if (null != outer2_7.ipLocationRequest) {
        return outer2_7.ipLocationRequest;
      }
    }
    const HTTP = outer2_0(outer2_2[9]).HTTP;
    const value = HTTP.get({ url: outer2_10.BILLING_LOCATION, rejectWithError: false });
    c0 = value;
    outer2_1(outer2_2[8]).wait(() => {
      let obj = outer3_1(outer3_2[8]);
      obj = { type: "BILLING_IP_LOCATION_FETCH_START", request: c0 };
      return obj.dispatch(obj);
    });
    const tmp7 = yield value;
    const country_code = tmp7.body.country_code;
    let obj = { url: outer2_10.BILLING_LOCATION, rejectWithError: false };
    const obj2 = outer2_1(outer2_2[8]);
    outer2_1(outer2_2[8]).dispatch({ type: "BILLING_SET_IP_LOCATION", location: { countryCode: country_code, subdivisionCode: tmp7.body.subdivision_code } });
    const obj3 = outer2_1(outer2_2[8]);
    outer2_1(outer2_2[8]).dispatch({ type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: country_code });
    return tmp7;
  })();
  iter.next();
  return iter;
}
async function _redeemReactivationOffer(arg0, arg1, arg2) {
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  let obj = { url: outer2_10.REACTIVATION_OFFER_REDEEM(arg0.id, arg1.id), rejectWithError: false };
  const tmp = yield HTTP.post(obj);
  obj = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: tmp.body };
  outer2_1(outer2_2[8]).dispatch(obj);
  const obj2 = outer2_1(outer2_2[8]);
  obj = { type: "BILLING_USER_OFFER_REDEEMED", offerId: arg1.id };
  outer2_1(outer2_2[8]).dispatch(obj);
}
async function _redeemUserDiscountOffer(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[9]).HTTP;
  obj = { url: outer2_10.USER_OFFER_REDEEM, body: obj, rejectWithError: true };
  obj = { user_discount_offer_id: arg0.id };
  yield HTTP.post(obj);
  obj = { type: "BILLING_USER_OFFER_REDEEMED", offerId: arg0.id };
  outer2_1(outer2_2[8]).dispatch(obj);
}
let closure_3 = ["line1", "line2", "postalCode"];
({ AnalyticEvents: closure_9, Endpoints: closure_10, PaymentGateways: closure_11, REDIRECTED_PAYMENT_SOURCES: closure_12, SubscriptionStatusTypes: closure_13 } = ME);
({ ADYEN_PAYMENT_SOURCES: closure_15, CurrencyCodes: closure_16, PaymentStatusTypes: closure_17, PREPAID_PAYMENT_SOURCES: closure_18, SubscriptionTypes: closure_19 } = sum);
let result = require("_callSuper").fileFinishedImporting("modules/billing/actions/BillingActionCreators.tsx");
for (const key10082 in require("_getClientSecret")) {
  let tmp5 = key10082;
  arg5[key10082] = require("_getClientSecret")[key10082];
  continue;
}
for (const key10087 in require("_validatePaymentSourceBillingAddress")) {
  let tmp6 = key10087;
  arg5[key10087] = require("_validatePaymentSourceBillingAddress")[key10087];
  continue;
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
  return updateSubscription(items, obj, obj, require(3776) /* _createForOfIteratorHelperLoose */.getItemPlansTotalServerPrice(items.items, items.currency, items.paymentSourceId), arg1);
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
  return updateSubscription(currency, obj, obj, require(3776) /* _createForOfIteratorHelperLoose */.getItemPlansTotalServerPrice(items, currency, id), arg1, arg4);
};
export const upgradeSubscription = function upgradeSubscription(renewalMutations, basePlanId, arg2, itemPlansTotalServerPrice) {
  let obj = require(3776) /* _createForOfIteratorHelperLoose */;
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
  importDefault(686).dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
};
export const clearRemovePaymentSourceError = function clearRemovePaymentSourceError() {
  importDefault(686).dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
};
export const clearPaymentAuthenticationError = function clearPaymentAuthenticationError() {
  importDefault(686).dispatch({ type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR" });
};
export const cancelPaymentAuthentication = function cancelPaymentAuthentication() {
  importDefault(686).dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
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
  ({ state, path, query, insecure } = paymentSourceType);
  let obj = importDefault(686);
  obj.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType });
  const HTTP = paymentSourceType(507).HTTP;
  obj = { url: closure_10.BILLING_POPUP_BRIDGE_CALLBACK(paymentSourceType), body: { state, path, query, insecure }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(obj).then((arg0) => {
    let obj = outer1_1(outer1_2[8]);
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
  importDefault(686).dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" });
  let obj = importDefault(686);
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
      outer1_1(outer1_2[8]).dispatch(obj);
      const obj3 = outer1_1(outer1_2[8]);
    } else {
      obj = outer1_1(outer1_2[8]);
      const obj1 = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL" };
      const _Error = Error;
      const error = new Error("Missing response body");
      obj1.error = error;
      obj.dispatch(obj1);
    }
  }).catch((arg0) => {
    let obj = outer1_1(outer1_2[8]);
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
  importDefault(686).dispatch({ type: "RESET_PAYMENT_ID" });
};
export const resetSubscriptionStore = function resetSubscriptionStore() {
  importDefault(686).dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
};
export const startBrowserCheckout = function startBrowserCheckout(loadId) {
  let obj = importDefault(686);
  obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId };
  obj.dispatch(obj);
};
export const redeemReactivationOffer = function redeemReactivationOffer() {
  return _redeemReactivationOffer(...arguments);
};
export const redeemUserDiscountOffer = function redeemUserDiscountOffer() {
  return _redeemUserDiscountOffer(...arguments);
};
