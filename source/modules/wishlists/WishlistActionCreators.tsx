// Module ID: 8683
// Function ID: 68749
// Name: extraWishlistParams
// Dependencies: [5, 6796, 6856, 1849, 3778, 5612, 8678, 653, 478, 1327, 686, 5615, 507, 8676, 1184, 4029, 675, 7889, 2]

// Module 8683 (extraWishlistParams)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesUserDiscountRecord as closure_4 } from "CollectiblesUserDiscountRecord";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { getWishlistSkuIds } from "_isNativeReflectConstruct";
import ME from "ME";

let closure_11;
let closure_12;
let closure_13;
const require = arg1;
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
    obj3 = require(478) /* isWindows */;
  }
  return obj;
}
function maybeDispatchAdditionalActions(wishlist_items) {
  wishlist_items = wishlist_items.wishlist_items;
  const mapped = wishlist_items.map((sku) => sku.sku);
  const found = mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
  maybeDispatchUserDiscounts(wishlist_items);
  dispatchSkusFetchSuccessFromWishlistResponse(found);
  maybeDispatchStorefrontPricesFetchSuccessFromWishlistResponse(wishlist_items.storefront_pricing, found);
}
function maybeDispatchUserDiscounts(user_discounts) {
  if (null != user_discounts.user_discounts) {
    user_discounts = user_discounts.user_discounts;
    const mapped = user_discounts.map((arg0) => outer1_4.fromServer(arg0));
    let obj = importDefault(686);
    obj = { type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: mapped };
    obj.dispatch(obj);
  }
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
    obj.data = require(5615) /* transformStorefrontSKUPricesServer */.transformStorefrontPricesServer(storefront_pricing);
    obj.dispatch(obj);
    const obj4 = require(5615) /* transformStorefrontSKUPricesServer */;
  }
}
({ AnalyticEvents: closure_11, Endpoints: closure_12, PaymentGateways: closure_13 } = ME);
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
