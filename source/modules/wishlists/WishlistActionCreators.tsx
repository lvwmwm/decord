// Module ID: 8724
// Function ID: 68969
// Name: extraWishlistParams
// Dependencies: [5, 6855, 1849, 3778, 5610, 8719, 653, 478, 1327, 686, 5613, 507, 8717, 1184, 4029, 675, 7976, 2]

// Module 8724 (extraWishlistParams)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { getWishlistSkuIds } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function extraWishlistParams() {
  const obj = {};
  if (null != closure_6.ipCountryCode) {
    obj.country_code = closure_6.ipCountryCode;
  }
  if (obj2.isAndroid()) {
    obj.payment_gateway = constants.GOOGLE;
  } else {
    if (obj3.isIOS()) {
      obj.payment_gateway = constants.APPLE;
    }
    obj3 = require(478) /* isWindows */;
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  dispatchSkusFetchSuccessFromWishlistResponse(found);
  maybeDispatchStorefrontPricesFetchSuccessFromWishlistResponse(wishlist_items.storefront_pricing, found);
}
function dispatchSkusFetchSuccessFromWishlistResponse(found) {
  let obj = importDefault(686);
  obj = { type: "SKUS_FETCH_SUCCESS", skus: found };
  obj.dispatch(obj);
}
function maybeDispatchStorefrontPricesFetchSuccessFromWishlistResponse(storefront_pricing, found) {
  if (null != storefront_pricing) {
    let obj = importDefault(686);
    obj = { type: "SKUS_PRICING_FETCH_SUCCESS" };
    obj = { type: "skus", skuIds: found.map((id) => id.id) };
    obj.priceId = obj;
    obj.data = require(5613) /* transformStorefrontSKUPricesServer */.transformStorefrontPricesServer(storefront_pricing);
    obj.dispatch(obj);
    const obj4 = require(5613) /* transformStorefrontSKUPricesServer */;
  }
}
({ AnalyticEvents: closure_10, Endpoints: closure_11, PaymentGateways: closure_12 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/wishlists/WishlistActionCreators.tsx");

export default {
  fetchWishlist(wishlistId, stateFromStores, USER_PROFILE) {
    let closure_0 = wishlistId;
    let closure_1 = stateFromStores;
    let closure_2 = USER_PROFILE;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  addSkuToWishlist(id, arg1) {
    let closure_0 = id;
    let closure_1 = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  removeSkuFromWishlist(wishlistId, arg1, analyticsLocations) {
    let closure_0 = wishlistId;
    let closure_1 = arg1;
    let closure_2 = analyticsLocations;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateWishlistVisibility(wishlistId, arg1) {
    let closure_0 = wishlistId;
    let closure_1 = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  reorderWishlistItem(arg0, arg1, arg2) {
    let _isNativeReflectConstruct;
    let closure_4;
    let closure_5;
    let dependencyMap;
    let closure_0 = arg0;
    let closure_1 = arg1;
    ({ previousSkuId: dependencyMap, nextSkuId: _isNativeReflectConstruct, newWishlistData: closure_4, analyticsLocations: closure_5 } = arg2);
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchWishlistRecommendations(applicationIds, userIds, numItems) {
    let num = numItems;
    let flag = arg3;
    let closure_0 = applicationIds;
    let closure_1 = userIds;
    if (numItems === undefined) {
      num = 20;
    }
    if (flag === undefined) {
      flag = true;
    }
    // CreateGeneratorClosureLongIndex (0x67)
    return flag(tmp)();
  }
};
