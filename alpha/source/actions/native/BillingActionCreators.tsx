// Module ID: 7138
// Function ID: 7139
// Name: BillingActionCreators
// Dependencies: [109, 5, 19, 7139, 7140, 1390, 4775, 7131, 1085, 1096, 21, 3, 1264, 510, 1265, 1295, 4784, 5724, 1382, 12740, 6959, 12742, 584, 12, 7126, 7136, 10494, 1126, 10052, 5300, 10065, 2000, 5934, 7129, 7125, 4781, 10061, 5635, 13612, 13614, 4791, 5938, 1273, 13615, 13616, 2077, 13617, 10163, 10169, 1279, 9397, 2]
// Exports: cancelGenericSubscription, createGenericSubscription, migrateToACOM, mobilePurchaseSKU, modifyGenericSubscription, resubscribeGenericSubscription

// Module 7138 (BillingActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 1096 */;
import intl6 from "intl" /* 1126 */;
import _modDef1264 from "module_1264" /* 1264 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import BillingUtils from "BillingUtils" /* 4784 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5635 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5724 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5938 */;
import ProductIds from "ProductIds" /* 7126 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7136 */;
import ACOMExperiments from "ACOMExperiments" /* 9397 */;
import showSpendingLimitReachedAlert from "showSpendingLimitReachedAlert" /* 10061 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 10494 */;
import IAPUtils from "IAPUtils" /* 12740 */;
import _mod12742 from "module_12742" /* 12742 */;
import ErrorUtilsAll from "ErrorUtils" /* 13612 */;
import purchaseExceptionAlerts from "purchaseExceptionAlerts" /* 13614 */;
import APBRequestOperations from "APBRequestOperations" /* 13615 */;
import ACRequestOperations from "ACRequestOperations" /* 13616 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GiftPromotionStore from "GiftPromotionStore" /* 7139 */;
import PremiumPlanPurchasedStore from "PremiumPlanPurchasedStore" /* 7140 */;
import UserStore from "UserStore" /* 1390 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;
import IAPStore from "IAPStore" /* 7131 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const IAPUtilsDefault = IAPUtils;
let activeGuildSubscriptions, body2, giftOptionsForKey, length, original_transaction_id, product_id;

let StoreKitErrors;
let c10;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let tmp2;
let tmp5;
let unpackModuleId;
const AnalyticsUtilsDefault = tmp2(1265);
const HTTPUtils = tmp5(1295);
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
      const self = this;
      const self2 = this;
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
  obj = _modDef1264;
  const v3Result = obj.v3(first);
  require = v3Result;
  let Storage = Storage2.Storage;
  if (!skipDupCheck) {
    let resolved;
    if (Storage.get(localAppleReceiptHash) === v3Result) {
      resolved = Promise.resolve(null);
    }
    return resolved;
  }
  let tmp8 = true !== isGift;
  if (!tmp8) {
    let tmp9 = null != giftInfoOptions;
    if (tmp9) {
      let gift_style;
      if (giftInfoOptions != null) {
        gift_style = giftInfoOptions.gift_style;
      }
      tmp9 = null != gift_style;
    }
    tmp8 = tmp9;
  }
  if (!tmp8) {
    obj2 = { source, sku_id: entitlementSkuId };
    const tmp2Result = AnalyticsUtilsDefault;
    tmp2Result.track(constants.GIFT_INFO_OPTIONS_MISSING, obj2);
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants2.BILLING_APPLY_APPLE_RECEIPT, body: { encoded_receipt: encodedReceipt, entitlement_sku_id: entitlementSkuId, presentment_currency: presentmentCurrency, presentment_amount: presentmentAmount, app_store_region: appStoreRegion, gift_info_options: giftInfoOptions, is_gift: isGift, source, jws_representations: jwsRepresentations, order_id: orderId }, retries, oldFormErrors: true, rejectWithError: true };
  const postResult = HTTP.post(request);
  const nextPromise = postResult.then((result) => {
    const Storage = Storage2.Storage;
    result = Storage.set(localAppleReceiptHash, require);
    return result;
  });
  resolved = nextPromise.catch((error) => {
    let obj3;
    obj2 = { tags: obj3 };
    obj3 = { source };
    obj = BillingUtils;
    const result = obj.captureBillingException(error, obj2);
    throw error;
  });
}
let obj = function _getTrialOfferSignature() {
  obj = _asyncToGenerator(async (product_id, product_offer_id, app_account_token) => {
    let closure_3;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj5;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE, body: obj5, rejectWithError: false };
      obj5 = { product_id, product_offer_id, app_account_token };
      await HTTP.post(request);
      product_id = closure_5;
      const obj3 = closure_132_0(closure_132_3[16]);
      const result = obj3.captureBillingException(product_id);
      await "IconComponent";
      return value.body;
    })();
  });
  return obj(...arguments);
};
function preCompletionFailureReason(code) {
  return set.has(code.code) ? obj2.USER_CANCELLED : obj2.PURCHASE_INCOMPLETE;
}
function handlePurchaseException(code, purchase_type, arg2, productId) {
  let flag2;
  let intl2;
  let intl3;
  let intl4;
  let message1;
  let name;
  let obj8;
  let stack;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (!set.has(code.code)) {
    const isSpendingLimitError = showSpendingLimitReachedAlert.isSpendingLimitError;
    let billingError = code;
    showSpendingLimitReachedAlert;
    if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
      const self = this;
      const self2 = this;
      billingError = new tmp(5635).BillingError(code);
    }
    if (isSpendingLimitError(billingError)) {
      const tmpResult = showSpendingLimitReachedAlert;
      const result = tmpResult.showSpendingLimitReachedAlert();
    } else if (code.code !== _mod12742.ErrorCode.E_DEFERRED_PAYMENT) {
      const message = code.message;
      const _JSON = JSON;
      obj2 = { name, message: message1, stack };
      const merged = Object.assign(code);
      name = undefined;
      if (code != null) {
        name = code.name;
      }
      message1 = undefined;
      if (code != null) {
        message1 = code.message;
      }
      stack = undefined;
      if (code != null) {
        stack = code.stack;
      }
      const json = stringify(obj2);
      const obj3 = ErrorUtilsAll;
      const underlyingIOSError = obj3.getUnderlyingIOSError(code);
      const tmpResult3 = purchaseExceptionAlerts;
      const purchaseExceptionAlert = tmpResult3.getPurchaseExceptionAlert(code.message);
      if (null == purchaseExceptionAlert) {
        if (null != underlyingIOSError) {
          const obj4 = { title: intl2.string(intl6.t.POsVOt), body: underlyingIOSError };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl2 = tmp(1126).intl;
          show(obj4);
          throw code;
        }
      }
      let title;
      if (purchaseExceptionAlert != null) {
        title = purchaseExceptionAlert.title;
      }
      if (title == null) {
        const intl = tmp(1126).intl;
        title = intl.string(tmp(1126).t.zrhHH3);
      }
      let body1;
      if (purchaseExceptionAlert != null) {
        body1 = purchaseExceptionAlert.body;
      }
      if (body1 == null) {
        const intl5 = tmp(1126).intl;
        const stringResult = intl5.string(intl6.t.PjfUXe);
        let tmp23 = "HTTPResponseError" === code.name;
        if (!tmp23) {
          tmp23 = "status" in code && "method" in code;
          const tmp22 = "status" in code && "method" in code;
        }
        let tmp24 = stringResult;
        if (!tmp23) {
          tmp24 = code.message || stringResult;
        }
        let message2 = tmp24;
        if (null != code.body) {
          const body = code.body;
          message2 = tmp24;
          if (null != body.apple_error_code) {
            const _HermesInternal = HermesInternal;
            message2 = "" + stringResult + " (code: " + body.apple_error_code + ")";
          }
        }
        let billingError1 = code;
        if (!(code instanceof V6OrEarlierAPIError.BillingError)) {
          const self3 = this;
          const self4 = this;
          billingError1 = new tmp(5635).BillingError(code);
        }
        const tmp29 = message2 === stringResult && flag && billingError1.code !== tmp(4791).ErrorCodes.UNKNOWN && -1 !== billingError1.code && null != billingError1.message;
        if (tmp29) {
          message2 = billingError1.message;
        }
        body1 = message2;
      }
      const obj6 = { title, body: body1, isDismissable: true, hideActionSheet: flag };
      const obj5 = actions_AlertActionCreatorsDefault;
      obj5.show(obj6);
      if (!set1.has(code.code)) {
        const obj7 = { tags: obj8 };
        obj8 = { source: BILLING, purchase_type };
        const tmpResult4 = BillingUtils;
        const result1 = tmpResult4.captureBillingException(code, obj7);
      }
      if (flag) {
        throw code;
      }
    } else {
      const obj9 = { title: intl3.string(intl6.t.eMhkxR), body: intl4.string(intl6.t.gBJwjU), isDismissable: true, hideActionSheet: flag };
      const show2 = actions_AlertActionCreatorsDefault.show;
      actions_AlertActionCreatorsDefault;
      intl3 = tmp(1126).intl;
      intl4 = tmp(1126).intl;
      show2(obj9);
      productId = productId.productId;
      const track = AnalyticsUtilsDefault.track;
      const APPLE_DEFERRED_PAYMENT_PROMPTED = constants.APPLE_DEFERRED_PAYMENT_PROMPTED;
      AnalyticsUtilsDefault;
      if (productId == null) {
        productId = code.productId;
      }
      obj = { product_id: productId, sku_id: productId.skuId, purchase_type, is_gift: flag2, plan_id: null, request_identifier: null, order_id: null };
      flag2 = productId.isGift;
      if (flag2 == null) {
        flag2 = false;
      }
      ({ planId: obj.plan_id, requestIdentifier: obj.request_identifier, orderId: obj.order_id } = productId);
      track(APPLE_DEFERRED_PAYMENT_PROMPTED, obj);
      if (flag) {
        throw code;
      }
    }
  }
}
function canMakeIAPRequest() {
  let tmp2 = !IAPStore.isBusy();
  IAPStore.isBusy();
  if (tmp2) {
    obj = BlockedPaymentsCountryExperiment;
    const isPaymentsBlocked = obj.getIsPaymentsBlocked();
    let flag = !isPaymentsBlocked;
    if (isPaymentsBlocked) {
      openBlockedPaymentsCountryActionSheetDefault();
      flag = false;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function clearAndMakeIAPRequest(arg0, arg1, arg2, arg3, arg4) {
  return obj(...arguments);
}
obj = function _clearAndMakeIAPRequest() {
  obj = _asyncToGenerator(async (arg0, value, arg2, arg3, arg4) => {
    let obj3;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    let closure_3 = arg3;
    closure_4 = arg4;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_6 = tmp4;
            closure_5 = tmp;
            c7 = 1;
            c8 = 1;
            const obj5 = { value: obj3.clearTransactionIOS(), done: false };
            obj3 = _mod12742;
            return obj5;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c8 = 3;
          obj = { value: closure_134_32(closure_0, closure_1, closure_2, closure_3, closure_4), done: true };
          return obj;
        }
      } catch (tmp20) {
        c8 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
function makeTrackedIAPRequest(arg0, arg1, arg2, arg3, arg4) {
  return obj(...arguments);
}
obj = function _makeTrackedIAPRequest() {
  obj = _asyncToGenerator(async (request_identifier, product_identifier, arg2, success, arg4) => {
    let closure_2 = arg2;
    closure_4 = arg4;
    let c11 = 0;
    let c12 = 0;
    let c10 = 0;
    return (async (arg0, value, arg2, arg3, arg4) => {
      let obj12;
      let planId;
      let planId1;
      let planId2;
      let skuId;
      let skuId1;
      let skuId2;
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let transaction_id;
          let transactionDate;
          let str6;
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              return { value, done: true };
            } else {
              closure_7 = tmp4;
              product_identifier = closure_2;
              closure_2 = closure_4;
              original_transaction_id = undefined;
              transaction_id = undefined;
              transactionDate = undefined;
              length = undefined;
              str6 = undefined;
              success = false;
              obj = null;
              c10 = 2;
              c11 = 3;
              c12 = 1;
              const obj4 = { value: obj12.makeIAPRequest(product_identifier, closure_2, closure_3), done: false };
              obj12 = IAPUtils;
              return obj4;
            }
          } else if (1 === c11) {
            c10 = 0;
            const obj5 = { request_identifier, success, product_identifier, sku_id: skuId, plan_id: planId };
            skuId = undefined;
            const track3 = closure_136_1(closure_136_3[14]).track;
            const APPLE_PARTNER_IAP_REQUEST_SENT3 = closure_136_16.APPLE_PARTNER_IAP_REQUEST_SENT;
            closure_136_1(closure_136_3[14]);
            const tmp73 = closure_9;
            if (closure_2 != null) {
              skuId = closure_2.skuId;
            }
            planId = undefined;
            if (closure_2 != null) {
              planId = closure_2.planId;
            }
            const merged = Object.assign(obj);
            track3(APPLE_PARTNER_IAP_REQUEST_SENT3, obj5);
            throw tmp73;
          } else if (2 === c11) {
            c10 = 1;
            let closure_10 = closure_9;
            const obj6 = closure_136_2(closure_136_3[38]);
            length = obj6.getUnderlyingIOSError(closure_10);
            if (null != length) {
              if (length.length > 0) {
                str6 = length;
              }
              let str1;
              if (closure_10.code != null) {
                str1 = str2.toString();
              }
              obj = { error_code: str1, error_message: str6 };
              throw closure_10;
            }
            if (closure_10.message != null) {
              str6 = str.toString();
            }
          } else if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            const obj8 = { request_identifier, success, product_identifier, sku_id: skuId1, plan_id: planId1 };
            skuId1 = undefined;
            const track2 = closure_136_1(closure_136_3[14]).track;
            const APPLE_PARTNER_IAP_REQUEST_SENT2 = closure_136_16.APPLE_PARTNER_IAP_REQUEST_SENT;
            closure_136_1(closure_136_3[14]);
            if (closure_2 != null) {
              skuId1 = closure_2.skuId;
            }
            planId1 = undefined;
            if (closure_2 != null) {
              planId1 = closure_2.planId;
            }
            const merged1 = Object.assign(obj);
            track2(APPLE_PARTNER_IAP_REQUEST_SENT2, obj8);
            c12 = 3;
            return { value, done: true };
          } else {
            original_transaction_id = value;
            success = true;
            const str4 = original_transaction_id.purchaseResponse.transactionIdentifier;
            transaction_id = str4.toString();
            transactionDate = original_transaction_id.purchaseResponse.transactionDate;
            let str7;
            if (original_transaction_id.purchaseResponse.originalTransactionIdentifier != null) {
              str7 = str5.toString();
            }
            original_transaction_id = str7;
            if (str7 == null) {
              original_transaction_id = transaction_id;
            }
            obj = { original_transaction_id, original_transaction_date: transaction_id, transaction_id, transaction_date: transactionDate };
            const originalTransactionDate = original_transaction_id.purchaseResponse.originalTransactionDate;
            transaction_id = originalTransactionDate;
            if (originalTransactionDate == null) {
              transaction_id = transactionDate;
            }
            c10 = 0;
            const obj10 = { request_identifier, success, product_identifier, sku_id: skuId2, plan_id: planId2 };
            skuId2 = undefined;
            const track = closure_136_1(closure_136_3[14]).track;
            const APPLE_PARTNER_IAP_REQUEST_SENT = closure_136_16.APPLE_PARTNER_IAP_REQUEST_SENT;
            closure_136_1(closure_136_3[14]);
            const tmp17 = original_transaction_id;
            if (closure_2 != null) {
              skuId2 = closure_2.skuId;
            }
            planId2 = undefined;
            if (closure_2 != null) {
              planId2 = closure_2.planId;
            }
            const merged2 = Object.assign(obj);
            track(APPLE_PARTNER_IAP_REQUEST_SENT, obj10);
            c12 = 3;
            return { value: tmp17, done: true };
          }
        } catch (tmp90) {
          closure_9 = tmp90;
          if (0 === c10) {
            c12 = 3;
            throw tmp90;
          } else if (1 === tmp92) {
            c11 = 1;
          } else {
            c11 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function getIAPJWTRequestData(arg0) {
  return obj(...arguments);
}
obj = function _getIAPJWTRequestData() {
  obj = _asyncToGenerator(async (body) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj4;
      let tmp15 = TrackedHTTPUtilsDefault;
      const request = { url: constants.BILLING_CREATE_APPLE_IAP_JWT_TOKEN, body, oldFormErrors: true, trackedActionData: obj4, rejectWithError: true };
      obj4 = {
        event: discord_common_AnalyticsUtils.NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
        properties(body) {
          let country_code;
          let gift_info_options;
          let is_gift;
          let items;
          if (operation.operation !== closure_2_0(closure_2_3[43]).APBRequestOperations.CREATE) {
            if (operation.operation !== closure_2_0(closure_2_3[44]).ACRequestOperations.CREATE) {
              if (operation.operation === closure_2_0(closure_2_3[44]).ACRequestOperations.MODIFY) {
                const subscription_items = tmp.subscription_items;
                const _JSON2 = JSON;
                const obj3 = { subscription_items_json_string: JSON.stringify(subscription_items) };
                const tmp15 = closure_2_7(operation, closure_2_5);
                const merged = Object.assign(tmp15);
                obj = obj3;
              } else {
                if (operation.operation !== closure_2_0(closure_2_3[43]).APBRequestOperations.CHARGE) {
                  if (operation.operation !== closure_2_0(closure_2_3[44]).ACRequestOperations.CHARGE) {
                    obj = {};
                    const merged1 = Object.assign(tmp);
                  }
                }
                ({ is_gift, gift_info_options } = operation);
                const obj4 = { sku_id: null, request_country_code: null };
                ({ sku_id: obj2.sku_id, country_code: obj2.request_country_code } = operation);
                const merged2 = Object.assign(closure_2_7(tmp, closure_2_6));
                if (null != gift_info_options) {
                  const _JSON = JSON;
                  obj4.gift_info_options = JSON.stringify(gift_info_options);
                }
                obj = obj4;
                if (is_gift) {
                  obj4.is_gift = is_gift;
                  obj = obj4;
                }
              }
            }
            let str;
            const exact = closure_2_0(closure_2_3[45]).exact;
            closure_2_0(closure_2_3[45]);
            if (body != null) {
              body = body.body;
              if (body != null) {
                str = body.request_data;
              }
            }
            if (str == null) {
              str = "";
            }
            const obj5 = { jwt_token_exists: str.length > 0 };
            const merged3 = Object.assign(obj);
            return exact(obj5);
          }
          ({ items, country_code } = operation);
          const obj9 = { subscription_items_json_string: JSON.stringify(items), request_country_code: country_code };
          const tmp19 = closure_2_7(operation, closure_2_4);
          const merged4 = Object.assign(tmp19);
          obj = obj9;
        }
      };
      const post = tmp15.post;
      await post(request);
      body2 = value;
      obj = { requestJSONString: JSON.stringify(body2.body.request_data) };
      let _JSON = JSON;
      return obj;
    })();
  });
  return obj(...arguments);
};
function updateAppleSubscription(arg0) {
  return obj(...arguments);
}
obj = function _updateAppleSubscription() {
  obj = _asyncToGenerator(async (body) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c1 === 2) {
        c1 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const request = { url: constants2.BILLING_APPLE_SUBSCRIPTION(body.subscription_id), body, oldFormErrors: true, trackedActionData: obj4, rejectWithError: false };
              const patch = TrackedHTTPUtilsDefault.patch;
              TrackedHTTPUtilsDefault;
              c2 = 1;
              c1 = 1;
              obj4 = {
                event: discord_common_AnalyticsUtils.NetworkActionNames.APPLE_JWT_TOKEN_CREATE,
                properties(body) {
                          obj = {};
                          const merged = Object.assign(closure_0);
                          let str;
                          const exact = closure_2_0(closure_2_3[45]).exact;
                          closure_2_0(closure_2_3[45]);
                          if (body != null) {
                            body = body.body;
                            if (body != null) {
                              str = body.request_data;
                            }
                          }
                          if (str == null) {
                            str = "";
                          }
                          obj2 = { jwt_token_exists: str.length > 0 };
                          const merged1 = Object.assign(obj);
                          return exact(obj2);
                        }
              };
              const obj5 = { value: patch(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
function determineProductId(arg0) {
  if (APBRequestOperations.APBRequestOperations.CREATE !== arg0) {
    if (APBRequestOperations.APBRequestOperations.CANCEL !== arg0) {
      if (APBRequestOperations.APBRequestOperations.RESUBSCRIBE !== arg0) {
        if (APBRequestOperations.APBRequestOperations.REACTIVATE !== arg0) {
          if (APBRequestOperations.APBRequestOperations.CHARGE === arg0) {
            return ProductIds.ProductIds.GENERIC_CONSUMABLE;
          } else {
            if (ACRequestOperations.ACRequestOperations.CREATE !== arg0) {
              if (ACRequestOperations.ACRequestOperations.CANCEL !== arg0) {
                if (ACRequestOperations.ACRequestOperations.REACTIVATE !== arg0) {
                  if (ACRequestOperations.ACRequestOperations.MODIFY !== arg0) {
                    if (ACRequestOperations.ACRequestOperations.CHARGE === arg0) {
                      return ProductIds.ProductIds.GENERIC_CONSUMABLE;
                    } else {
                      const _Error = Error;
                      const self = this;
                      const self2 = this;
                      const error = new Error("Invalid operation");
                      throw error;
                    }
                  }
                }
              }
            }
            return ProductIds.ProductIds.GENERIC_SUBSCRIPTION;
          }
        }
      }
    }
  }
  return ProductIds.ProductIds.GENERIC_SUBSCRIPTION;
}
obj = function _cancelGenericSubscription() {
  obj = _asyncToGenerator(async (arg0, subscription_id, arg2) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj10;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let CANCEL;
          let tmp;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              CANCEL = undefined;
              tmp = undefined;
              const tmp49 = closure_2;
              if (canMakeIAPRequest()) {
                if (tmp49) {
                  CANCEL = tmp35(tmp36[44]).ACRequestOperations.CANCEL;
                } else {
                  CANCEL = tmp35(tmp36[43]).APBRequestOperations.CANCEL;
                }
                const tmp38 = determineProductId(CANCEL);
                tmp = tmp38;
                c7 = 1;
                c8 = 1;
                const obj5 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp38 };
                const obj6 = { value: obj10.dispatch(obj5), done: false };
                obj10 = DispatcherDefault;
                return obj6;
              } else {
                c8 = 3;
                return { value: false, done: true };
              }
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 1;
              c7 = 3;
              c8 = 1;
              const obj8 = { operation: CANCEL, request_identifier: requestIdentifier, subscription_id };
              const obj9 = { value: closure_132_36(obj8), done: false };
              return obj9;
            }
          } else if (2 === c7) {
            c6 = 0;
            const obj11 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: tmp };
            const obj4 = closure_132_1(closure_132_3[22]);
            obj4.dispatch(obj11);
            let str = "partner_subscription";
            const tmp19 = closure_132_28;
            if (closure_2) {
              str = "advanced_commerce";
            }
            const obj12 = { productId: tmp, requestIdentifier };
            tmp19(closure_5, str, true, obj12);
            c8 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            const obj14 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: tmp };
            obj = closure_132_1(closure_132_3[22]);
            obj.dispatch(obj14);
            c6 = 0;
            c8 = 3;
            return { value: true, done: true };
          }
        } catch (tmp41) {
          closure_5 = tmp41;
          if (0 === c6) {
            c8 = 3;
            throw tmp41;
          } else {
            c7 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function isValidCurrency(arg0) {
  const values = Object.values(closure_17);
  return values.includes(arg0);
}
obj = function _createGenericSubscription() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let obj27;
    let obj6;
    let planId;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let orderId;
      try {
        let requestIdentifier;
        let productIdentifier;
        let obj13;
        let requestJSONString;
        let closure_9;
        let purchaseResponse;
        let originalPurchase;
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
            requestIdentifier = undefined;
            c1 = undefined;
            orderId = undefined;
            ({ requestIdentifier: c0, items: c1, currency: c2, countryCode: c3, orderId: c4 } = closure_0);
            productIdentifier = undefined;
            obj13 = undefined;
            requestJSONString = undefined;
            closure_9 = undefined;
            purchaseResponse = undefined;
            originalPurchase = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (closure_130_29()) {
            if (closure_130_40(tmp)) {
              productIdentifier = closure_130_38(closure_130_0(closure_130_3[44]).ACRequestOperations.CREATE);
              const obj5 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier };
              c5 = 2;
              c6 = 1;
              const obj7 = { value: obj27.dispatch(obj5), done: false };
              obj27 = closure_130_1(closure_130_3[22]);
              return obj7;
            } else {
              const obj8 = { success: false, failureReason: closure_130_41.INVALID_CURRENCY };
              c6 = 3;
              const obj9 = { value: obj8, done: true };
              return obj9;
            }
          } else {
            const obj10 = { success: false, failureReason: closure_130_41.CANNOT_MAKE_REQUEST };
            c6 = 3;
            const obj11 = { value: obj10, done: true };
            return obj11;
          }
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            orderId = 1;
            obj13 = { request_identifier: requestIdentifier, items: c1.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })), currency: tmp, country_code: tmp69, order_id: orderId };
            const obj14 = { operation: closure_130_0(closure_130_3[44]).ACRequestOperations.CREATE };
            const merged = Object.assign(obj13);
            c5 = 4;
            c6 = 1;
            const obj16 = { value: closure_130_34(obj14), done: false };
            return obj16;
          }
        } else if (3 === c5) {
          let PURCHASE_INCOMPLETE;
          orderId = 0;
          let closure_12 = closure_3;
          const obj17 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier };
          const obj15 = closure_130_1(closure_130_3[22]);
          obj15.dispatch(obj17);
          let tmp33 = null == orderId;
          const tmp30 = closure_130_28;
          if (!tmp33) {
            tmp33 = c6;
          }
          const obj19 = { productId: productIdentifier, planId, requestIdentifier, orderId };
          const obj18 = closure_130_0(closure_130_3[35]);
          const baseSubscriptionItemForSubscriptionItems = obj18.getBaseSubscriptionItemForSubscriptionItems(c1);
          planId = undefined;
          if (baseSubscriptionItemForSubscriptionItems != null) {
            planId = baseSubscriptionItemForSubscriptionItems.planId;
          }
          tmp30(closure_12, "advanced_commerce", tmp33, obj19);
          if (c6) {
            PURCHASE_INCOMPLETE = tmp52.POST_PURCHASE_FAILED;
          } else {
            PURCHASE_INCOMPLETE = tmp52.PURCHASE_INCOMPLETE;
          }
          const obj20 = { success: false, failureReason: PURCHASE_INCOMPLETE };
          c6 = 3;
          const obj21 = { value: obj20, done: true };
          return obj21;
        } else if (4 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            orderId = 0;
            c6 = 3;
            const obj22 = { value, done: true };
            return obj22;
          } else {
            requestJSONString = value.requestJSONString;
            const obj34 = closure_130_0(closure_130_3[35]);
            const baseSubscriptionItemForSubscriptionItems1 = obj34.getBaseSubscriptionItemForSubscriptionItems(c1);
            let planId1;
            const tmp88 = closure_130_30;
            if (baseSubscriptionItemForSubscriptionItems1 != null) {
              planId1 = baseSubscriptionItemForSubscriptionItems1.planId;
            }
            const obj23 = { planId: planId1 };
            c5 = 5;
            c6 = 1;
            const obj24 = { value: tmp88(requestIdentifier, requestJSONString, productIdentifier, true, obj23), done: false };
            return obj24;
          }
        } else if (5 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            orderId = 0;
            c6 = 3;
            const obj25 = { value, done: true };
            return obj25;
          } else {
            closure_9 = value;
            purchaseResponse = closure_9.purchaseResponse;
            originalPurchase = closure_9.originalPurchase;
            const obj26 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: tmp, appStoreRegion: tmp69, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "createGenericSubscription", orderId };
            c5 = 6;
            c6 = 1;
            const obj28 = { value: closure_130_23(obj26), done: false };
            return obj28;
          }
        } else if (6 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            orderId = 0;
            c6 = 3;
            const obj29 = { value, done: true };
            return obj29;
          } else {
            const obj30 = { purchase: originalPurchase };
            c5 = 7;
            c6 = 1;
            const obj31 = { value: obj6.finishTransaction(obj30), done: false };
            obj6 = closure_130_0(closure_130_3[21]);
            return obj31;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          orderId = 0;
          c6 = 3;
          const obj32 = { value, done: true };
          return obj32;
        } else {
          obj = closure_130_1(closure_130_3[22]);
          const obj33 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier };
          obj.dispatch(obj33);
          const obj35 = { success: true, failureReason: closure_130_41.NONE };
          orderId = 0;
          c6 = 3;
          const obj36 = { value: obj35, done: true };
          return obj36;
        }
      } catch (tmp69) {
        closure_3 = tmp69;
        if (0 === orderId) {
          c6 = 3;
          throw tmp69;
        } else {
          c5 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _modifyGenericSubscription() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let intl2;
    let obj19;
    let obj22;
    let obj32;
    let obj35;
    let planId;
    let tmp;
    let tmp3;
    let tmp4;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let v0;
      try {
        let requestIdentifier;
        let subscription_id;
        let GENERIC_SUBSCRIPTION;
        let closure_8;
        let purchaseResponse;
        let originalPurchase;
        c6 = 2;
        switch (c5) {
          case 0:
          {
            let c0;
            let c1;
            let c2;
            let c3;
            let c4;
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp;
              let closure_1 = tmp4;
              requestIdentifier = undefined;
              subscription_id = undefined;
              tmp = undefined;
              v0 = undefined;
              ({ requestIdentifier: c0, subscriptionId: c1, items: c2, orderId: c3, onPurchaseComplete: c4 } = closure_0);
              GENERIC_SUBSCRIPTION = undefined;
              let requestJSONString;
              closure_8 = undefined;
              value = undefined;
              purchaseResponse = undefined;
              originalPurchase = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
            break;
          }
          case 1:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (closure_130_29()) {
              GENERIC_SUBSCRIPTION = closure_130_0(closure_130_3[24]).ProductIds.GENERIC_SUBSCRIPTION;
              const obj7 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: GENERIC_SUBSCRIPTION };
              c5 = 2;
              c6 = 1;
              const obj8 = { value: obj35.dispatch(obj7), done: false };
              obj35 = closure_130_1(closure_130_3[22]);
              return obj8;
            } else {
              const obj9 = { success: false, failureReason: closure_130_41.CANNOT_MAKE_REQUEST };
              c6 = 3;
              const obj11 = { value: obj9, done: true };
              return obj11;
            }
            break;
          }
          case 2:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              v0 = 1;
              const obj14 = { operation: closure_130_0(closure_130_3[44]).ACRequestOperations.MODIFY, request_identifier: requestIdentifier, subscription_id, subscription_items: tmp.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })), order_id: tmp109 };
              c5 = 4;
              c6 = 1;
              const obj15 = { value: closure_130_34(obj14), done: false };
              return obj15;
            }
            break;
          }
          case 3:
          {
            let PURCHASE_INCOMPLETE;
            v0 = 0;
            let closure_13 = closure_3;
            const obj16 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: GENERIC_SUBSCRIPTION };
            const obj25 = closure_130_1(closure_130_3[22]);
            obj25.dispatch(obj16);
            let tmp73 = null == tmp109;
            const tmp70 = closure_130_28;
            if (!tmp73) {
              tmp73 = c6;
            }
            const obj17 = { productId: GENERIC_SUBSCRIPTION, planId, requestIdentifier, orderId: tmp109 };
            const obj28 = closure_130_0(closure_130_3[35]);
            let baseSubscriptionItemForSubscriptionItems = obj28.getBaseSubscriptionItemForSubscriptionItems(tmp);
            planId = undefined;
            if (baseSubscriptionItemForSubscriptionItems != null) {
              planId = baseSubscriptionItemForSubscriptionItems.planId;
            }
            tmp70(closure_13, "advanced_commerce", tmp73, obj17);
            if (c6) {
              PURCHASE_INCOMPLETE = tmp92.POST_PURCHASE_FAILED;
            } else {
              PURCHASE_INCOMPLETE = tmp92.PURCHASE_INCOMPLETE;
            }
            const obj18 = { success: false, failureReason: PURCHASE_INCOMPLETE };
            c6 = 3;
            const obj20 = { value: obj18, done: true };
            return obj20;
          }
          case 4:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              let requestJSONString = value.requestJSONString;
              c5 = 5;
              c6 = 1;
              const obj23 = { value: obj22.clearTransactionIOS(), done: false };
              obj22 = closure_130_0(closure_130_3[21]);
              return obj23;
            }
            break;
          }
          case 5:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else {
              c5 = 6;
              c6 = 1;
              const obj26 = {
                value: obj19.retryACOMRequest(() => {
                            obj = closure_0(closure_3[35]);
                            const baseSubscriptionItemForSubscriptionItems = obj.getBaseSubscriptionItemForSubscriptionItems(closure_1_2);
                            let planId;
                            const tmp = closure_2_32;
                            const tmp2 = closure_1_0;
                            const tmp3 = closure_1_7;
                            const tmp4 = closure_1_5;
                            if (baseSubscriptionItemForSubscriptionItems != null) {
                              planId = baseSubscriptionItemForSubscriptionItems.planId;
                            }
                            obj2 = { planId };
                            return tmp(tmp2, tmp3, tmp4, true, obj2);
                          }),
                done: false
              };
              obj19 = closure_130_0(closure_130_3[46]);
              return obj26;
            }
            break;
          }
          case 6:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj27 = { value, done: true };
              return obj27;
            } else {
              closure_8 = value;
              if ("already_applied" === closure_8.kind) {
                const obj29 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: GENERIC_SUBSCRIPTION };
                const obj10 = closure_130_1(closure_130_3[22]);
                obj10.dispatch(obj29);
                const obj30 = { title: intl.string(closure_130_0(closure_130_3[27]).t.zrhHH3), body: intl2.string(closure_130_0(closure_130_3[27]).t.PjfUXe), isDismissable: true, hideActionSheet: true };
                const show = closure_130_1(closure_130_3[29]).show;
                const tmp38 = closure_130_1(closure_130_3[29]);
                intl = closure_130_0(closure_130_3[27]).intl;
                intl2 = closure_130_0(closure_130_3[27]).intl;
                show(obj30);
                const obj31 = { tags: obj32 };
                obj32 = { source: closure_130_22, purchase_type: "advanced_commerce_already_applied" };
                const obj13 = closure_130_0(closure_130_3[16]);
                const result = obj13.captureBillingException(closure_8.error, obj31);
                const obj33 = { success: false, failureReason: closure_130_41.POST_PURCHASE_FAILED };
                v0 = 0;
                c6 = 3;
                const obj34 = { value: obj33, done: true };
                return obj34;
              } else {
                value = closure_8.value;
                purchaseResponse = value.purchaseResponse;
                originalPurchase = value.originalPurchase;
                c6 = true;
                v0 = 2;
                let tmp29;
                if (v0 != null) {
                  tmp29 = v0();
                }
                c5 = 9;
                c6 = 1;
                const obj36 = { value: tmp29, done: false };
                return obj36;
              }
            }
            break;
          }
          case 7:
          {
            v0 = 1;
            let closure_12 = closure_3;
            const obj6 = closure_130_0(closure_130_3[16]);
            const result1 = obj6.captureBillingException(closure_12);
            const obj37 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "modifyGenericSubscription", orderId: tmp109 };
            c5 = 8;
            c6 = 1;
            const obj38 = { value: closure_130_23(obj37), done: false };
            return obj38;
          }
          case 8:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj39 = { value, done: true };
              return obj39;
            } else {
              obj2 = closure_130_0(closure_130_3[21]);
              const obj41 = { purchase: originalPurchase };
              c5 = 10;
              c6 = 1;
              const obj42 = { value: obj2.finishTransaction(obj41), done: false };
              return obj42;
            }
            break;
          }
          case 9:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              v0 = 1;
            }
            break;
          }
          default:
          {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj43 = { value, done: true };
              return obj43;
            } else {
              const obj44 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: GENERIC_SUBSCRIPTION };
              const obj40 = closure_130_1(closure_130_3[22]);
              obj40.dispatch(obj44);
              const obj45 = { success: true, failureReason: closure_130_41.NONE };
              v0 = 0;
              c6 = 3;
              const obj46 = { value: obj45, done: true };
              return obj46;
            }
            break;
          }
        }
      } catch (tmp109) {
        closure_3 = tmp109;
        if (0 === v0) {
          c6 = 3;
          throw tmp109;
        } else if (1 === tmp111) {
          c5 = 3;
        } else {
          c5 = 7;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resubscribeGenericSubscription() {
  obj = _asyncToGenerator(async (arg0, subscription_id) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let obj23;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let tmp74;
        try {
          let requestIdentifier;
          let obj6;
          let requestJSONString;
          let purchaseResponse;
          let originalPurchase;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              requestIdentifier = undefined;
              subscription_id = undefined;
              ({ requestIdentifier: c0, subscriptionId: c1 } = closure_0);
              closure_2 = closure_1;
              obj6 = undefined;
              tmp74 = undefined;
              requestJSONString = undefined;
              closure_6 = undefined;
              purchaseResponse = undefined;
              originalPurchase = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else if (closure_131_29()) {
              let REACTIVATE;
              obj6 = { request_identifier: requestIdentifier, subscription_id };
              const tmp63 = closure_131_38;
              if (closure_2) {
                REACTIVATE = tmp65(tmp66[44]).ACRequestOperations.REACTIVATE;
              } else {
                REACTIVATE = tmp65(tmp66[43]).APBRequestOperations.REACTIVATE;
              }
              tmp74 = tmp63(REACTIVATE);
              c6 = 2;
              c7 = 1;
              const obj7 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: tmp74 };
              const obj8 = { value: obj23.dispatch(obj7), done: false };
              obj23 = closure_131_1(closure_131_3[22]);
              return obj8;
            } else {
              c7 = 3;
              return { value: false, done: true };
            }
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              if (closure_2) {
                const obj11 = { operation: closure_131_0(closure_131_3[44]).ACRequestOperations.REACTIVATE };
                const merged = Object.assign(obj6);
                c6 = 4;
                c7 = 1;
                const obj12 = { value: closure_131_34(obj11), done: false };
                return obj12;
              } else {
                const obj13 = { operation: closure_131_0(closure_131_3[43]).APBRequestOperations.REACTIVATE };
                const merged1 = Object.assign(obj6);
                c6 = 5;
                c7 = 1;
                const obj15 = { value: closure_131_36(obj13), done: false };
                return obj15;
              }
            }
          } else if (3 === c6) {
            c5 = 0;
            let closure_9 = tmp74;
            const obj16 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: tmp74 };
            const obj14 = closure_131_1(closure_131_3[22]);
            obj14.dispatch(obj16);
            let str = "partner_subscription";
            const tmp37 = closure_131_28;
            if (closure_2) {
              str = "advanced_commerce";
            }
            const obj17 = { productId: tmp74, requestIdentifier };
            tmp37(closure_9, str, true, obj17);
            c7 = 3;
            return { value: false, done: true };
          } else if (4 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              requestJSONString = value.requestJSONString;
              c6 = 6;
              c7 = 1;
              const obj19 = { value: closure_131_30(requestIdentifier, requestJSONString, tmp74, true), done: false };
              return obj19;
            }
          } else {
            if (5 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              }
            } else if (6 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                closure_6 = value;
                purchaseResponse = closure_6.purchaseResponse;
                originalPurchase = closure_6.originalPurchase;
                c6 = 7;
                c7 = 1;
                const obj22 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "resubscribeGenericSubscription" };
                const obj24 = { value: closure_131_23(obj22), done: false };
                return obj24;
              }
            } else if (7 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                c6 = 8;
                c7 = 1;
                const obj26 = { purchase: originalPurchase };
                const obj27 = { value: obj2.finishTransaction(obj26), done: false };
                obj2 = closure_131_0(closure_131_3[21]);
                return obj27;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            }
            const obj28 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: tmp74 };
            const obj9 = closure_131_1(closure_131_3[22]);
            obj9.dispatch(obj28);
            c5 = 0;
            c7 = 3;
            return { value: true, done: true };
          }
        } catch (tmp74) {
          if (0 === c5) {
            c7 = 3;
            throw tmp74;
          } else {
            c6 = 3;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _retryPendingPurchases() {
  obj = _asyncToGenerator(async (presentmentCurrency, appStoreRegion) => {
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value) {
      let obj14;
      let obj9;
      let str1;
      let str2;
      let str3;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        while (true) {
          let productIdentifier;
          let transaction_id;
          let closure_8;
          c9 = 2;
          let tmp4 = c8;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              closure_2 = undefined;
              closure_3 = undefined;
              purchaseResponse = undefined;
              productIdentifier = undefined;
              transaction_id = undefined;
              closure_8 = undefined;
              let obj21 = IAPUtilsDefault;
              c8 = 1;
              c9 = 1;
              let obj4 = { value: obj21.restorePurchases({ fullRestore: false }), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                closure_2 = value;
                closure_3 = [];
                if (0 === closure_2.length) {
                  c9 = 3;
                  return { value: true, done: true };
                } else {
                  closure_3 = closure_2;
                  closure_2 = closure_2[Symbol.iterator]();
                }
              }
            } else if (2 === tmp4) {
              c7 = 0;
              closure_2.return();
              throw closure_1_6;
            } else {
              if (3 === tmp4) {
                c7 = 1;
                let closure_9 = closure_1_6;
                let tmp21 = closure_133_1(closure_133_3[14]);
                let obj6 = { product_id: productIdentifier, transaction_id, error_code: str1, error_message: closure_9.message };
                let str = closure_9.code;
                str1 = undefined;
                let track = tmp21.track;
                let APPLE_RETRY_PENDING_PURCHASE_FAILED = closure_133_16.APPLE_RETRY_PENDING_PURCHASE_FAILED;
                if (str != null) {
                  str1 = str.toString();
                }
                let trackResult = track(APPLE_RETRY_PENDING_PURCHASE_FAILED, obj6);
                let arr = closure_3.push(closure_9);
              } else if (4 === tmp4) {
                if (arg0 === 1) {
                  c9 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 0;
                  closure_2.return();
                  c9 = 3;
                  let obj7 = { value, done: true };
                  return obj7;
                } else {
                  let obj15 = closure_133_0(closure_133_3[21]);
                  let obj8 = { purchase: obj9 };
                  obj9 = { productId: productIdentifier, transactionId: transaction_id, transactionDate: purchaseResponse.transactionDate, transactionReceipt: purchaseResponse.transactionReceipt };
                  c8 = 5;
                  c9 = 1;
                  let obj10 = { value: obj15.finishTransaction(obj8), done: false };
                  return obj10;
                }
              } else if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                closure_2.return();
                c9 = 3;
                let obj11 = { value, done: true };
                return obj11;
              } else {
                obj = closure_133_1(closure_133_3[14]);
                let obj12 = { product_id: productIdentifier, transaction_id };
                let trackResult1 = obj.track(closure_133_16.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED, obj12);
                c7 = 1;
              }
              c7 = 0;
            }
            if (closure_2 === undefined) {
              if (closure_3.length > 0) {
                let mapped = closure_3.map((message) => message.message);
                let _HermesInternal = HermesInternal;
                closure_8 = "Failed to retry pending purchases: " + mapped.join(", ");
                let tmp46 = closure_133_0(closure_133_3[16]);
                let _Error = Error;
                let self = this;
                let self2 = this;
                let captureBillingException = tmp46.captureBillingException;
                let error = new Error(closure_8);
                let obj13 = { tags: obj14 };
                obj14 = { pendingPurchaseFailures: str2.toString(), totalPendingPurchases: str3.toString() };
                str2 = closure_3.length;
                str3 = closure_2.length;
                let result = captureBillingException(error, obj13);
                c9 = 3;
                return { value: false, done: true };
              } else {
                c9 = 3;
                return { value: true, done: true };
              }
            } else {
              purchaseResponse = tmp38;
              purchaseResponse = purchaseResponse.purchaseResponse;
              productIdentifier = purchaseResponse.productIdentifier;
              let str7 = purchaseResponse.transactionIdentifier;
              transaction_id = str7.toString();
              c7 = 2;
              let obj18 = closure_133_1(closure_133_3[14]);
              let obj16 = { product_id: productIdentifier, transaction_id };
              let trackResult2 = obj18.track(closure_133_16.APPLE_RETRY_PENDING_PURCHASE_STARTED, obj16);
              let obj17 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency, appStoreRegion, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "retryPendingPurchases" };
              c8 = 4;
              c9 = 1;
              let obj19 = { value: closure_133_23(obj17), done: false };
              return obj19;
            }
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _mobilePurchaseSKU() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c7;
    let obj26;
    let obj34;
    let obj35;
    let obj5;
    function retryPendingPurchases(c2, c3) {
      return closure_1_45(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = value;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let giftInfoOptions;
      try {
        let request_identifier;
        let sku_id;
        let transactionReceipt;
        let purchaseSKU;
        let location_stack;
        let load_id;
        let isFreeForStaffSelfPurchase;
        let orderId;
        let closure_10;
        let productIdentifier;
        let c12;
        let obj25;
        let requestJSONString;
        let closure_15;
        let purchaseResponse;
        let originalPurchase;
        let closure_18;
        let key;
        let billingError;
        let staff;
        let closure_22;
        c9 = 2;
        switch (c8) {
          case 0:
          {
            let c0;
            let c1;
            let c2;
            let c3;
            let c4;
            let c5;
            let c6;
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              request_identifier = undefined;
              sku_id = undefined;
              transactionReceipt = undefined;
              purchaseSKU = undefined;
              location_stack = undefined;
              load_id = undefined;
              giftInfoOptions = undefined;
              isFreeForStaffSelfPurchase = undefined;
              orderId = undefined;
              closure_10 = undefined;
              ({ requestIdentifier: c0, skuId: c1, currency: c2, countryCode: c3, analyticsLocations: c4, analyticsLoadId: c5, isGift: c6, giftInfoOptions: c7, isFreeForStaffSelfPurchase } = closure_0);
              const tmp205 = closure_0;
              if (isFreeForStaffSelfPurchase === undefined) {
                isFreeForStaffSelfPurchase = true;
              }
              orderId = tmp205.orderId;
              closure_10 = closure_1;
              productIdentifier = undefined;
              c12 = undefined;
              obj25 = undefined;
              requestJSONString = undefined;
              closure_15 = undefined;
              purchaseResponse = undefined;
              originalPurchase = undefined;
              closure_18 = undefined;
              key = undefined;
              billingError = undefined;
              staff = undefined;
              closure_22 = undefined;
              c8 = 1;
              c9 = 1;
              return { value: "Set", done: true };
            }
            break;
          }
          case 1:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (closure_133_29()) {
              if (closure_133_40(transactionReceipt)) {
                productIdentifier = closure_133_38(closure_133_0(closure_133_3[44]).ACRequestOperations.CHARGE);
                const obj7 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier };
                c8 = 2;
                c9 = 1;
                const obj8 = { value: obj34.dispatch(obj7), done: false };
                obj34 = closure_133_1(closure_133_3[22]);
                return obj8;
              } else {
                const obj10 = { success: false, failureReason: closure_133_41.INVALID_CURRENCY };
                c9 = 3;
                const obj11 = { value: obj10, done: true };
                return obj11;
              }
            } else {
              const obj12 = { success: false, failureReason: closure_133_41.CANNOT_MAKE_REQUEST };
              c9 = 3;
              const obj13 = { value: obj12, done: true };
              return obj13;
            }
            break;
          }
          case 2:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              const obj15 = { sku_id, load_id, location_stack, payment_gateway: closure_133_19.APPLE_ADVANCED_COMMERCE };
              const obj51 = closure_133_0(closure_133_3[47]);
              const result = obj51.trackPaymentFlowStartedAnalyticsAndCTP(obj15);
              c12 = false;
              giftInfoOptions = 1;
              c8 = 4;
              c9 = 1;
              const obj16 = { value: retryPendingPurchases(transactionReceipt, purchaseSKU), done: false };
              return obj16;
            }
            break;
          }
          case 3:
          {
            let POST_PURCHASE_FAILED;
            giftInfoOptions = 0;
            let closure_23 = closure_6;
            const obj17 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier };
            const obj20 = closure_133_1(closure_133_3[22]);
            obj20.dispatch(obj17);
            const self = this;
            const self2 = this;
            billingError = new closure_133_0(closure_133_3[37]).BillingError(closure_23);
            staff = closure_133_12.getCurrentUser();
            if (null != staff) {
              if (staff.isStaff()) {
                const tmp77 = isFreeForStaffSelfPurchase;
                if (tmp77) {
                  if (billingError.code === closure_133_0(closure_133_3[40]).ErrorCodes.BILLING_CANNOT_CHARGE_ZERO_AMOUNT) {
                    purchaseSKU = closure_10;
                    if (closure_10 == null) {
                      purchaseSKU = closure_133_0(closure_133_3[48]).purchaseSKU;
                    }
                    closure_22 = purchaseSKU;
                    giftInfoOptions = 2;
                    const obj18 = { countryCode: purchaseSKU, expectedAmount: 0, expectedCurrency: closure_133_17.USD, loadId: obj26.v4(), isGift: tmp141, giftInfoOptions };
                    obj26 = closure_133_0(closure_133_3[49]);
                    c8 = 10;
                    c9 = 1;
                    const obj19 = { value: closure_22("collectibles", sku_id, obj18), done: false };
                    return obj19;
                  }
                }
              }
            }
            let tmp87 = null == orderId;
            const tmp84 = closure_133_28;
            if (!tmp87) {
              tmp87 = c12;
            }
            const obj21 = { productId: productIdentifier, skuId: sku_id, isGift: tmp141, requestIdentifier: request_identifier, orderId };
            tmp84(closure_23, "collectibles", tmp87, obj21);
            const tmp99 = c12;
            if (tmp99) {
              POST_PURCHASE_FAILED = closure_133_41.POST_PURCHASE_FAILED;
            } else {
              POST_PURCHASE_FAILED = closure_133_27(closure_23);
            }
            const obj22 = { success: false, failureReason: POST_PURCHASE_FAILED };
            c9 = 3;
            const obj23 = { value: obj22, done: true };
            return obj23;
          }
          case 4:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else {
              obj25 = { sku_id, request_identifier, currency: transactionReceipt, country_code: purchaseSKU, is_gift: tmp141, gift_info_options: giftInfoOptions, order_id: orderId };
              const obj27 = { operation: closure_133_0(closure_133_3[44]).ACRequestOperations.CHARGE };
              const merged = Object.assign(obj25);
              c8 = 5;
              c9 = 1;
              const obj28 = { value: closure_133_34(obj27), done: false };
              return obj28;
            }
            break;
          }
          case 5:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              requestJSONString = value.requestJSONString;
              const obj30 = { skuId: sku_id };
              c8 = 6;
              c9 = 1;
              const obj31 = { value: closure_133_30(request_identifier, requestJSONString, productIdentifier, true, obj30), done: false };
              return obj31;
            }
            break;
          }
          case 6:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj32 = { value, done: true };
              return obj32;
            } else {
              closure_15 = value;
              purchaseResponse = closure_15.purchaseResponse;
              originalPurchase = closure_15.originalPurchase;
              c12 = true;
              const jwsRepresentation = purchaseResponse.jwsRepresentation;
              transactionReceipt = jwsRepresentation;
              if (jwsRepresentation == null) {
                transactionReceipt = purchaseResponse.transactionReceipt;
              }
              closure_18 = transactionReceipt;
              const obj9 = closure_133_1(closure_133_3[12]);
              key = obj9.v3(closure_18);
              const tmp30 = tmp141;
              if (tmp30) {
                const obj33 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key, giftOptions: obj35 };
                obj35 = {};
                const dispatch = closure_133_1(closure_133_3[22]).dispatch;
                const tmp35 = closure_133_1(closure_133_3[22]);
                const merged1 = Object.assign(giftInfoOptions);
                dispatch(obj33);
              }
              const obj36 = { encodedReceipt: purchaseResponse.transactionReceipt, retries: 3, presentmentCurrency: transactionReceipt, appStoreRegion: purchaseSKU, giftInfoOptions, isGift: tmp141, jwsRepresentation: purchaseResponse.jwsRepresentation, source: "mobilePurchaseSKU", orderId };
              c8 = 7;
              c9 = 1;
              const obj37 = { value: closure_133_23(obj36), done: false };
              return obj37;
            }
            break;
          }
          case 7:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj38 = { value, done: true };
              return obj38;
            } else {
              const tmp171 = tmp141;
              if (tmp171) {
                const obj39 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                const obj3 = closure_133_1(closure_133_3[22]);
                obj3.dispatch(obj39);
              }
              const obj40 = { purchase: originalPurchase };
              c8 = 8;
              c9 = 1;
              const obj41 = { value: obj5.finishTransaction(obj40), done: false };
              obj5 = closure_133_0(closure_133_3[21]);
              return obj41;
            }
            break;
          }
          case 8:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj42 = { value, done: true };
              return obj42;
            } else {
              const obj45 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier };
              const obj44 = closure_133_1(closure_133_3[22]);
              obj44.dispatch(obj45);
              const obj47 = { sku_id, load_id, location_stack, payment_gateway: closure_133_19.APPLE_ADVANCED_COMMERCE, is_gift: tmp141 };
              const obj46 = closure_133_1(closure_133_3[14]);
              obj46.track(closure_133_16.PAYMENT_FLOW_COMPLETED, obj47);
              const obj48 = { success: true, failureReason: closure_133_41.NONE };
              giftInfoOptions = 0;
              c9 = 3;
              obj = { value: obj48, done: true };
              return obj;
            }
            break;
          }
          case 9:
          {
            giftInfoOptions = 0;
            const code = closure_6;
            if (code.code === closure_133_0(closure_133_3[40]).ErrorCodes.BILLING_PURCHASE_REQUEST_INVALID) {
              const obj43 = closure_133_0(closure_133_3[16]);
              const result1 = obj43.captureBillingException(code, {});
            }
            break;
          }
          default:
          {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              giftInfoOptions = 0;
              c9 = 3;
              const obj49 = { value, done: true };
              return obj49;
            } else {
              const obj50 = { success: true, failureReason: closure_133_41.NONE };
              giftInfoOptions = 0;
              c9 = 3;
              const obj52 = { value: obj50, done: true };
              return obj52;
            }
            break;
          }
        }
      } catch (tmp141) {
        closure_6 = tmp141;
        if (0 === giftInfoOptions) {
          c9 = 3;
          throw tmp141;
        } else if (1 === tmp143) {
          c8 = 3;
        } else {
          c8 = 9;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _migrateToACOM() {
  let currentUser;
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj5;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c4;
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null == currentUser.getCurrentUser()) {
            c2 = 3;
            return { value: false, done: true };
          } else if (canMakeIAPRequest()) {
            obj2 = activeGuildSubscriptions;
            activeGuildSubscriptions = activeGuildSubscriptions.getActiveGuildSubscriptions();
            let closure_0 = activeGuildSubscriptions;
            if (activeGuildSubscriptions == null) {
              closure_0 = [];
            }
            const found = closure_0.filter((paymentGateway) => paymentGateway.paymentGateway === constants2.APPLE_PARTNER);
            const _Object = Object;
            const subscriptions = obj2.getSubscriptions();
            let closure_1 = subscriptions;
            if (subscriptions == null) {
              closure_1 = [];
            }
            const values2 = values(closure_1);
            const found1 = values2.filter((paymentGateway) => paymentGateway.paymentGateway === constants2.APPLE && paymentGateway.type === constants.PREMIUM);
            const NitroACOMSubscriptionExperiment = ACOMExperiments.NitroACOMSubscriptionExperiment;
            let enabled = found1.length > 0;
            const tmp8 = require;
            const tmp9 = dependencyMap;
            if (enabled) {
              enabled = NitroACOMSubscriptionExperiment.getConfig({ location: "migrateToACOM" }).enabled;
            }
            if (0 === found.length) {
              if (false === enabled) {
                c2 = 3;
                return { value: false, done: true };
              }
            }
            c4 = 1;
            const HTTP = tmp8(tmp9[15]).HTTP;
            const request = { url: constants.BILLING_ACOM_SUBSCRIPTION_MIGRATION, rejectWithError: true, body: obj5 };
            obj5 = { migrate_premium: enabled };
            c3 = 2;
            c2 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          } else {
            c2 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c2 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          c2 = 3;
          return { value: true, done: true };
        }
      } catch (tmp11) {
        if (0 === c4) {
          c2 = 3;
          throw tmp11;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = ["items", "country_code"];
let closure_5 = ["subscription_items"];
let closure_6 = ["sku_id", "country_code", "is_gift", "gift_info_options"];
({ setPaymentSuccess: c10, showOldPaymentFlowSuccess: unpackModuleId } = PremiumPlanPurchasedStore);
({ SubscriptionTypes: closure_15, AnalyticEvents: closure_16, CurrencyCodes: closure_17, Endpoints: closure_18, StoreKitErrors } = Constants);
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
const localAppleReceiptHash = "localAppleReceiptHash";
const BILLING = "BILLING";
tmp5 = new LoggerDefault("BillingActionCreators.tsx");
obj = {
  applyAppleReceipt,
  fetchMostRecentSubscription: actions_BillingActionCreators.fetchMostRecentSubscription,
  fetchIpCountryCode: actions_BillingActionCreators.fetchIpCountryCode,
  init() {
    const self = this;
    return (async (arg0, value) => {
      let obj9;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c4;
        try {
          let _undefined;
          let premiumSubscriptionPlans;
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
              c4 = 1;
              _undefined = null;
              const obj13 = _undefined(closure_3[18]);
              if (obj13.isIOS()) {
                c4 = 2;
                c5 = 3;
                c6 = 1;
                const obj4 = { value: obj9.fetchStoreFront(), done: false };
                obj9 = closure_1(closure_3[19]);
                return obj4;
              }
            }
          } else {
            if (1 === c5) {
              c4 = 0;
            } else if (2 === c5) {
              c4 = 1;
              _undefined = null;
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                _undefined = value;
                c4 = 1;
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                c5 = 5;
                c6 = 1;
                const obj11 = { value: closure_130_0.restoreAndApplyPurchases(), done: false };
                return obj11;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: "+51" };
          }
          if (null != _undefined) {
            const obj6 = _undefined(closure_3[20]);
            premiumSubscriptionPlans = obj6.fetchPremiumSubscriptionPlans(_undefined.country, undefined, undefined, constants.APPLE_ADVANCED_COMMERCE);
          } else {
            const obj5 = _undefined(closure_3[20]);
            premiumSubscriptionPlans = obj5.fetchPremiumSubscriptionPlans();
          }
          const items = [premiumSubscriptionPlans, , ];
          const loadProducts = closure_130_0.loadProducts;
          if (_undefined == null) {
            _undefined = undefined;
          }
          items[1] = loadProducts(_undefined);
          const obj7 = _undefined(closure_3[17]);
          items[2] = obj7.fetchSubscriptions();
          c5 = 4;
          c6 = 1;
          const obj12 = { value: all(items), done: false };
          return obj12;
        } catch (tmp34) {
          closure_3 = tmp34;
          if (0 === c4) {
            c6 = 3;
            throw tmp34;
          } else if (1 === tmp36) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  },
  canStorekitMakePayments() {
    return (async (arg0, value) => {
      let closure_0;
      let obj7;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c3;
        try {
          let closure_1;
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
              closure_1 = tmp;
              value = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value: obj7.initConnection(), done: false };
              obj7 = _mod12742;
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj5 = closure_129_0(closure_129_3[16]);
            const result = obj5.captureBillingException(closure_1);
            const obj6 = closure_129_1(closure_129_3[22]);
            obj6.dispatch({ type: "GENERIC_IAP_INIT_CONNECTION", canMakePayments: false });
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj9 = { type: "GENERIC_IAP_INIT_CONNECTION", canMakePayments: value };
            obj = closure_129_1(closure_129_3[22]);
            obj.dispatch(obj9);
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          }
        } catch (tmp24) {
          closure_2 = tmp24;
          if (0 === c3) {
            c5 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  loadProducts(arg0) {
    let closure_0 = arg0;
    return (async (arg0, value) => {
      let obj18;
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c4;
        try {
          let storeFront;
          let products;
          let products2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              storeFront = undefined;
              products = undefined;
              products2 = undefined;
              c4 = 1;
              const obj17 = products(closure_3[22]);
              obj17.dispatch({ type: "IAP_LOAD_PRODUCTS_START" });
              c5 = 2;
              c6 = 1;
              const obj7 = { value: obj18.loadProducts(), done: false };
              obj18 = products(closure_3[19]);
              return obj7;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj11 = products(closure_3[22]);
              obj11.dispatch({ type: "IAP_LOAD_PRODUCTS_FAILED" });
              const obj9 = { fingerprint: ["iap-load-products-failed"] };
              const obj12 = storeFront(closure_3[16]);
              const result = obj12.captureBillingException(closure_3, obj9);
            } else {
              let tmp5;
              if (2 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  products = value;
                  const arr = products(closure_3[23]);
                  products2 = arr.filter(products, (identifier) => {
                    const GenericProductIds = storeFront(closure_1_3[24]).GenericProductIds;
                    return GenericProductIds.includes(identifier.identifier);
                  });
                  if (null == closure_130_0) {
                    c5 = 3;
                    c6 = 1;
                    const obj13 = { value: obj8.fetchStoreFront(), done: false };
                    obj8 = products(closure_3[19]);
                    return obj13;
                  } else {
                    tmp5 = closure_130_0;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                storeFront = value;
                if (value == null) {
                  storeFront = { country: "US", currency: "usd" };
                }
                tmp5 = storeFront;
              }
              storeFront = tmp5;
              const obj14 = { type: "IAP_LOAD_PRODUCTS", products };
              obj2 = products(closure_3[22]);
              obj2.dispatch(obj14);
              if (products2.length === storeFront(closure_3[24]).GenericProductIds.length) {
                const obj15 = { type: "IAP_LOAD_GENERIC_PRODUCTS", products: products2, storeFront };
                const obj6 = products(closure_3[22]);
                obj6.dispatch(obj15);
              } else {
                const obj16 = { type: "GENERIC_IAP_SET_STORE_FRONT", storeFront };
                const obj4 = products(closure_3[22]);
                obj4.dispatch(obj16);
              }
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp42) {
          closure_3 = tmp42;
          if (0 === c4) {
            c6 = 3;
            throw tmp42;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  },
  createSubscription(arg0) {
    let closure_0 = arg0;
    return (async function(arg0, value) {
      let closure_3;
      let countryCode;
      let formatted;
      let identifier;
      let obj25;
      let paths;
      let tmp105;
      let transactionReceipt;
      let v3;
      function getTrialOfferSignature() {
        return closure_1_24(...arguments);
      }
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let application_id;
        try {
          let isGift;
          let giftInfoOptions;
          let c3;
          let c7;
          let orderId;
          let id;
          let c10;
          let obj21;
          let currentUser;
          let closure_13;
          let closure_14;
          let key;
          let product;
          let regular_price;
          let presentmentCurrency;
          let c19;
          let productId;
          let canMakePaymentsResult;
          v3 = 2;
          switch (identifier) {
            case 0:
            {
              let c1;
              let c2;
              let c4;
              let c5;
              let c6;
              let c8;
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_2 = tmp;
                isGift = undefined;
                giftInfoOptions = undefined;
                c3 = undefined;
                application_id = undefined;
                identifier = undefined;
                v3 = undefined;
                c7 = undefined;
                orderId = undefined;
                id = undefined;
                c10 = undefined;
                obj21 = undefined;
                currentUser = undefined;
                closure_13 = undefined;
                closure_14 = undefined;
                key = undefined;
                product = undefined;
                regular_price = undefined;
                presentmentCurrency = undefined;
                c19 = undefined;
                productId = transactionReceipt.productId;
                ({ isGift: c1, giftInfoOptions: c2, baseAnalyticsData: c3, applicationId: c4, offerId: c5, onPurchaseComplete: c6, onPurchaseError: c7, orderId: c8 } = transactionReceipt);
                canMakePaymentsResult = IAPStore;
                if (!IAPStore.isBusy()) {
                  const obj32 = transactionReceipt(paths[25]);
                  if (obj32.getIsPaymentsBlocked()) {
                    canMakePaymentsResult(paths[26])();
                  } else {
                    const result1 = canMakePaymentsResult(tmp126[22]);
                    const obj5 = { type: "IAP_PURCHASE_PRODUCT_START", productIdentifier: productId };
                    identifier = 1;
                    v3 = 1;
                    const obj7 = { value: result1.dispatch(obj5), done: false };
                    return obj7;
                  }
                }
                v3 = 3;
                return { value: "IconComponent", done: "+51" };
              }
              break;
            }
            case 1:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                application_id = 1;
                const obj29 = canMakePaymentsResult(paths[19]);
                canMakePaymentsResult = obj29.canMakePayments();
                identifier = 3;
                v3 = 1;
                const obj9 = { value: canMakePaymentsResult, done: false };
                return obj9;
              }
              break;
            }
            case 2:
            {
              application_id = 0;
              let closure_21 = paths;
              const obj10 = { type: "IAP_PURCHASE_PRODUCT_FAILURE", productIdentifier: productId };
              const obj24 = canMakePaymentsResult(paths[22]);
              obj24.dispatch(obj10);
              canMakePaymentsResult = c7;
              if (c7 != null) {
                const result2 = canMakePaymentsResult(closure_21);
              }
              canMakePaymentsResult = closure_21;
              const obj12 = { productId, isGift, planId: tmp105, orderId };
              tmp105 = undefined;
              const obj27 = transactionReceipt(paths[34]);
              const tmp99 = handlePurchaseException;
              if (obj27.isValidBundleProductId(productId)) {
                const getBaseSubscriptionItemForSubscriptionItems = transactionReceipt(paths[35]).getBaseSubscriptionItemForSubscriptionItems;
                const tmp110 = transactionReceipt(paths[35]);
                const obj28 = transactionReceipt(paths[34]);
                const baseSubscriptionItemForSubscriptionItems = getBaseSubscriptionItemForSubscriptionItems(obj28.getSubscriptionItemsForProduct(productId));
                let planId;
                if (baseSubscriptionItemForSubscriptionItems != null) {
                  planId = baseSubscriptionItemForSubscriptionItems.planId;
                }
                tmp105 = planId;
              }
              tmp99(canMakePaymentsResult, "subscription", true, obj12);
              break;
            }
            case 3:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                canMakePaymentsResult = SubscriptionStore;
                if (SubscriptionStore.hasFetchedSubscriptions()) {
                  canMakePaymentsResult = currentUser.getCurrentUser();
                  id = canMakePaymentsResult;
                  if (null == id) {
                    const _Error2 = Error;
                    const intl2 = transactionReceipt(paths[27]).intl;
                    canMakePaymentsResult = this;
                    const self2 = this;
                    const error = new Error(intl2.string(transactionReceipt(paths[27]).t.PjfUXe));
                    throw error;
                  } else {
                    const obj43 = transactionReceipt(paths[19]);
                    canMakePaymentsResult = obj43.convertToUUID(id.id);
                    c10 = canMakePaymentsResult;
                    obj21 = undefined;
                    if (null != identifier) {
                      canMakePaymentsResult = getTrialOfferSignature(productId, identifier, c10);
                      identifier = 5;
                      v3 = 1;
                      const obj14 = { value: canMakePaymentsResult, done: false };
                      return obj14;
                    } else {
                      const obj20 = canMakePaymentsResult(paths[19]);
                      canMakePaymentsResult = obj20.purchaseProduct(productId, obj21, c10);
                      identifier = 6;
                      v3 = 1;
                      const obj15 = { value: canMakePaymentsResult, done: false };
                      return obj15;
                    }
                  }
                } else {
                  const obj18 = transactionReceipt(paths[17]);
                  canMakePaymentsResult = obj18.fetchSubscriptions();
                  identifier = 4;
                  v3 = 1;
                  const obj16 = { value: canMakePaymentsResult, done: false };
                  return obj16;
                }
              }
              break;
            }
            case 4:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj17 = { value, done: true };
                return obj17;
              } else {
                const _Error = Error;
                const intl = transactionReceipt(paths[27]).intl;
                canMakePaymentsResult = this;
                const self = this;
                const error1 = new Error(intl.string(transactionReceipt(paths[27]).t.PjfUXe));
                throw error1;
              }
              break;
            }
            case 5:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj19 = { value, done: true };
                return obj19;
              } else {
                currentUser = value;
                if (null != currentUser) {
                  obj21 = { identifier, keyIdentifier: currentUser.key_id, nonce: currentUser.nonce, signature: currentUser.signature, timestamp: Number(currentUser.timestamp) };
                  const _Number = Number;
                }
              }
              break;
            }
            case 6:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj22 = { value, done: true };
                return obj22;
              } else {
                closure_13 = value;
                const jwsRepresentation = closure_13.jwsRepresentation;
                transactionReceipt = jwsRepresentation;
                if (jwsRepresentation == null) {
                  transactionReceipt = closure_13.transactionReceipt;
                }
                closure_14 = transactionReceipt;
                const obj11 = canMakePaymentsResult(paths[12]);
                key = obj11.v3(closure_14);
                const obj23 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION", key, giftOptions: obj25 };
                obj25 = {};
                const dispatch = canMakePaymentsResult(paths[22]).dispatch;
                const tmp46 = canMakePaymentsResult(paths[22]);
                let merged = Object.assign(giftInfoOptions);
                dispatch(obj23);
                canMakePaymentsResult = undefined;
                if (v3 != null) {
                  canMakePaymentsResult = v3();
                }
                identifier = 7;
                v3 = 1;
                const obj26 = { value: canMakePaymentsResult, done: false };
                return obj26;
              }
              break;
            }
            case 7:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj30 = { value, done: true };
                return obj30;
              } else {
                product = IAPStore.getProduct(productId);
                canMakePaymentsResult = undefined;
                if (product != null) {
                  canMakePaymentsResult = product.price;
                }
                regular_price = canMakePaymentsResult;
                canMakePaymentsResult = undefined;
                if (product != null) {
                  canMakePaymentsResult = product.currencyCode;
                }
                presentmentCurrency = canMakePaymentsResult;
                canMakePaymentsResult = applyAppleReceipt;
                const obj31 = { encodedReceipt: closure_13.transactionReceipt, retries: 3, presentmentCurrency, presentmentAmount: regular_price, appStoreRegion: countryCode, giftInfoOptions, jwsRepresentation: closure_13.jwsRepresentation, source: "createSubscription", orderId };
                countryCode = undefined;
                if (product != null) {
                  countryCode = product.countryCode;
                }
                canMakePaymentsResult = canMakePaymentsResult(obj31);
                identifier = 9;
                v3 = 1;
                const obj33 = { value: canMakePaymentsResult, done: false };
                return obj33;
              }
              break;
            }
            case 8:
            {
              application_id = 1;
              let closure_20 = paths;
              const obj34 = { tags: { source: "createSubscriptionFetchSubscriptions" } };
              const obj6 = transactionReceipt(paths[16]);
              const result = obj6.captureBillingException(closure_20, obj34);
              canMakePaymentsResult = SubscriptionStore.getPremiumTypeSubscription();
              c19 = canMakePaymentsResult;
              if (null != c19) {
                canMakePaymentsResult = closure_1_11;
                closure_1_11(() => {
                  obj = canMakePaymentsResult(paths[29]);
                  obj2 = {
                    importer() {
                      let subscription;
                      const promise = transactionReceipt(paths[31])(paths[30], paths.paths);
                      return promise.then((result) => {
                        closure_0 = result.default;
                        return (arg0) => {
                          closure_0 = arg0;
                          obj = {
                            subscription,
                            onClose() {
                              closure_0.onClose();
                              obj = closure_2_1(closure_2_3[32]);
                              obj.popWithKey(closure_2_0(closure_2_3[33]).PREMIUM_KEY);
                            }
                          };
                          const merged = Object.assign(arg0);
                          return closure_3_20(closure_0, obj);
                        };
                      });
                    },
                    isDismissable: false
                  };
                  obj.openLazy(obj2);
                });
              }
              application_id = 0;
              break;
            }
            case 9:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj35 = { value, done: true };
                return obj35;
              } else {
                closure_1_10();
                const obj36 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                const obj39 = canMakePaymentsResult(paths[22]);
                obj39.dispatch(obj36);
                const track = canMakePaymentsResult(paths[14]).track;
                const PAYMENT_FLOW_COMPLETED = constants.PAYMENT_FLOW_COMPLETED;
                const tmp153 = canMakePaymentsResult(paths[14]);
                const obj37 = { subscription_plan_gateway_plan_id: productId, price: regular_price, regular_price, currency: formatted, application_id };
                canMakePaymentsResult = presentmentCurrency;
                formatted = undefined;
                const getPaymentFlowCompletedAnalyticsFields = transactionReceipt(paths[28]).getPaymentFlowCompletedAnalyticsFields;
                const tmp157 = transactionReceipt(paths[28]);
                const tmp158 = c3;
                if (presentmentCurrency != null) {
                  formatted = canMakePaymentsResult.toLowerCase();
                }
                track(PAYMENT_FLOW_COMPLETED, getPaymentFlowCompletedAnalyticsFields(tmp158, obj37));
                obj = canMakePaymentsResult(paths[22]);
                const obj38 = { type: "IAP_PURCHASE_PRODUCT_SUCCESS", productIdentifier: productId };
                canMakePaymentsResult = obj.dispatch(obj38);
                const tmp14 = isGift;
                if (!tmp14) {
                  application_id = 2;
                  const obj3 = transactionReceipt(paths[17]);
                  canMakePaymentsResult = obj3.fetchSubscriptions();
                  identifier = 10;
                  v3 = 1;
                  const obj40 = { value: canMakePaymentsResult, done: false };
                  return obj40;
                }
              }
              break;
            }
            default:
            {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                application_id = 0;
                v3 = 3;
                const obj41 = { value, done: true };
                return obj41;
              } else {
                application_id = 1;
              }
              break;
            }
          }
        } catch (tmp135) {
          paths = tmp135;
          if (0 === application_id) {
            v3 = 3;
            throw tmp135;
          } else if (1 === tmp137) {
            identifier = 2;
          } else {
            identifier = 8;
          }
        }
      }
    })();
  },
  restoreAndApplyPurchases(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    let self = this;
    return (async function(arg0, value) {
      let obj14;
      let obj8;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c8;
        try {
          let code;
          let closure_0;
          let closure_1;
          let _undefined;
          let iter2;
          let _loop;
          let c5;
          c11 = 2;
          let tmp4 = c10;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_7 = tmp;
              code = tmp4;
              closure_0 = undefined;
              closure_1 = undefined;
              _undefined = undefined;
              iter2 = undefined;
              _loop = undefined;
              c5 = undefined;
              if (busy.isBusy()) {
                c11 = 3;
                let obj7 = { value: [], done: true };
                return obj7;
              } else {
                const obj21 = closure_1(iter2[22]);
                const dispatchResult = obj21.dispatch({ type: "IAP_RESTORE_PURCHASES_START" });
                c8 = 2;
                c10 = 3;
                c11 = 1;
                const obj9 = { value: self.loadProducts(), done: false };
                return obj9;
              }
            }
          } else if (1 === tmp4) {
            c8 = 0;
            const obj20 = closure_1(iter2[22]);
            obj20.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
            throw closure_9;
          } else if (2 === tmp4) {
            c8 = 1;
            code = closure_9;
            if (!set.has(code.code)) {
              const obj19 = closure_0(iter2[16]);
              let result = obj19.captureBillingException(code);
            }
            throw code;
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              const obj17 = closure_1(iter2[22]);
              obj17.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              c11 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              const obj13 = { fullRestore: closure_135_0 };
              c10 = 4;
              c11 = 1;
              const obj15 = { value: obj14.restorePurchases(obj13), done: false };
              obj14 = closure_1(iter2[19]);
              return obj15;
            }
          } else {
            let iter5;
            let next;
            let c2;
            let tmp16;
            if (4 === tmp4) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 0;
                let obj12 = closure_1(iter2[22]);
                obj12.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                c11 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_0 = value;
                if (0 === closure_0.length) {
                  c8 = 0;
                  const obj10 = closure_1(iter2[22]);
                  obj10.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                  c11 = 3;
                  const obj18 = { value: [], done: true };
                  return obj18;
                } else {
                  const obj27 = closure_1(iter2[23])(closure_0);
                  const iter4 = obj27.uniqBy((purchaseResponse) => {
                    let originalTransactionIdentifier = purchaseResponse.purchaseResponse.jwsRepresentation;
                    if (originalTransactionIdentifier == null) {
                      originalTransactionIdentifier = purchaseResponse.purchaseResponse.originalTransactionIdentifier;
                    }
                    return originalTransactionIdentifier;
                  });
                  closure_1 = iter4.value();
                  _undefined = [];
                  iter2 = [];
                  _loop = function _loop(c5) {
                    const skipDupCheck = c5;
                    let c6 = 0;
                    let c7 = 0;
                    c5 = 0;
                    return (function* _loop(arg0, value) {
                      let countryCode;
                      let currencyCode;
                      let obj7;
                      let price;
                      let reward_sku_ids;
                      let tmp23Result;
                      if (c7 === 2) {
                        c7 = 3;
                        let str = "Generator functions may not be called on executing generators";
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          let obj4 = { value, done: true };
                          return obj4;
                        } else {
                          return { value: "IconComponent", done: "+51" };
                        }
                      } else {
                        try {
                          let purchaseResponse;
                          c7 = 2;
                          const tmp4 = c6;
                          if (0 === c6) {
                            if (arg0 === 1) {
                              c7 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c7 = 3;
                              return { value, done: true };
                            } else {
                              closure_3 = tmp;
                              closure_2 = tmp4;
                              let c2;
                              giftOptionsForKey = undefined;
                              purchaseResponse = skipDupCheck.purchaseResponse;
                              product = product.getProduct(purchaseResponse.productIdentifier);
                              const jwsRepresentation = purchaseResponse.jwsRepresentation;
                              transactionReceipt = jwsRepresentation;
                              if (jwsRepresentation == null) {
                                transactionReceipt = purchaseResponse.transactionReceipt;
                              }
                              obj2 = transactionReceipt(closure_3[12]);
                              const v3Result = obj2.v3(transactionReceipt);
                              c2 = v3Result;
                              giftOptionsForKey = giftOptionsForKey.getGiftOptionsForKey(v3Result);
                              c5 = 1;
                              const obj6 = { jwsRepresentation: null, encodedReceipt: null, presentmentCurrency: currencyCode, presentmentAmount: price, appStoreRegion: countryCode, giftInfoOptions: obj7, source: "restoreSubscription", skipDupCheck };
                              ({ jwsRepresentation: obj3.jwsRepresentation, transactionReceipt: obj3.encodedReceipt } = purchaseResponse);
                              currencyCode = undefined;
                              const tmp23 = closure_2_23;
                              if (product != null) {
                                currencyCode = product.currencyCode;
                              }
                              price = undefined;
                              if (product != null) {
                                price = product.price;
                              }
                              countryCode = undefined;
                              if (product != null) {
                                countryCode = product.countryCode;
                              }
                              let gift_style;
                              if (giftOptionsForKey != null) {
                                gift_style = giftOptionsForKey.gift_style;
                              }
                              obj7 = { gift_style, reward_sku_ids };
                              reward_sku_ids = undefined;
                              if (giftOptionsForKey != null) {
                                reward_sku_ids = giftOptionsForKey.reward_sku_ids;
                              }
                              c6 = 2;
                              c7 = 1;
                              const obj12 = {
                                value: tmp23Result.then((result) => {
                                          let str1;
                                          closure_0 = result;
                                          const str = str1.transactionIdentifier;
                                          str1 = str.toString();
                                          obj = closure_1_0(closure_1_3[21]);
                                          obj2 = { purchase: { productId: str1.productIdentifier, transactionDate: str1.transactionDate, transactionReceipt: str1.transactionReceipt, transactionId: str1 } };
                                          const finishTransactionResult = obj.finishTransaction(obj2);
                                          finishTransactionResult.then(() => {
                                            if (null != closure_0) {
                                              obj2 = { product_id: closure_2_1.productIdentifier, transaction_id: str1, is_gift: null != closure_2_3 };
                                              obj = transactionReceipt(closure_3_3[14]);
                                              obj.track(constants.APPLE_RESTORE_AND_APPLY_PURCHASES_SUCCEEDED, obj2);
                                            }
                                          });
                                          const tmp2 = closure_1_3;
                                          if (null != result) {
                                            const obj4 = { type: "GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION", key };
                                            const obj3 = closure_1_1(tmp2[22]);
                                            obj3.dispatch(obj4);
                                          }
                                          let tmp7 = null;
                                          if (null != result) {
                                            tmp7 = closure_0;
                                          }
                                          return tmp7;
                                        }),
                                done: false
                              };
                              tmp23Result = tmp23(obj6);
                              return obj12;
                            }
                          } else {
                            if (1 === tmp4) {
                              c5 = 0;
                              closure_131_3.push(closure_4);
                            } else if (arg0 === 1) {
                              c7 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c5 = 0;
                              c7 = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              if (null != value) {
                                let tmp7 = closure_131_2;
                                closure_131_2.push(purchaseResponse);
                              }
                              c5 = 0;
                            }
                            c7 = 3;
                            return { value: "IconComponent", done: "+51" };
                          }
                        } catch (tmp30) {
                          closure_4 = tmp30;
                          if (0 === c5) {
                            c7 = 3;
                            throw tmp30;
                          } else {
                            c6 = 1;
                          }
                        }
                      }
                    })();
                  };
                  closure_0 = closure_1[Symbol.iterator]();
                  if (closure_0 === undefined) {
                    if (_undefined.length > 0) {
                      c10 = 8;
                      c11 = 1;
                      const obj22 = { value: obj8.fetchSubscriptions(), done: false };
                      obj8 = closure_0(iter2[17]);
                      return obj22;
                    } else if (iter2.length > 0) {
                      const item = iter2.forEach((code) => {
                        if (!set.has(code.code)) {
                          obj = closure_1_0(iter2[16]);
                          const result = obj.captureBillingException(code);
                        }
                      });
                      const _Error = Error;
                      self = this;
                      const self2 = this;
                      const error = new Error("There were some errors while trying to restore");
                      throw error;
                    } else {
                      c8 = 0;
                      let obj6 = closure_1(iter2[22]);
                      obj6.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      const obj23 = { value: _undefined, done: true };
                      return obj23;
                    }
                  } else {
                    c8 = 3;
                    c5 = tmp34;
                    const tmp126 = _loop(c5);
                    iter5 = tmp126[tmp105.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter5.next;
                    c2 = undefined;
                  }
                }
              }
            } else if (5 === tmp4) {
              const tmp30 = closure_9;
              c8 = 2;
              closure_0.return();
              throw closure_9;
            } else if (6 === tmp4) {
              c8 = 4;
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else {
                c2 = value;
                if (arg0 === 2) {
                  c2 = value;
                  c8 = 3;
                  const method = HermesBuiltin.getMethod("return");
                  if (method === undefined) {
                    closure_0.return();
                    c8 = 0;
                    let obj4 = closure_1(iter2[22]);
                    obj4.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                    c11 = 3;
                    const obj24 = { value, done: true };
                    return obj24;
                  } else {
                    const iter3 = method(c2);
                    HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    if (iter3.done) {
                      value = iter3.value;
                      closure_0.return();
                      c8 = 0;
                      obj2 = closure_1(iter2[22]);
                      obj2.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
                      c11 = 3;
                      const obj25 = { value, done: true };
                      return obj25;
                    } else {
                      c10 = 6;
                      c11 = 1;
                      return iter3;
                    }
                  }
                } else {
                  c8 = 3;
                  tmp16 = value;
                }
              }
            } else if (7 === tmp4) {
              let tmp5 = iter5;
              let tmp7 = closure_9;
              c8 = 3;
              let str = "throw";
              const tmp6 = closure_9;
              const method1 = HermesBuiltin.getMethod("throw");
              if (method1 === undefined) {
                const method2 = HermesBuiltin.getMethod("return");
                if (method2 !== undefined) {
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                }
                throw new TypeError("yield* delegate must have a .throw() method");
              } else {
                const iter = method1(tmp6);
                HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                if (iter.done) {
                  iter2 = iter;
                  const value2 = iter2.value;
                  c8 = 2;
                } else {
                  c10 = 6;
                  c11 = 1;
                  return iter;
                }
              }
            } else if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              const obj26 = closure_1(iter2[22]);
              obj26.dispatch({ type: "IAP_RESTORE_PURCHASES_END" });
              c11 = 3;
              obj = { value, done: true };
              return obj;
            }
            iter2 = next(tmp16);
            HermesBuiltin.ensureObject("iterator.next() did not return an object");
            if (!iter2.done) {
              c10 = 6;
              c11 = 1;
              return iter2;
            }
          }
        } catch (tmp98) {
          closure_9 = tmp98;
          if (0 === c8) {
            c11 = 3;
            throw tmp98;
          } else if (1 === c8) {
            c10 = 1;
          } else if (2 === c8) {
            c10 = 2;
          } else if (3 === c8) {
            c10 = 5;
          } else {
            c10 = 7;
          }
        }
      }
    })();
  }
};
let items = [_mod12742.ErrorCode.E_USER_CANCELLED, StoreKitErrors.PAYMENT_CANCELED];
const set = new Set(items);
const items1 = [_mod12742.ErrorCode.E_UNKNOWN, _mod12742.ErrorCode.E_DEFERRED_PAYMENT];
const set1 = new Set(items1);
let obj2 = { NONE: "none", CANNOT_MAKE_REQUEST: "cannot_make_request", INVALID_CURRENCY: "invalid_currency", PURCHASE_INCOMPLETE: "purchase_incomplete", USER_CANCELLED: "user_cancelled", POST_PURCHASE_FAILED: "post_purchase_failed" };
let result = size.fileFinishedImporting("actions/native/BillingActionCreators.tsx");

export default obj;
export { getIAPJWTRequestData };
export { updateAppleSubscription };
export const cancelGenericSubscription = function cancelGenericSubscription(arg0, arg1, arg2) {
  return obj(...arguments);
};
export { isValidCurrency };
export const SubscriptionPurchaseFailureReason = obj2;
export const createGenericSubscription = function createGenericSubscription(arg0) {
  return obj(...arguments);
};
export const modifyGenericSubscription = function modifyGenericSubscription(arg0) {
  return obj(...arguments);
};
export const resubscribeGenericSubscription = function resubscribeGenericSubscription(arg0, arg1) {
  return obj(...arguments);
};
export const mobilePurchaseSKU = function mobilePurchaseSKU(arg0, arg1) {
  return obj(...arguments);
};
export const migrateToACOM = function migrateToACOM() {
  return obj(...arguments);
};
