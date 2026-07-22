// Module ID: 7362
// Function ID: 59313
// Name: _fetchSKU
// Dependencies: []
// Exports: clearPurchaseError, fetchPublishedSKU, fetchSKU, fetchTestSKUsForApplication, grantChannelBranchEntitlement, orderSKU, previewPurchaseSku, purchaseSKU, resendPaymentVerificationEmail, showPurchaseConfirmationStep, updateSKUPaymentIsGift

// Module 7362 (_fetchSKU)
async function _fetchSKU(skuId, arg1) {
  if (null == closure_5.get(skuId)) {
    let obj = { type: "SKU_FETCH_START", skuId: tmp };
    callback2(closure_2[4]).dispatch(obj);
    const obj3 = callback2(closure_2[4]);
    obj = { url: closure_7.STORE_SKU(tmp) };
    const obj5 = callback(closure_2[5]);
    obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
    const obj7 = callback(closure_2[6]);
    obj = callback2(closure_2[4]);
    const obj1 = { type: "SKU_FETCH_SUCCESS", sku: yield obj5.httpGetWithCountryCodeQuery(obj).body };
    obj.dispatch(obj1);
    const tmp13 = yield obj5.httpGetWithCountryCodeQuery(obj);
  }
}
async function _fetchPublishedSKU(applicationId, skuId, variants_return_style, arg3, arg4) {
  if (null == closure_5.get(skuId)) {
    let obj = { type: "SKU_FETCH_START", skuId: tmp };
    callback2(closure_2[4]).dispatch(obj);
    const obj8 = callback2(closure_2[4]);
    const result = callback(closure_2[8]).isTestModeForApplication(applicationId);
    obj = {};
    if (result) {
      let STORE_SKUResult = obj12.STORE_SKU(tmp);
    } else {
      STORE_SKUResult = obj12.STORE_PUBLISHED_LISTINGS_SKU(tmp);
    }
    obj.url = STORE_SKUResult;
    obj = callback(closure_2[6]);
    obj.rejectWithError = obj.rejectWithMigratedError();
    const obj1 = {};
    if (variants_return_style === callback(closure_2[9]).ShopVariantsReturnStyle.VARIANTS_GROUP) {
      obj1.variants_return_style = variants_return_style;
    }
    if (arg3) {
      obj1.include_unpublished = true;
    }
    const _Object = Object;
    if (Object.keys(obj1).length > 0) {
      tmp7.query = obj1;
    }
    let obj2 = callback(closure_2[5]);
    const tmp16 = yield obj2.httpGetWithCountryCodeQuery(obj);
    let obj3 = callback2(closure_2[4]);
    obj2 = { type: "SKU_FETCH_SUCCESS" };
    const body = tmp16.body;
    obj2.sku = result ? body : body.sku;
    obj3.dispatch(obj2);
    if (!result) {
      obj3 = { type: "STORE_LISTING_FETCH_SUCCESS", storeListing: tmp16.body };
      callback2(closure_2[4]).dispatch(obj3);
      const obj6 = callback2(closure_2[4]);
    }
    const obj10 = callback(closure_2[8]);
    const tmp33 = result;
    const tmp7 = obj;
  }
}
async function _fetchTestSKUsForApplication(arg0, arg1) {
  const fn = function*(applicationId) {
    let flag = arg1;
    if (flag === undefined) {
      flag = true;
    }
    yield undefined;
    let obj = callback(closure_2[8]);
    if (!obj.isTestModeForApplication(applicationId)) {
      if (flag) {
        const _Error = Error;
        const error = new Error("this should only be used in test mode");
        throw error;
      }
    }
    obj = { url: closure_7.APPLICATION_SKUS(applicationId) };
    const obj2 = callback(closure_2[5]);
    obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
    const body = yield obj2.httpGetWithCountryCodeQuery(obj).body;
    const obj4 = callback(closure_2[6]);
    callback2(closure_2[4]).dispatch({ type: "SKUS_FETCH_SUCCESS", skus: body });
    return body;
  };
  fn.next();
  return fn;
}
async function _previewPurchaseSku(arg0, arg1) {
  const fn = function*(arg0) {
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
    const promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
    if (null != promotionIdOverride) {
      tmp2.promotion_id_override = promotionIdOverride;
    }
    const obj2 = callback(closure_2[8]);
    obj = { url: closure_7.STORE_SKU_PURCHASE(skuId), query: obj, oldFormErrors: true };
    const obj3 = callback(closure_2[5]);
    obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
    return yield obj3.httpGetWithCountryCodeQuery(obj).body;
  };
  fn.next();
  return fn;
}
async function _grantChannelBranchEntitlement(applicationId, arg1, skuId, arg3) {
  let obj = callback2(closure_2[4]);
  obj = { type: "SKU_PURCHASE_START", applicationId, skuId };
  obj.dispatch(obj);
  const HTTP = callback(closure_2[6]).HTTP;
  obj = { url: closure_7.CHANNEL_ENTITLEMENT_GRANT(arg1), oldFormErrors: true, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const tmp3 = yield HTTP.post(obj);
  const obj4 = callback(closure_2[6]);
  const tmp = skuId;
  callback2(closure_2[4]).dispatch({ type: "SKU_PURCHASE_SUCCESS", skuId: tmp, entitlements: tmp3.body, libraryApplications: [] });
  return tmp3.body;
}
async function _orderSKU(sku_id, payment_source_id, request_gateway_country_code, arg3, arg4, arg5) {
  let obj = callback2(closure_2[4]);
  obj.dispatch({ type: "ORDER_CREATE_START" });
  obj = { order_line_items: items, billing_facet: obj1, location_facet: obj2 };
  obj = { "Null": "password", "Null": "email", "Null": "name-prefix", sku_id };
  const items = [obj];
  if (arg3) {
    const obj3 = { is_gift: true };
    ({ recipient_id: obj7.recipient_id, gift_style: obj7.gift_style, emoji_id: obj7.emoji_id, emoji_name: obj7.emoji_name, sound_id: obj7.sound_id, reward_sku_ids: obj7.reward_sku_ids, custom_message: obj7.custom_message_contents } = arg4);
    obj3.gift_customization = {};
    tmp2.gifting_facet = obj3;
    const obj4 = {};
  }
  const HTTP = callback(closure_2[6]).HTTP;
  const obj5 = { url: constants.ORDER_CREATE, body: obj, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
  const body = yield HTTP.post(obj5).body;
  const id = body.id;
  const obj1 = { payment_source_id };
  const obj2 = { request_gateway_country_code };
  const obj9 = callback(closure_2[6]);
  callback2(closure_2[4]).dispatch({ type: "ORDER_CREATE_SUCCESS", orderId: id, order: body });
  return id;
}
async function _purchaseSKU(applicationId, skuId, arg2, arg3) {
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
  let obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg2);
  ({ paymentSource, expectedAmount, expectedCurrency, isGift, countryCode, quantity } = obj);
  ({ analyticsLoadId, giftInfoOptions, subscriptionPlanId, loadId } = obj);
  let obj1 = skuId(closure_2[4]);
  obj1.wait(() => {
    let obj = arg1(closure_2[4]);
    obj = { type: "SKU_PURCHASE_START", applicationId: arg0, skuId: arg1 };
    obj.dispatch(obj);
  });
  let obj2 = applicationId(closure_2[8]);
  obj = { gift: isGift, sku_subscription_plan_id: subscriptionPlanId };
  const result = obj2.isTestModeForApplication(applicationId);
  obj.gateway_checkout_context = yield applicationId(closure_2[12]).createGatewayCheckoutContext(paymentSource);
  obj.load_id = loadId;
  obj.gift_info_options = giftInfoOptions;
  const promotionIdOverride = promotionIdOverride.getPromotionIdOverride();
  if (null != promotionIdOverride) {
    tmp6.promotion_id_override = promotionIdOverride;
  }
  if (result) {
    tmp6.test_mode = true;
  } else {
    if (null != paymentSource) {
      tmp6.payment_source_id = paymentSource.id;
      tmp6.payment_source_token = yield applicationId(closure_2[13]).createPaymentSourceToken(paymentSource);
      if (set.has(paymentSource.type)) {
        const tmp15 = yield applicationId(closure_2[13]).popupBridgeState(paymentSource.type);
        const obj6 = applicationId(closure_2[13]);
        let str = "";
        const aPIBaseURL = applicationId(closure_2[6]).getAPIBaseURL();
        if (null != tmp15) {
          str = tmp15;
        }
        tmp6.return_url = aPIBaseURL + closure_7.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(paymentSource.type, str, "success");
        const obj7 = applicationId(closure_2[6]);
      }
      const obj14 = applicationId(closure_2[13]);
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
  const obj5 = applicationId(closure_2[12]);
  obj.purchase_token = applicationId(closure_2[14]).getPurchaseToken();
  if (null != quantity) {
    tmp6.quantity = quantity;
  }
  const HTTP = applicationId(closure_2[6]).HTTP;
  obj = { url: closure_7.STORE_SKU_PURCHASE(tmp), body: obj, context: { load_id: analyticsLoadId }, oldFormErrors: true };
  const obj8 = applicationId(closure_2[14]);
  obj.rejectWithError = applicationId(closure_2[6]).rejectWithMigratedError();
  const tmp29 = yield HTTP.post(obj);
  const obj10 = applicationId(closure_2[6]);
  obj1 = { type: "SKU_PURCHASE_SUCCESS", skuId: tmp };
  if (null != tmp29.body.library_applications) {
    const library_applications = tmp29.body.library_applications;
    let found = library_applications.filter(applicationId(closure_2[15]).isNotNullish);
  } else {
    found = [];
  }
  obj1.libraryApplications = found;
  obj1.entitlements = tmp29.body.entitlements;
  obj1.appliedUserDiscounts = tmp29.body.applied_user_discounts;
  obj1.giftCode = tmp29.body.gift_code;
  skuId(closure_2[4]).dispatch(obj1);
  obj2 = {};
  const merged2 = Object.assign(tmp29.body);
  obj2["appliedUserDiscounts"] = tmp29.body.applied_user_discounts;
  obj2["redirectConfirmation"] = false;
  return obj2;
}
async function _resendPaymentVerificationEmail() {
  let obj = { purchase_token: callback(closure_2[14]).getPurchaseToken() };
  obj = {};
  const HTTP = callback(closure_2[6]).HTTP;
  obj = { url: constants.STORE_EMAIL_RESEND_PAYMENT_VERIFICATION, body: obj, oldFormErrors: true };
  const obj2 = callback(closure_2[14]);
  obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
  const merged = Object.assign(yield HTTP.post(obj).body);
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ ADYEN_PAYMENT_SOURCES: closure_6, Endpoints: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = { isGift: false };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("actions/SKUActionCreators.tsx");

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
  importDefault(dependencyMap[4]).dispatch({ type: "SKU_PURCHASE_CLEAR_ERROR" });
};
export const showPurchaseConfirmationStep = function showPurchaseConfirmationStep() {
  importDefault(dependencyMap[4]).wait(() => callback(closure_2[4]).dispatch({ type: "SKU_PURCHASE_SHOW_CONFIRMATION_STEP" }));
};
export const updateSKUPaymentIsGift = function updateSKUPaymentIsGift(isGift) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "SKU_PURCHASE_UPDATE_IS_GIFT", isGift };
  obj.dispatch(obj);
};
