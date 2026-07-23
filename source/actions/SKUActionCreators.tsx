// Module ID: 7367
// Function ID: 59347
// Name: _fetchSKU
// Dependencies: [5, 7368, 4175, 653, 686, 4369, 507, 3799, 7369, 6824, 4029, 3798, 3791, 4451, 4460, 1327, 2]
// Exports: clearPurchaseError, fetchPublishedSKU, fetchSKU, fetchTestSKUsForApplication, grantChannelBranchEntitlement, orderSKU, previewPurchaseSku, purchaseSKU, resendPaymentVerificationEmail, showPurchaseConfirmationStep, updateSKUPaymentIsGift

// Module 7367 (_fetchSKU)
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
async function _fetchSKU(arg0, arg1) {
  if (null == outer2_5.get(arg0)) {
    let obj = { type: "SKU_FETCH_START", skuId: tmp };
    outer2_1(outer2_2[4]).dispatch(obj);
    const obj3 = outer2_1(outer2_2[4]);
    obj = { url: outer2_7.STORE_SKU(tmp) };
    const obj5 = outer2_0(outer2_2[5]);
    obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
    const obj7 = outer2_0(outer2_2[6]);
    obj = outer2_1(outer2_2[4]);
    const obj1 = { type: "SKU_FETCH_SUCCESS", sku: yield obj5.httpGetWithCountryCodeQuery(obj).body };
    obj.dispatch(obj1);
    const tmp13 = yield obj5.httpGetWithCountryCodeQuery(obj);
  }
}
async function _fetchPublishedSKU(arg0, arg1, arg2, arg3, arg4) {
  if (null == outer2_5.get(arg1)) {
    let obj = { type: "SKU_FETCH_START", skuId: tmp };
    outer2_1(outer2_2[4]).dispatch(obj);
    const obj8 = outer2_1(outer2_2[4]);
    const result = outer2_0(outer2_2[8]).isTestModeForApplication(arg0);
    obj = {};
    if (result) {
      let STORE_SKUResult = obj12.STORE_SKU(tmp);
    } else {
      STORE_SKUResult = obj12.STORE_PUBLISHED_LISTINGS_SKU(tmp);
    }
    obj.url = STORE_SKUResult;
    obj = outer2_0(outer2_2[6]);
    obj.rejectWithError = obj.rejectWithMigratedError();
    const obj1 = {};
    if (arg2 === outer2_0(outer2_2[9]).ShopVariantsReturnStyle.VARIANTS_GROUP) {
      obj1.variants_return_style = arg2;
    }
    if (arg3) {
      obj1.include_unpublished = true;
    }
    const _Object = Object;
    if (Object.keys(obj1).length > 0) {
      tmp7.query = obj1;
    }
    let obj2 = outer2_0(outer2_2[5]);
    const tmp16 = yield obj2.httpGetWithCountryCodeQuery(obj);
    let obj3 = outer2_1(outer2_2[4]);
    obj2 = { type: "SKU_FETCH_SUCCESS" };
    const body = tmp16.body;
    obj2.sku = result ? body : body.sku;
    obj3.dispatch(obj2);
    if (!result) {
      obj3 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: tmp16.body };
      outer2_1(outer2_2[4]).dispatch(obj3);
      const obj6 = outer2_1(outer2_2[4]);
    }
    const obj10 = outer2_0(outer2_2[8]);
    const tmp33 = result;
    tmp7 = obj;
  }
}
async function _fetchTestSKUsForApplication(arg0, arg1) {
  let iter = (function*(applicationId) {
    let flag = arg1;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    let obj = outer2_0(outer2_2[8]);
    if (!obj.isTestModeForApplication(applicationId)) {
      if (flag) {
        const _Error = Error;
        const error = new Error("this should only be used in test mode");
        throw error;
      }
    }
    obj = { url: outer2_7.APPLICATION_SKUS(applicationId) };
    const obj2 = outer2_0(outer2_2[5]);
    obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
    const body = yield obj2.httpGetWithCountryCodeQuery(obj).body;
    const obj4 = outer2_0(outer2_2[6]);
    outer2_1(outer2_2[4]).dispatch({ type: "SKUS_FETCH_SUCCESS", skus: body });
    return body;
  })();
  iter.next();
  return iter;
}
async function _previewPurchaseSku(arg0, arg1) {
  let iter = (function*(arg0) {
    let applicationId;
    let currency;
    let isGift;
    let paymentSourceId;
    let skuId;
    ({ applicationId, skuId, paymentSourceId, isGift, currency } = arg0);
    yield undefined;
    let obj = { payment_source_id: paymentSourceId, gift: isGift, currency };
    if (obj2.isTestModeForApplication(applicationId)) {
      tmp2.test_mode = true;
    }
    const promotionIdOverride = outer2_4.getPromotionIdOverride();
    if (null != promotionIdOverride) {
      tmp2.promotion_id_override = promotionIdOverride;
    }
    obj2 = outer2_0(outer2_2[8]);
    obj = { url: outer2_7.STORE_SKU_PURCHASE(skuId), query: obj, oldFormErrors: true };
    const obj3 = outer2_0(outer2_2[5]);
    obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
    return yield obj3.httpGetWithCountryCodeQuery(obj).body;
  })();
  iter.next();
  return iter;
}
async function _grantChannelBranchEntitlement(arg0, arg1, arg2, arg3) {
  let obj = outer2_1(outer2_2[4]);
  obj = { type: "SKU_PURCHASE_START", applicationId: arg0, skuId: arg2 };
  obj.dispatch(obj);
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_7.CHANNEL_ENTITLEMENT_GRANT(arg1), oldFormErrors: true, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const tmp3 = yield HTTP.post(obj);
  const obj4 = outer2_0(outer2_2[6]);
  const tmp = arg2;
  outer2_1(outer2_2[4]).dispatch({ type: "SKU_PURCHASE_SUCCESS", skuId: tmp, entitlements: tmp3.body, libraryApplications: [] });
  return tmp3.body;
}
async function _orderSKU(arg0, arg1, arg2, arg3, arg4, arg5) {
  let obj = outer2_1(outer2_2[4]);
  obj.dispatch({ type: "ORDER_CREATE_START" });
  obj = { order_line_items: items, billing_facet: obj1, location_facet: obj2 };
  obj = { sku_id: arg0, quantity: 1, purchase_type: 1 };
  items = [obj];
  if (arg3) {
    const obj3 = { is_gift: true };
    ({ recipient_id: obj7.recipient_id, gift_style: obj7.gift_style, emoji_id: obj7.emoji_id, emoji_name: obj7.emoji_name, sound_id: obj7.sound_id, reward_sku_ids: obj7.reward_sku_ids, custom_message: obj7.custom_message_contents } = arg4);
    obj3.gift_customization = {};
    tmp2.gifting_facet = obj3;
    const obj4 = {};
  }
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  const obj5 = { url: outer2_7.ORDER_CREATE, body: obj, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
  const body = yield HTTP.post(obj5).body;
  const id = body.id;
  obj1 = { payment_source_id: arg1 };
  obj2 = { request_gateway_country_code: arg2 };
  const obj9 = outer2_0(outer2_2[6]);
  outer2_1(outer2_2[4]).dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: id, order: body });
  return id;
}
async function _purchaseSKU(arg0, arg1, arg2, arg3) {
  let analyticsLoadId;
  let countryCode;
  let expectedAmount;
  let expectedCurrency;
  let giftInfoOptions;
  let isGift;
  let loadId;
  let paymentSource;
  let quantity;
  let subscriptionPlanId;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = {};
  const merged = Object.assign(outer2_8);
  const merged1 = Object.assign(arg2);
  ({ paymentSource, expectedAmount, expectedCurrency, isGift, countryCode, quantity } = obj);
  ({ analyticsLoadId, giftInfoOptions, subscriptionPlanId, loadId } = obj);
  let obj1 = outer2_1(outer2_2[4]);
  obj1.wait(() => {
    let obj = outer3_1(outer3_2[4]);
    obj = { type: "SKU_PURCHASE_START", applicationId: closure_0, skuId: closure_1 };
    obj.dispatch(obj);
  });
  let obj2 = outer2_0(outer2_2[8]);
  obj = { gift: isGift, sku_subscription_plan_id: subscriptionPlanId };
  const result = obj2.isTestModeForApplication(arg0);
  obj.gateway_checkout_context = yield outer2_0(outer2_2[12]).createGatewayCheckoutContext(paymentSource);
  obj.load_id = loadId;
  obj.gift_info_options = giftInfoOptions;
  const promotionIdOverride = outer2_4.getPromotionIdOverride();
  if (null != promotionIdOverride) {
    tmp6.promotion_id_override = promotionIdOverride;
  }
  if (result) {
    tmp6.test_mode = true;
  } else {
    if (null != paymentSource) {
      tmp6.payment_source_id = paymentSource.id;
      tmp6.payment_source_token = yield outer2_0(outer2_2[13]).createPaymentSourceToken(paymentSource);
      if (outer2_6.has(paymentSource.type)) {
        const tmp15 = yield outer2_0(outer2_2[13]).popupBridgeState(paymentSource.type);
        const obj6 = outer2_0(outer2_2[13]);
        let str = "";
        const aPIBaseURL = outer2_0(outer2_2[6]).getAPIBaseURL();
        if (null != tmp15) {
          str = tmp15;
        }
        tmp6.return_url = aPIBaseURL + outer2_7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(paymentSource.type, str, "success");
        const obj7 = outer2_0(outer2_2[6]);
      }
      const obj14 = outer2_0(outer2_2[13]);
    }
    if (null != countryCode) {
      tmp6.country_code = countryCode;
    }
  }
  if (null != expectedAmount) {
    tmp6.expected_amount = expectedAmount;
  }
  if (null != expectedCurrency) {
    tmp6.expected_currency = expectedCurrency;
  }
  const obj5 = outer2_0(outer2_2[12]);
  obj.purchase_token = outer2_0(outer2_2[14]).getPurchaseToken();
  if (null != quantity) {
    tmp6.quantity = quantity;
  }
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_7.STORE_SKU_PURCHASE(tmp), body: obj, context: { load_id: analyticsLoadId }, oldFormErrors: true };
  const obj8 = outer2_0(outer2_2[14]);
  obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
  const tmp29 = yield HTTP.post(obj);
  const obj10 = outer2_0(outer2_2[6]);
  obj1 = { type: "SKU_PURCHASE_SUCCESS", skuId: tmp };
  if (null != tmp29.body.library_applications) {
    const library_applications = tmp29.body.library_applications;
    let found = library_applications.filter(outer2_0(outer2_2[15]).isNotNullish);
  } else {
    found = [];
  }
  obj1.libraryApplications = found;
  obj1.entitlements = tmp29.body.entitlements;
  obj1.appliedUserDiscounts = tmp29.body.applied_user_discounts;
  obj1.giftCode = tmp29.body.gift_code;
  outer2_1(outer2_2[4]).dispatch(obj1);
  obj2 = {};
  const merged2 = Object.assign(tmp29.body);
  obj2["appliedUserDiscounts"] = tmp29.body.applied_user_discounts;
  obj2["redirectConfirmation"] = false;
  return obj2;
}
async function _resendPaymentVerificationEmail() {
  let obj = { purchase_token: outer2_0(outer2_2[14]).getPurchaseToken() };
  obj = {};
  const HTTP = outer2_0(outer2_2[6]).HTTP;
  obj = { url: outer2_7.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION, body: obj, oldFormErrors: true };
  const obj2 = outer2_0(outer2_2[14]);
  obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
  const merged = Object.assign(yield HTTP.post(obj).body);
  return obj;
}
({ ADYEN_PAYMENT_SOURCES: closure_6, Endpoints: closure_7 } = ME);
let closure_8 = { isGift: false };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/SKUActionCreators.tsx");

export const fetchSKU = function fetchSKU() {
  return _fetchSKU(...arguments);
};
export const fetchPublishedSKU = function fetchPublishedSKU() {
  return _fetchPublishedSKU(...arguments);
};
export const fetchTestSKUsForApplication = function fetchTestSKUsForApplication(id, arg1) {
  return _fetchTestSKUsForApplication(...arguments);
};
export const previewPurchaseSku = function previewPurchaseSku() {
  return _previewPurchaseSku(...arguments);
};
export const grantChannelBranchEntitlement = function grantChannelBranchEntitlement() {
  return _grantChannelBranchEntitlement(...arguments);
};
export const orderSKU = function orderSKU() {
  return _orderSKU(...arguments);
};
export const purchaseSKU = function purchaseSKU(collectibles, arg1, arg2) {
  return _purchaseSKU(...arguments);
};
export const resendPaymentVerificationEmail = function resendPaymentVerificationEmail() {
  return _resendPaymentVerificationEmail(...arguments);
};
export const clearPurchaseError = function clearPurchaseError() {
  importDefault(686).dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
};
export const showPurchaseConfirmationStep = function showPurchaseConfirmationStep() {
  importDefault(686).wait(() => outer1_1(outer1_2[4]).dispatch({ type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP" }));
};
export const updateSKUPaymentIsGift = function updateSKUPaymentIsGift(isGift) {
  let obj = importDefault(686);
  obj = { type: "SKU_PURCHASE_UPDATE_IS_GIFT", isGift };
  obj.dispatch(obj);
};
