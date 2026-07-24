// Module ID: 8726
// Function ID: 68999
// Name: shouldFetchStorefrontPromotions
// Dependencies: [5, 3778, 5614, 7368, 8727, 8728, 653, 664, 686, 507, 5613, 2]
// Exports: fetchStorefrontPricesForApplicationId, fetchStorefrontPricesForSkuIds, maybeFetchStorefrontPromotions, setStorefrontPromotionIdOverride

// Module 8726 (shouldFetchStorefrontPromotions)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
function shouldFetchStorefrontPromotions(arg0) {
  const fetchState = store.getFetchState(arg0);
  if (undefined === fetchState) {
    return true;
  } else if ("loading" === fetchState) {
    return false;
  } else {
    const fetchedAt = store.getFetchedAt(arg0);
    if (null == fetchedAt) {
      return true;
    } else {
      const _Date = Date;
      return Date.now() - fetchedAt > ("error" === fetchState ? closure_9 : MINUTE);
    }
  }
}
function _maybeFetchStorefrontPromotions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchStorefrontPricesForApplicationId() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchStorefrontPricesForSkuIds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchStorefrontPrices() {
  return _fetchStorefrontPrices(...arguments);
}
function _fetchStorefrontPrices() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let closure_9 = 10 * require("set").Millis.MINUTE;
let MINUTE = require("set").Millis.MINUTE;
MINUTE = require("set").Millis.MINUTE;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/storefront/StorefrontActionCreators.tsx");

export const maybeFetchStorefrontPromotions = function maybeFetchStorefrontPromotions() {
  return _maybeFetchStorefrontPromotions(...arguments);
};
export const fetchStorefrontPricesForApplicationId = function fetchStorefrontPricesForApplicationId(arg0) {
  return _fetchStorefrontPricesForApplicationId(...arguments);
};
export const fetchStorefrontPricesForSkuIds = function fetchStorefrontPricesForSkuIds(arg0) {
  return _fetchStorefrontPricesForSkuIds(...arguments);
};
export const setStorefrontPromotionIdOverride = function setStorefrontPromotionIdOverride(promotionIdOverride) {
  let obj = importDefault(686);
  obj = { type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride };
  obj.dispatch(obj);
};
