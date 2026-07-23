// Module ID: 6658
// Function ID: 51120
// Name: _createForOfIteratorHelperLoose
// Dependencies: [29, 5, 31, 5623, 6659, 6660, 1849, 3782, 5621, 653, 482, 33, 3, 1193, 587, 675, 507, 3791, 4451, 477, 7203, 5638, 7204, 686, 22, 5624, 6656, 7227, 1212, 7156, 4471, 7161, 1934, 4337, 6649, 7122, 4029, 7229, 3798, 4942, 480, 7365, 7366, 1361, 7157, 7367, 491, 7194, 2]
// Exports: cancelGenericSubscription, createGenericSubscription, migrateToACOM, mobilePurchaseSKU, modifyGenericSubscription, resubscribeGenericSubscription

// Module 6658 (_createForOfIteratorHelperLoose)
import getBaseAnalyticsFields from "getBaseAnalyticsFields";
import closure_8 from "usePremiumPlanPurchasedStore";
import "getHeaderBackground";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import { PaymentGateways } from "sum";
import { jsx } from "module_4337";
import importDefaultResult from "_isNativeReflectConstruct";
import set from "result";

let closure_11;
let closure_12;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function applyAppleReceipt(arg0) {
  let appStoreRegion;
  let encodedReceipt;
  let entitlementSkuId;
  let giftInfoOptions;
  let isGift;
  let jwsRepresentation;
  let jwsRepresentations;
  let orderId;
  let presentmentAmount;
  let presentmentCurrency;
  let retries;
  let skipDupCheck;
  let source;
  ({ encodedReceipt, entitlementSkuId, giftInfoOptions, isGift, jwsRepresentation, jwsRepresentations, source } = arg0);
  ({ presentmentCurrency, presentmentAmount, appStoreRegion, retries, skipDupCheck, orderId } = arg0);
  if (null != jwsRepresentations) {
    if (null != jwsRepresentation) {
      const _Error = Error;
      const error = new Error("Can pass either 'jwsRepresentation' or 'jwsRepresentations'.  Not both");
      throw error;
    }
  }
  if (null != jwsRepresentation) {
    const items = [jwsRepresentation];
    jwsRepresentations = items;
  }
  let first = encodedReceipt;
  if (null != jwsRepresentations) {
    first = jwsRepresentations[0];
  }
  let obj = importDefault(1193);
  const v3Result = obj.v3(first);
  const require = v3Result;
  let Storage = require(587) /* Storage */.Storage;
  if (!skipDupCheck) {
    if (Storage.get(localAppleReceiptHash) === v3Result) {
      let resolved = Promise.resolve(null);
    }
    return resolved;
  }
  let tmp5 = true !== isGift;
  if (!tmp5) {
    let tmp6 = null != giftInfoOptions;
    if (tmp6) {
      let gift_style;
      if (null != giftInfoOptions) {
        gift_style = giftInfoOptions.gift_style;
      }
      tmp6 = null != gift_style;
    }
    tmp5 = tmp6;
  }
  if (!tmp5) {
    let obj1 = importDefault(675);
    obj = { source, sku_id: entitlementSkuId };
    obj1.track(constants.GIFT_INFO_OPTIONS_MISSING, obj);
  }
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  obj = { url: constants2.BILLING_APPLY_APPLE_RECEIPT, body: obj1, retries, oldFormErrors: true, rejectWithError: true };
  obj1 = { encoded_receipt: encodedReceipt, entitlement_sku_id: entitlementSkuId, presentment_currency: presentmentCurrency, presentment_amount: presentmentAmount, app_store_region: appStoreRegion, gift_info_options: giftInfoOptions, is_gift: isGift, source, jws_representations: jwsRepresentations, order_id: orderId };
  const postResult = HTTP.post(obj);
  resolved = HTTP.post(obj).then((arg0) => {
    const Storage = v3Result(outer1_3[14]).Storage;
    const result = Storage.set(outer1_22, closure_0);
    return arg0;
  }).catch((error) => {
    let obj = v3Result(outer1_3[17]);
    obj = { source: outer1_23 };
    const result = obj.captureBillingException(error, { tags: obj });
    throw error;
  });
}
async function _getTrialOfferSignature(arg0, arg1, arg2, arg3) {
  const HTTP = outer2_0(outer2_3[16]).HTTP;
  obj = { url: outer2_19.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE, body: obj, rejectWithError: false };
  obj = { product_id: arg0, product_offer_id: arg1, app_account_token: arg2 };
  return yield HTTP.post(obj).body;
}
function handlePurchaseException(code, purchase_type) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (!set.has(code.code)) {
    let obj = require(7122) /* isSpendingLimitError */;
    let billingError = code;
    if (!(code instanceof require(4029) /* V6OrEarlierAPIError */.BillingError)) {
      const BillingError = require(4029) /* V6OrEarlierAPIError */.BillingError;
      const prototype = BillingError.prototype;
      billingError = new BillingError(code);
    }
    if (obj.isSpendingLimitError(billingError)) {
      const result = require(7122) /* isSpendingLimitError */.showSpendingLimitReachedAlert();
      const obj10 = require(7122) /* isSpendingLimitError */;
    } else {
      const message = code.message;
      const _JSON = JSON;
      const json = JSON.stringify(code);
      let obj1 = importAll(7229);
      const underlyingIOSError = obj1.getUnderlyingIOSError(code);
      if (null != underlyingIOSError) {
        obj = {};
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj.title = intl2.string(require(1212) /* getSystemLocale */.t.POsVOt);
        obj.body = underlyingIOSError;
        importDefault(4471).show(obj);
        throw code;
      } else {
        const intl3 = require(1212) /* getSystemLocale */.intl;
        const stringResult = intl3.string(require(1212) /* getSystemLocale */.t.PjfUXe);
        let tmp15 = stringResult;
        if ("HTTPResponseError" !== code.name) {
          if (!("status" in code)) {
            tmp15 = code.message || stringResult;
            const tmp16 = code.message || stringResult;
          } else {
            tmp15 = stringResult;
          }
        }
        let message2 = tmp15;
        if (null != code.body) {
          const body = code.body;
          message2 = tmp15;
          if (null != body.apple_error_code) {
            const _HermesInternal = HermesInternal;
            message2 = "" + stringResult + " (code: " + body.apple_error_code + ")";
          }
        }
        let billingError2 = code;
        if (!(code instanceof require(4029) /* V6OrEarlierAPIError */.BillingError)) {
          const BillingError2 = require(4029) /* V6OrEarlierAPIError */.BillingError;
          const prototype2 = BillingError2.prototype;
          billingError2 = new BillingError2(code);
        }
        let tmp26 = message2 === stringResult && flag;
        if (tmp26) {
          tmp26 = billingError2.code !== require(3798) /* _isNativeReflectConstruct */.ErrorCodes.UNKNOWN;
        }
        if (tmp26) {
          tmp26 = -1 !== billingError2.code;
        }
        if (tmp26) {
          tmp26 = null != billingError2.message;
        }
        if (tmp26) {
          message2 = billingError2.message;
        }
        let obj2 = importDefault(4471);
        obj = {};
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.title = intl.string(require(1212) /* getSystemLocale */.t.zrhHH3);
        obj.body = message2;
        obj.isDismissable = true;
        obj.hideActionSheet = flag;
        obj2.show(obj);
        obj1 = {};
        obj2 = { source: BILLING, purchase_type };
        obj1.tags = obj2;
        const result1 = require(3791) /* _createGatewayCheckoutContext */.captureBillingException(code, obj1);
        if (flag) {
          throw code;
        }
        const obj5 = require(3791) /* _createGatewayCheckoutContext */;
      }
    }
  }
}
function canMakeIAPRequest() {
  let tmp = !busy.isBusy();
  if (tmp) {
    let flag = !require(6656) /* items */.getIsPaymentsBlocked();
    if (!flag) {
      importDefault(7227)();
      flag = false;
    }
    tmp = flag;
    const obj = require(6656) /* items */;
  }
  return tmp;
}
function clearAndMakeIAPRequest(arg0, arg1, arg2, arg3) {
  return _clearAndMakeIAPRequest(...arguments);
}
async function _clearAndMakeIAPRequest(arg0, arg1, arg2, arg3, arg4) {
  let obj = outer2_0(outer2_3[22]);
  yield obj.clearTransactionIOS();
  const tmp2 = yield outer2_0(outer2_3[20]).makeIAPRequest(arg1, arg2, arg3);
  let str = tmp2.purchaseResponse.transactionIdentifier;
  str = str.toString();
  const transactionDate = tmp2.purchaseResponse.transactionDate;
  obj = {};
  const originalTransactionIdentifier = tmp2.purchaseResponse.originalTransactionIdentifier;
  let str1;
  if (null != originalTransactionIdentifier) {
    str1 = str2.toString();
  }
  obj.original_transaction_id = null != str1 ? str1 : str;
  const originalTransactionDate = tmp2.purchaseResponse.originalTransactionDate;
  obj.original_transaction_date = null != originalTransactionDate ? originalTransactionDate : transactionDate;
  obj.transaction_id = str;
  obj.transaction_date = transactionDate;
  const obj2 = outer2_0(outer2_3[20]);
  str2 = originalTransactionIdentifier;
  obj = { request_identifier: arg0, success: true };
  const merged = Object.assign(obj);
  outer2_1(outer2_3[15]).track(outer2_17.APPLE_PARTNER_IAP_REQUEST_SENT, obj);
  return tmp2;
}
function getIAPJWTRequestData(arg0) {
  return _getIAPJWTRequestData(...arguments);
}
async function _getIAPJWTRequestData(arg0, arg1) {
  let closure_0 = arg0;
  let obj = outer2_1(outer2_3[39]);
  obj = { url: outer2_19.BILLING_CREATE_APPLE_IAP_JWT_TOKEN, body: arg0, oldFormErrors: true };
  obj = {
    event: outer2_0(outer2_3[40]).NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
    properties(body) {
      let country_code;
      let gift_info_options;
      let is_gift;
      let items;
      if (body.operation !== outer3_0(outer3_3[41]).APBRequestOperations.CREATE) {
        if (body.operation !== outer3_0(outer3_3[42]).ACRequestOperations.CREATE) {
          if (body.operation === outer3_0(outer3_3[42]).ACRequestOperations.MODIFY) {
            let obj = {};
            const _JSON2 = JSON;
            obj.subscription_items_json_string = JSON.stringify(body.subscription_items);
            const merged = Object.assign(outer3_7(body, outer3_5));
            let tmp7 = obj;
            const tmp18 = outer3_7(body, outer3_5);
          } else {
            if (body.operation !== outer3_0(outer3_3[41]).APBRequestOperations.CHARGE) {
              if (body.operation !== outer3_0(outer3_3[42]).ACRequestOperations.CHARGE) {
                obj = {};
                const merged1 = Object.assign(body);
                tmp7 = obj;
              }
            }
            ({ is_gift, gift_info_options } = body);
            obj = {};
            ({ sku_id: obj2.sku_id, country_code: obj2.request_country_code } = body);
            const merged2 = Object.assign(outer3_7(body, outer3_6));
            if (null != gift_info_options) {
              const _JSON = JSON;
              obj.gift_info_options = JSON.stringify(gift_info_options);
            }
            tmp7 = obj;
            if (is_gift) {
              obj.is_gift = is_gift;
              tmp7 = obj;
            }
          }
        }
        const obj1 = {};
        let request_data;
        if (null != body) {
          body = body.body;
          if (null != body) {
            request_data = body.request_data;
          }
        }
        let str = "";
        if (null != request_data) {
          str = request_data;
        }
        obj1.jwt_token_exists = str.length > 0;
        const merged3 = Object.assign(tmp7);
        return outer3_0(outer3_3[43]).exact(obj1);
      }
      ({ items, country_code } = body);
      const obj2 = { subscription_items_json_string: JSON.stringify(items), request_country_code: country_code };
      const merged4 = Object.assign(outer3_7(body, outer3_4));
      tmp7 = obj2;
    }
  };
  obj.trackedActionData = obj;
  obj.rejectWithError = true;
  return { requestJSONString: JSON.stringify(yield obj.post(obj).body.request_data) };
}
function updateAppleSubscription(arg0) {
  return _updateAppleSubscription(...arguments);
}
async function _updateAppleSubscription(arg0, arg1) {
  let closure_0 = arg0;
  let obj = outer2_1(outer2_3[39]);
  obj = { url: outer2_19.BILLING_APPLE_SUBSCRIPTION(arg0.subscription_id), body: arg0, oldFormErrors: true };
  obj = {
    event: outer2_0(outer2_3[40]).NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
    properties(body) {
      let obj = {};
      const merged = Object.assign(closure_0);
      obj = {};
      let request_data;
      if (null != body) {
        body = body.body;
        if (null != body) {
          request_data = body.request_data;
        }
      }
      let str = "";
      if (null != request_data) {
        str = request_data;
      }
      obj.jwt_token_exists = str.length > 0;
      const merged1 = Object.assign(obj);
      return outer3_0(outer3_3[43]).exact(obj);
    }
  };
  obj.trackedActionData = obj;
  obj.rejectWithError = false;
  yield obj.patch(obj);
}
function determineProductId(arg0) {
  if (require(7365) /* APBRequestOperations */.APBRequestOperations.CREATE !== arg0) {
    if (require(7365) /* APBRequestOperations */.APBRequestOperations.CANCEL !== arg0) {
      if (require(7365) /* APBRequestOperations */.APBRequestOperations.RESUBSCRIBE !== arg0) {
        if (require(7365) /* APBRequestOperations */.APBRequestOperations.REACTIVATE !== arg0) {
          if (require(7365) /* APBRequestOperations */.APBRequestOperations.CHARGE === arg0) {
            return require(5624) /* SubscriptionPlans */.ProductIds.GENERIC_CONSUMABLE;
          } else {
            if (require(7366) /* ACRequestOperations */.ACRequestOperations.CREATE !== arg0) {
              if (require(7366) /* ACRequestOperations */.ACRequestOperations.CANCEL !== arg0) {
                if (require(7366) /* ACRequestOperations */.ACRequestOperations.REACTIVATE !== arg0) {
                  if (require(7366) /* ACRequestOperations */.ACRequestOperations.MODIFY !== arg0) {
                    if (require(7366) /* ACRequestOperations */.ACRequestOperations.CHARGE === arg0) {
                      return require(5624) /* SubscriptionPlans */.ProductIds.GENERIC_CONSUMABLE;
                    } else {
                      const _Error = Error;
                      const error = new Error("Invalid operation");
                      throw error;
                    }
                  }
                }
              }
            }
            return require(5624) /* SubscriptionPlans */.ProductIds.GENERIC_SUBSCRIPTION;
          }
        }
      }
    }
  }
  return require(5624) /* SubscriptionPlans */.ProductIds.GENERIC_SUBSCRIPTION;
}
async function _cancelGenericSubscription(arg0, arg1, arg2, arg3) {
  if (outer2_31()) {
    if (arg2) {
      let CANCEL = tmp2(tmp3[42]).ACRequestOperations.CANCEL;
    } else {
      CANCEL = tmp2(tmp3[41]).APBRequestOperations.CANCEL;
    }
    const tmp6 = outer2_38(CANCEL);
    let obj = outer2_1(outer2_3[23]);
    obj = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp6 };
    yield obj.dispatch(obj);
    obj = { operation: CANCEL, request_identifier: arg0, subscription_id: arg1 };
    yield outer2_36(obj);
    const obj1 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: tmp6 };
    outer2_1(outer2_3[23]).dispatch(obj1);
    return true;
  } else {
    return false;
  }
}
function isValidCurrency(arg0) {
  const values = Object.values(closure_18);
  return values.includes(arg0);
}
async function _createGenericSubscription(arg0, arg1) {
  let iter = (function*(arg0) {
    let countryCode;
    let currency;
    let items;
    let orderId;
    let requestIdentifier;
    ({ requestIdentifier, items, currency, countryCode, orderId } = arg0);
    yield undefined;
    if (outer2_31()) {
      if (outer2_40(currency)) {
        const tmp9 = outer2_38(outer2_0(outer2_3[42]).ACRequestOperations.CREATE);
        let obj2 = outer2_1(outer2_3[23]);
        let obj = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp9 };
        yield obj2.dispatch(obj);
        obj = { request_identifier: requestIdentifier, items: items.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })), currency, country_code: countryCode, order_id: orderId };
        const obj1 = { operation: outer2_0(outer2_3[42]).ACRequestOperations.CREATE };
        const merged = Object.assign(obj);
        const tmp27 = yield outer2_32(requestIdentifier, yield outer2_34(obj1).requestJSONString, tmp9, true);
        const purchaseResponse = tmp27.purchaseResponse;
        obj2 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: currency, appStoreRegion: countryCode, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "createGenericSubscription", orderId };
        yield outer2_28(obj2);
        const obj3 = { purchase: tmp27.originalPurchase };
        yield outer2_0(outer2_3[22]).finishTransaction(obj3);
        const obj8 = outer2_0(outer2_3[22]);
        const obj4 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: tmp9 };
        outer2_1(outer2_3[23]).dispatch(obj4);
        const obj5 = { success: true, failureReason: outer2_25.NONE };
        return obj5;
      } else {
        const obj6 = { success: false, failureReason: outer2_25.INVALID_CURRENCY };
        return obj6;
      }
    } else {
      obj = { success: false, failureReason: outer2_25.CANNOT_MAKE_REQUEST };
      return obj;
    }
  })();
  iter.next();
  return iter;
}
async function _modifyGenericSubscription(arg0, arg1) {
  let iter = (function*(subscriptionId) {
    let items;
    let onPurchaseComplete;
    let orderId;
    let requestIdentifier;
    ({ requestIdentifier, items, orderId, onPurchaseComplete } = subscriptionId);
    yield undefined;
    if (outer2_31()) {
      const GENERIC_SUBSCRIPTION = outer2_0(outer2_3[25]).ProductIds.GENERIC_SUBSCRIPTION;
      let obj1 = outer2_1(outer2_3[23]);
      let obj = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: GENERIC_SUBSCRIPTION };
      yield obj1.dispatch(obj);
      obj = { operation: outer2_0(outer2_3[42]).ACRequestOperations.MODIFY, request_identifier: requestIdentifier, subscription_id: subscriptionId.subscriptionId, subscription_items: items.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })), order_id: orderId };
      const tmp17 = yield outer2_32(requestIdentifier, yield outer2_34(obj).requestJSONString, GENERIC_SUBSCRIPTION, true);
      const purchaseResponse = tmp17.purchaseResponse;
      if (null != onPurchaseComplete) {
        const onPurchaseCompleteResult = onPurchaseComplete();
      }
      yield onPurchaseCompleteResult;
      obj1 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "modifyGenericSubscription", orderId };
      yield outer2_28(obj1);
      const obj2 = { purchase: tmp17.originalPurchase };
      yield outer2_0(outer2_3[22]).finishTransaction(obj2);
      const obj6 = outer2_0(outer2_3[22]);
      const obj3 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: GENERIC_SUBSCRIPTION };
      outer2_1(outer2_3[23]).dispatch(obj3);
      const obj4 = { success: true, failureReason: outer2_25.NONE };
      return obj4;
    } else {
      obj = { success: false, failureReason: outer2_25.CANNOT_MAKE_REQUEST };
      return obj;
    }
  })();
  iter.next();
  return iter;
}
async function _resubscribeGenericSubscription(arg0, arg1, arg2) {
  let iter = (function*(requestIdentifier) {
    requestIdentifier = requestIdentifier.requestIdentifier;
    yield undefined;
    if (outer2_31()) {
      let obj = { request_identifier: requestIdentifier, subscription_id: requestIdentifier.subscriptionId };
      if (arg1) {
        let REACTIVATE = tmp6(tmp7[42]).ACRequestOperations.REACTIVATE;
      } else {
        REACTIVATE = tmp6(tmp7[41]).APBRequestOperations.REACTIVATE;
      }
      const tmp4Result = outer2_38(REACTIVATE);
      let obj1 = outer2_1(outer2_3[23]);
      obj = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp4Result };
      yield obj1.dispatch(obj);
      if (arg1) {
        obj = { operation: outer2_0(outer2_3[42]).ACRequestOperations.REACTIVATE };
        const merged = Object.assign(tmp3);
        const tmp29 = yield outer2_32(requestIdentifier, yield outer2_34(obj).requestJSONString, tmp9, true);
        const purchaseResponse = tmp29.purchaseResponse;
        obj1 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "resubscribeGenericSubscription" };
        yield outer2_28(obj1);
        const obj2 = { purchase: tmp29.originalPurchase };
        yield outer2_0(outer2_3[22]).finishTransaction(obj2);
        const obj7 = outer2_0(outer2_3[22]);
        const obj3 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: tmp9 };
        outer2_1(outer2_3[23]).dispatch(obj3);
        return true;
      } else {
        const obj4 = { operation: outer2_0(outer2_3[41]).APBRequestOperations.REACTIVATE };
        const merged1 = Object.assign(tmp3);
        return yield outer2_36(obj4);
      }
      const tmp4 = outer2_38;
    } else {
      return false;
    }
  })();
  iter.next();
  return iter;
}
async function _retryPendingPurchases(arg0, arg1, arg2) {
  let productIdentifier;
  let transactionIdentifier;
  let obj = outer2_1(outer2_3[20]);
  const arr = yield obj.restorePurchases({ fullRestore: false });
  const items = [];
  if (0 === arr.length) {
    return true;
  } else {
    const tmp41 = outer2_26(arr);
    const iter3 = tmp41();
    let iter2 = iter3;
    if (!iter3.done) {
      const purchaseResponse = iter2.value.purchaseResponse;
      ({ productIdentifier, transactionIdentifier } = purchaseResponse);
      let str = transactionIdentifier.toString();
      let obj1 = outer2_1(outer2_3[15]);
      obj = { product_id: productIdentifier, transaction_id: str };
      obj1.track(outer2_17.APPLE_RETRY_PENDING_PURCHASE_STARTED, obj);
      obj = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: arg0, appStoreRegion: arg1, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "retryPendingPurchases" };
      yield outer2_28(obj);
      while (true) {
        let tmp15 = outer2_0;
        let tmp16 = outer2_3;
        let obj4 = outer2_0(outer2_3[22]);
        obj1 = {};
        let obj2 = {};
        let tmp17 = productIdentifier;
        obj2.productId = productIdentifier;
        let tmp18 = str;
        obj2.transactionId = str;
        let tmp19 = purchaseResponse;
        ({ transactionDate: obj7.transactionDate, transactionReceipt: obj7.transactionReceipt } = tmp2);
        obj1.purchase = obj2;
        let tmp20 = yield obj4.finishTransaction(obj1);
        let tmp21 = outer2_1;
        let tmp22 = outer2_3;
        let obj8 = outer2_1(outer2_3[15]);
        let tmp23 = outer2_17;
        let obj3 = {};
        let tmp24 = productIdentifier;
        obj3.product_id = productIdentifier;
        let tmp25 = str;
        obj3.transaction_id = str;
        let trackResult1 = obj8.track(outer2_17.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED, obj3);
        while (true) {
          let tmp27 = tmp41;
          let iter = tmp42();
          iter2 = iter;
          if (!iter.done) {
            break;
          } else {
            break label0;
          }
        }
      }
      tmp2 = purchaseResponse;
    }
    if (items.length > 0) {
      const mapped = items.map((message) => message.message);
      str = ", ";
      const _HermesInternal = HermesInternal;
      const combined = "Failed to retry pending purchases: " + mapped.join(", ");
      const _Error = Error;
      const error = new Error(combined);
      obj4 = {};
      const obj5 = { pendingPurchaseFailures: items.length.toString(), totalPendingPurchases: arr.length.toString() };
      obj4.tags = obj5;
      const result = outer2_0(outer2_3[17]).captureBillingException(error, obj4);
      return false;
    } else {
      return true;
    }
    tmp42 = tmp41;
  }
}
async function _mobilePurchaseSKU(arg0, arg1, arg2) {
  let iter = (function*(orderId) {
    let analyticsLoadId;
    let analyticsLocations;
    let countryCode;
    let currency;
    let giftInfoOptions;
    let isFreeForStaffSelfPurchase;
    let isGift;
    let requestIdentifier;
    let skuId;
    ({ requestIdentifier, skuId, currency, countryCode, analyticsLocations, analyticsLoadId, isGift, giftInfoOptions, isFreeForStaffSelfPurchase } = orderId);
    if (isFreeForStaffSelfPurchase === undefined) {
      isFreeForStaffSelfPurchase = true;
    }
    orderId = orderId.orderId;
    yield undefined;
    if (outer2_31()) {
      if (outer2_40(currency)) {
        const tmp9 = outer2_38(outer2_0(outer2_3[42]).ACRequestOperations.CHARGE);
        let obj2 = outer2_1(outer2_3[23]);
        let obj = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp9 };
        yield obj2.dispatch(obj);
        let obj4 = outer2_0(outer2_3[44]);
        obj = { sku_id: skuId, load_id: analyticsLoadId, location_stack: analyticsLocations, payment_gateway: outer2_20.APPLE_ADVANCED_COMMERCE };
        const result = obj4.trackPaymentFlowStartedAnalyticsAndCTP(obj);
        yield (function retryPendingPurchases(currency, countryCode) {
          return outer3_44(...arguments);
        })(currency, countryCode);
        const obj1 = { sku_id: skuId, request_identifier: requestIdentifier, currency, country_code: countryCode, is_gift: isGift, gift_info_options: giftInfoOptions, order_id: orderId };
        obj2 = { operation: outer2_0(outer2_3[42]).ACRequestOperations.CHARGE };
        const merged = Object.assign(obj1);
        const tmp39 = yield outer2_32(requestIdentifier, yield outer2_34(obj2).requestJSONString, tmp9, true);
        const purchaseResponse = tmp39.purchaseResponse;
        const jwsRepresentation = purchaseResponse.jwsRepresentation;
        if (null != jwsRepresentation) {
          let transactionReceipt = jwsRepresentation;
        } else {
          transactionReceipt = tmp40.transactionReceipt;
        }
        let obj8 = outer2_1(outer2_3[13]);
        const v3Result = obj8.v3(transactionReceipt);
        if (isGift) {
          let obj9 = outer2_1(outer2_3[23]);
          const obj3 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: v3Result };
          obj4 = {};
          const merged1 = Object.assign(giftInfoOptions);
          obj3.giftOptions = obj4;
          obj9.dispatch(obj3);
        }
        const obj5 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: currency, appStoreRegion: countryCode, giftInfoOptions, isGift, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "mobilePurchaseSKU", orderId };
        yield outer2_28(obj5);
        if (isGift) {
          const obj6 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: v3Result };
          outer2_1(outer2_3[23]).dispatch(obj6);
          const obj14 = outer2_1(outer2_3[23]);
        }
        const obj7 = { purchase: tmp39.originalPurchase };
        yield outer2_0(outer2_3[22]).finishTransaction(obj7);
        const obj16 = outer2_0(outer2_3[22]);
        obj8 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: tmp9 };
        outer2_1(outer2_3[23]).dispatch(obj8);
        const obj18 = outer2_1(outer2_3[23]);
        obj9 = { sku_id: skuId, load_id: analyticsLoadId, location_stack: analyticsLocations, payment_gateway: outer2_20.APPLE_ADVANCED_COMMERCE, is_gift: isGift };
        outer2_1(outer2_3[15]).track(outer2_17.PAYMENT_FLOW_COMPLETED, obj9);
        const obj10 = { success: true, failureReason: outer2_25.NONE };
        return obj10;
      } else {
        const obj11 = { success: false, failureReason: outer2_25.INVALID_CURRENCY };
        return obj11;
      }
    } else {
      obj = { success: false, failureReason: outer2_25.CANNOT_MAKE_REQUEST };
      return obj;
    }
  })();
  iter.next();
  return iter;
}
async function _migrateToACOM() {
  if (null == outer2_13.getCurrentUser()) {
    return false;
  } else if (outer2_31()) {
    let activeGuildSubscriptions = outer2_14.getActiveGuildSubscriptions();
    if (null == activeGuildSubscriptions) {
      activeGuildSubscriptions = [];
    }
    const found = activeGuildSubscriptions.filter((paymentGateway) => paymentGateway.paymentGateway === outer3_20.APPLE_PARTNER);
    let subscriptions = outer2_14.getSubscriptions();
    if (null == subscriptions) {
      subscriptions = [];
    }
    const values = Object.values(subscriptions);
    const found1 = values.filter((paymentGateway) => {
      let tmp = paymentGateway.paymentGateway === outer3_20.APPLE;
      if (tmp) {
        tmp = paymentGateway.type === outer3_16.PREMIUM;
      }
      return tmp;
    });
    const NitroACOMSubscriptionExperiment = outer2_0(outer2_3[47]).NitroACOMSubscriptionExperiment;
    let obj = { location: "migrateToACOM" };
    const tmp6 = found1.length > 0 && NitroACOMSubscriptionExperiment.getConfig(obj).enabled;
    if (0 === found.length) {
      if (false === tmp7) {
        return false;
      }
    }
    const HTTP = outer2_0(outer2_3[16]).HTTP;
    obj = { url: outer2_19.BILLING_ACOM_SUBSCRIPTION_MIGRATION, rejectWithError: true };
    obj = { migrate_premium: tmp6 };
    obj.body = obj;
    yield HTTP.post(obj);
    return true;
  } else {
    return false;
  }
}
let closure_4 = ["items", "country_code"];
let closure_5 = ["subscription_items"];
let closure_6 = ["sku_id", "country_code", "is_gift", "gift_info_options"];
({ setPaymentSuccess: closure_11, showOldPaymentFlowSuccess: closure_12 } = usePremiumPlanPurchasedStore);
({ SubscriptionTypes: closure_16, AnalyticEvents: closure_17, CurrencyCodes: closure_18, Endpoints: closure_19 } = ME);
const localAppleReceiptHash = "localAppleReceiptHash";
const BILLING = "BILLING";
importDefaultResult = new importDefaultResult("BillingActionCreators.tsx");
let obj = {
  applyAppleReceipt,
  fetchMostRecentSubscription: require("_deletePaymentSource").fetchMostRecentSubscription,
  fetchIpCountryCode: require("_deletePaymentSource").fetchIpCountryCode,
  init() {
    const self = this;
    return callback(async () => {
      let tmp = null;
      if (obj.isIOS()) {
        tmp = yield outer2_1(outer2_3[20]).fetchStoreFront();
        const obj2 = outer2_1(outer2_3[20]);
      }
      while (true) {
        let tmp4 = globalThis;
        let tmp5 = tmp;
        if (null != tmp) {
          let tmp9 = self;
          let tmp10 = outer2_3;
          let num3 = 21;
          let obj4 = self(outer2_3[21]);
          let tmp11 = tmp;
          let tmp12 = outer2_20;
          let tmp13 = obj4;
          let premiumSubscriptionPlans = obj4.fetchPremiumSubscriptionPlans(tmp.country, undefined, undefined, outer2_20.APPLE_ADVANCED_COMMERCE);
        } else {
          let tmp6 = self;
          let tmp7 = outer2_3;
          let num2 = 21;
          let obj3 = self(outer2_3[21]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        let items = [premiumSubscriptionPlans, , ];
        let tmp15 = tmp;
        let tmp16;
        let tmp14 = outer1_0;
        if (null != tmp) {
          tmp16 = tmp;
        }
        items[1] = outer1_0.loadProducts(tmp16);
        let tmp17 = self;
        let tmp18 = outer2_3;
        let num4 = 18;
        let obj5 = self(outer2_3[18]);
        items[2] = obj5.fetchSubscriptions();
        let tmp19 = yield Promise.all(items);
        let tmp20 = outer1_0;
        let tmp21 = yield outer1_0.restoreAndApplyPurchases();
      }
    })();
  },
  connectGenericIap() {
    return callback(async () => {
      const result = outer2_9.isGenericIapConnected();
      if (result) {
        return result;
      } else {
        let obj = outer2_0(outer2_3[22]);
        const tmp4 = yield obj.initConnection();
        obj = { type: "GENERIC_IAP_INIT_CONNECTION", connected: tmp4 };
        outer2_1(outer2_3[23]).dispatch(obj);
        return tmp4;
      }
    })();
  },
  disconnectGenericIap() {
    importDefault(686).dispatch({ type: "GENERIC_IAP_END_CONNECTION" });
  },
  loadProducts(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let obj = outer2_1(outer2_3[23]);
      obj.dispatch({ type: "IAP_LOAD_PRODUCTS_START" });
      let obj1 = outer2_1(outer2_3[20]);
      const tmp2 = yield obj1.loadProducts();
      const found = outer2_1(outer2_3[24]).filter(tmp2, (identifier) => {
        const GenericProductIds = callback(outer3_3[25]).GenericProductIds;
        return GenericProductIds.includes(identifier.identifier);
      });
      if (null == outer1_0) {
        const tmp6 = yield outer2_1(outer2_3[20]).fetchStoreFront();
        const obj3 = outer2_1(outer2_3[20]);
      } else {
        obj = { type: "IAP_LOAD_PRODUCTS", products: tmp2 };
        outer2_1(outer2_3[23]).dispatch(obj);
        if (found.length === callback(outer2_3[25]).GenericProductIds.length) {
          obj = { type: "IAP_LOAD_GENERIC_PRODUCTS", products: found, storeFront: tmp3 };
          outer2_1(outer2_3[23]).dispatch(obj);
          const obj8 = outer2_1(outer2_3[23]);
        } else {
          obj1 = { type: "GENERIC_IAP_SET_STORE_FRONT", storeFront: tmp3 };
          outer2_1(outer2_3[23]).dispatch(obj1);
          const obj6 = outer2_1(outer2_3[23]);
        }
        const obj4 = outer2_1(outer2_3[23]);
      }
    })();
  },
  createSubscription(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let applicationId;
      let baseAnalyticsData;
      let giftInfoOptions;
      let isGift;
      let offerId;
      let onPurchaseComplete;
      let onPurchaseError;
      let orderId;
      let productId;
      let premiumTypeSubscription;
      ({ productId, giftInfoOptions, baseAnalyticsData, offerId, onPurchaseComplete, onPurchaseError } = outer1_0);
      ({ isGift, applicationId, orderId } = outer1_0);
      if (!outer2_15.isBusy()) {
        let convertToUUIDResult = callback;
        let obj = callback(outer2_3[26]);
        if (obj.getIsPaymentsBlocked()) {
          tmp3(tmp4[27])();
        } else {
          obj = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: productId };
          yield tmp3(tmp4[23]).dispatch(obj);
          let obj3 = outer2_1(outer2_3[20]);
          yield obj3.canMakePayments();
          if (outer2_14.hasFetchedSubscriptions()) {
            const currentUser = outer2_13.getCurrentUser();
            if (null == currentUser) {
              const _Error2 = Error;
              const intl2 = callback(outer2_3[28]).intl;
              const error = new Error(intl2.string(callback(outer2_3[28]).t.PjfUXe));
              throw error;
            } else {
              convertToUUIDResult = callback(outer2_3[20]).convertToUUID(currentUser.id);
              convertToUUIDResult = offerId;
              if (null != offerId) {
                const tmp28 = yield (function getTrialOfferSignature(productId, offerId, convertToUUIDResult) {
                  return outer3_29(...arguments);
                })(productId, offerId, convertToUUIDResult);
                if (null != tmp28) {
                  obj = { identifier: offerId };
                  ({ key_id: obj6.keyIdentifier, nonce: obj6.nonce, signature: obj6.signature } = tmp28);
                  const _Number = Number;
                  obj.timestamp = Number(tmp28.timestamp);
                  const tmp31 = obj;
                }
              }
              let obj6 = outer2_1(outer2_3[20]);
              const tmp35 = yield obj6.purchaseProduct(productId, tmp31, convertToUUIDResult);
              const jwsRepresentation = tmp35.jwsRepresentation;
              if (null != jwsRepresentation) {
                let transactionReceipt = jwsRepresentation;
              } else {
                transactionReceipt = tmp36.transactionReceipt;
              }
              const obj21 = callback(outer2_3[20]);
              const v3Result = outer2_1(outer2_3[13]).v3(transactionReceipt);
              const obj8 = outer2_1(outer2_3[13]);
              const obj1 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key: v3Result };
              const obj2 = {};
              let merged = Object.assign(giftInfoOptions);
              obj1.giftOptions = obj2;
              outer2_1(outer2_3[23]).dispatch(obj1);
              if (null != onPurchaseComplete) {
                const onPurchaseCompleteResult = onPurchaseComplete();
              }
              yield onPurchaseCompleteResult;
              const product = outer2_15.getProduct(productId);
              let price;
              if (null != product) {
                price = tmp53.price;
              }
              let currencyCode;
              if (null != product) {
                currencyCode = tmp53.currencyCode;
              }
              obj3 = { encodedReceipt: tmp35.transactionReceipt, retries: 3, presentmentCurrency: currencyCode, presentmentAmount: price };
              let countryCode;
              if (null != product) {
                countryCode = product.countryCode;
              }
              obj3.appStoreRegion = countryCode;
              obj3.giftInfoOptions = giftInfoOptions;
              obj3.jwsRepresentation = tmp35.jwsRepresentation;
              obj3.source = "createSubscription";
              obj3.orderId = orderId;
              yield outer2_28(obj3);
              outer2_11();
              const obj9 = outer2_1(outer2_3[23]);
              const tmp56 = price;
              const tmp60 = outer2_28;
              let obj4 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: v3Result };
              outer2_1(outer2_3[23]).dispatch(obj4);
              const obj13 = outer2_1(outer2_3[23]);
              const obj15 = outer2_1(outer2_3[15]);
              const obj5 = { subscription_plan_gateway_plan_id: productId, price, regular_price: price };
              let formatted;
              if (null != currencyCode) {
                formatted = str3.toLowerCase();
              }
              obj5.currency = formatted;
              obj5.application_id = applicationId;
              obj15.track(outer2_17.PAYMENT_FLOW_COMPLETED, callback(outer2_3[29]).getPaymentFlowCompletedAnalyticsFields(baseAnalyticsData, obj5));
              const obj16 = callback(outer2_3[29]);
              obj6 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: productId };
              outer2_1(outer2_3[23]).dispatch(obj6);
              if (!isGift) {
                yield callback(outer2_3[18]).fetchSubscriptions();
                while (true) {
                  let tmp86 = outer2_14;
                  premiumTypeSubscription = outer2_14.getPremiumTypeSubscription();
                  if (null == premiumTypeSubscription) {
                    break;
                  } else {
                    let tmp88 = outer2_12;
                    let tmp89 = outer2_12(() => {
                      let obj = outer3_1(outer3_3[30]);
                      obj = {
                        importer() {
                          return callback(outer4_3[32])(outer4_3[31], outer4_3.paths).then((arg0) => {
                            let closure_0 = arg0.default;
                            return () => { ... };
                          });
                        }
                      };
                      obj.openLazy(obj);
                    });
                    break;
                  }
                  break;
                }
                const obj20 = callback(outer2_3[18]);
              }
              const obj18 = outer2_1(outer2_3[23]);
            }
          } else {
            obj4 = callback(outer2_3[18]);
            yield obj4.fetchSubscriptions();
            const _Error = Error;
            const intl = callback(outer2_3[28]).intl;
            const error1 = new Error(intl.string(callback(outer2_3[28]).t.PjfUXe));
            throw error1;
          }
          const tmp3Result = tmp3(tmp4[23]);
        }
      }
    })();
  },
  restoreAndApplyPurchases(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const self = this;
    return callback(async () => {
      let items;
      let items1;
      if (outer2_15.isBusy()) {
        return [];
      } else {
        let obj = self(outer2_3[23]);
        obj = { type: "IAP_RESTORE_PURCHASES_START" };
        obj.dispatch(obj);
        yield outer1_1.loadProducts();
        let obj2 = self(outer2_3[20]);
        obj = { fullRestore: outer1_0 };
        const arr = yield obj2.restorePurchases(obj);
        if (0 === arr.length) {
          let obj1 = { type: "IAP_RESTORE_PURCHASES_END" };
          self(outer2_3[23]).dispatch(obj1);
          return [];
        } else {
          const obj10 = self(outer2_3[24])(arr);
          items = [];
          items1 = [];
          function* _loop(value) {
            let closure_0 = value;
            let purchaseResponse;
            let c2;
            purchaseResponse = value.purchaseResponse;
            const product = outer4_15.getProduct(purchaseResponse.productIdentifier);
            let transactionReceipt = purchaseResponse.jwsRepresentation;
            if (null == transactionReceipt) {
              transactionReceipt = tmp.transactionReceipt;
            }
            let obj = self(outer4_3[13]);
            const v3Result = obj.v3(transactionReceipt);
            c2 = v3Result;
            const giftOptionsForKey = outer4_10.getGiftOptionsForKey(v3Result);
            obj = { jwsRepresentation: tmp.jwsRepresentation, encodedReceipt: tmp.transactionReceipt };
            let currencyCode;
            if (null != product) {
              currencyCode = product.currencyCode;
            }
            obj.presentmentCurrency = currencyCode;
            let price;
            if (null != product) {
              price = product.price;
            }
            obj.presentmentAmount = price;
            let countryCode;
            if (null != product) {
              countryCode = product.countryCode;
            }
            obj.appStoreRegion = countryCode;
            obj = {};
            let gift_style;
            if (null != giftOptionsForKey) {
              gift_style = giftOptionsForKey.gift_style;
            }
            obj.gift_style = gift_style;
            let reward_sku_ids;
            if (null != giftOptionsForKey) {
              reward_sku_ids = giftOptionsForKey.reward_sku_ids;
            }
            obj.reward_sku_ids = reward_sku_ids;
            obj.giftInfoOptions = obj;
            obj.source = "restoreSubscription";
            obj.skipDupCheck = outer3_0;
            if (null != (yield tmp6Result.then((arg0) => {
              let obj = flag(outer5_3[22]);
              obj = {};
              obj = { productId: purchaseResponse.productIdentifier, transactionDate: purchaseResponse.transactionDate, transactionReceipt: purchaseResponse.transactionReceipt, transactionId: str.toString() };
              obj.purchase = obj;
              obj.finishTransaction(obj);
              if (null != arg0) {
                const obj1 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key: c2 };
                self(outer5_3[23]).dispatch(obj1);
                const obj4 = self(outer5_3[23]);
              }
              let tmp6 = null;
              if (null != arg0) {
                tmp6 = closure_0;
              }
              return tmp6;
            }))) {
              outer1_0.push(purchaseResponse);
            }
          }
          const tmp40 = outer2_26(self(outer2_3[24])(arr).uniqBy((purchaseResponse) => {
            let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
            if (null == originalTransactionIdentifier) {
              originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
            }
            return originalTransactionIdentifier;
          }).value());
          const iter6 = tmp40();
          let iter4 = iter6;
          if (!iter6.done) {
            const _Symbol = Symbol;
            const _loopResult = _loop(iter4.value);
            HermesBuiltin.ensureObject("iterator is not an object");
            while (true) {
              let iter = tmp16(undefined);
              let tmp17 = iter;
              let str3 = "iterator.next() did not return an object";
              let ensureObjectResult1 = HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter.done) {
                break;
              } else {
                do {
                  let value = iter2.value;
                  let tmp19 = tmp40;
                  iter3 = tmp41();
                  iter4 = iter3;
                } while (iter3.done);
              }
            }
            const tmp13 = _loop(iter4.value)[Symbol.iterator]();
          }
          if (arr3.length > 0) {
            yield flag(outer2_3[18]).fetchSubscriptions();
            const obj5 = flag(outer2_3[18]);
          }
          if (items1.length > 0) {
            const item = arr5.forEach((error) => {
              const result = flag(outer3_3[17]).captureBillingException(error);
            });
            const _Error = Error;
            const error = new Error("There were some errors while trying to restore");
            throw error;
          } else {
            obj2 = { type: "IAP_RESTORE_PURCHASES_END" };
            self(outer2_3[23]).dispatch(obj2);
            return items;
          }
          arr3 = items;
          const iter5 = self(outer2_3[24])(arr).uniqBy((purchaseResponse) => {
            let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
            if (null == originalTransactionIdentifier) {
              originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
            }
            return originalTransactionIdentifier;
          });
          tmp41 = tmp40;
        }
      }
    })();
  }
};
let items = [require("module_7204").ErrorCode.E_USER_CANCELLED, ME.StoreKitErrors.PAYMENT_CANCELED];
let set = new Set(items);
obj = { NONE: "none", CANNOT_MAKE_REQUEST: "cannot_make_request", INVALID_CURRENCY: "invalid_currency", PURCHASE_INCOMPLETE: "purchase_incomplete", POST_PURCHASE_FAILED: "post_purchase_failed" };
let result = set.fileFinishedImporting("actions/native/BillingActionCreators.tsx");

export default obj;
export { getIAPJWTRequestData };
export { updateAppleSubscription };
export const cancelGenericSubscription = function cancelGenericSubscription(requestIdentifier, subscriptionId, outer1_1) {
  return _cancelGenericSubscription(...arguments);
};
export { isValidCurrency };
export const SubscriptionPurchaseFailureReason = obj;
export const createGenericSubscription = function createGenericSubscription(outer1_5) {
  return _createGenericSubscription(...arguments);
};
export const modifyGenericSubscription = function modifyGenericSubscription(arg0) {
  return _modifyGenericSubscription(...arguments);
};
export const resubscribeGenericSubscription = function resubscribeGenericSubscription(outer1_5, isACOM) {
  return _resubscribeGenericSubscription(...arguments);
};
export const mobilePurchaseSKU = function mobilePurchaseSKU(arg0, arg1) {
  return _mobilePurchaseSKU(...arguments);
};
export const migrateToACOM = function migrateToACOM() {
  return _migrateToACOM(...arguments);
};
