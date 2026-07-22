// Module ID: 8676
// Function ID: 68709
// Name: extraWishlistParams
// Dependencies: []

// Module 8676 (extraWishlistParams)
function extraWishlistParams() {
  const obj = {};
  if (null != closure_7.ipCountryCode) {
    obj.country_code = closure_7.ipCountryCode;
  }
  if (obj2.isAndroid()) {
    obj.payment_gateway = constants.GOOGLE;
  } else {
    if (obj3.isIOS()) {
      obj.payment_gateway = constants.APPLE;
    }
    const obj3 = arg1(dependencyMap[8]);
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(arg1(dependencyMap[9]).isNotNullish);
  maybeDispatchUserDiscounts(wishlist_items);
  dispatchSkusFetchSuccessFromWishlistResponse(found);
  maybeDispatchStorefrontPricesFetchSuccessFromWishlistResponse(wishlist_items.storefront_pricing, found);
}
function maybeDispatchUserDiscounts(user_discounts) {
  if (null != user_discounts.user_discounts) {
    user_discounts = user_discounts.user_discounts;
    const mapped = user_discounts.map((arg0) => closure_4.fromServer(arg0));
    let obj = importDefault(dependencyMap[10]);
    obj = { type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: mapped };
    obj.dispatch(obj);
  }
}
function dispatchSkusFetchSuccessFromWishlistResponse(found) {
  let obj = importDefault(dependencyMap[10]);
  obj = { type: "SKUS_FETCH_SUCCESS", skus: found };
  obj.dispatch(obj);
}
function maybeDispatchStorefrontPricesFetchSuccessFromWishlistResponse(storefront_pricing, found) {
  if (null != storefront_pricing) {
    let obj = importDefault(dependencyMap[10]);
    obj = { type: "SKUS_PRICING_FETCH_SUCCESS" };
    obj = { type: "skus", skuIds: found.map((id) => id.id) };
    obj.priceId = obj;
    obj.data = found(dependencyMap[11]).transformStorefrontPricesServer(storefront_pricing);
    obj.dispatch(obj);
    const obj4 = found(dependencyMap[11]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).CollectiblesUserDiscountRecord;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const getWishlistSkuIds = arg1(dependencyMap[6]).getWishlistSkuIds;
({ AnalyticEvents: closure_11, Endpoints: closure_12, PaymentGateways: closure_13 } = arg1(dependencyMap[7]));
const obj = {
  fetchWishlist(wishlistId, stateFromStores, source) {
    stateFromStores = wishlistId;
    const importDefault = stateFromStores;
    const dependencyMap = source;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  addSkuToWishlist(id, arg1) {
    arg1 = id;
    const importDefault = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  removeSkuFromWishlist(wishlistId, arg1, analyticsLocations) {
    arg1 = wishlistId;
    const importDefault = arg1;
    const dependencyMap = analyticsLocations;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateWishlistVisibility(wishlistId, arg1) {
    arg1 = wishlistId;
    const importDefault = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  reorderWishlistItem(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    ({ previousSkuId: closure_2, nextSkuId: closure_3, newWishlistData: closure_4, analyticsLocations: closure_5 } = arg2);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchWishlistRecommendations(applicationIds, userIds, numItems) {
    let num = numItems;
    let flag = arg3;
    userIds = applicationIds;
    const importDefault = userIds;
    if (numItems === undefined) {
      num = 20;
    }
    const dependencyMap = num;
    if (flag === undefined) {
      flag = true;
    }
    const callback = flag;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/wishlists/WishlistActionCreators.tsx");

export default obj;
