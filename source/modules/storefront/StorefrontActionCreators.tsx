// Module ID: 8677
// Function ID: 68729
// Name: shouldFetchStorefrontPromotions
// Dependencies: []
// Exports: fetchStorefrontPricesForApplicationId, fetchStorefrontPricesForSkuIds, maybeFetchStorefrontPromotions, setStorefrontPromotionIdOverride

// Module 8677 (shouldFetchStorefrontPromotions)
function shouldFetchStorefrontPromotions(guildId) {
  const fetchState = store.getFetchState(guildId);
  if (undefined === fetchState) {
    return true;
  } else if ("loading" === fetchState) {
    return false;
  } else {
    const fetchedAt = store.getFetchedAt(guildId);
    if (null == fetchedAt) {
      return true;
    } else {
      const _Date = Date;
      return Date.now() - fetchedAt > "error" === fetchState ? closure_9 : MINUTE;
    }
  }
}
function _maybeFetchStorefrontPromotions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _maybeFetchStorefrontPromotions = obj;
  return obj(...arguments);
}
function _fetchStorefrontPricesForApplicationId() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchStorefrontPricesForApplicationId = obj;
  return obj(...arguments);
}
function _fetchStorefrontPricesForSkuIds() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchStorefrontPricesForSkuIds = obj;
  return obj(...arguments);
}
function fetchStorefrontPrices() {
  return _fetchStorefrontPrices(...arguments);
}
function _fetchStorefrontPrices() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchStorefrontPrices = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const Endpoints = arg1(dependencyMap[6]).Endpoints;
let closure_9 = 10 * importDefault(dependencyMap[7]).Millis.MINUTE;
let MINUTE = importDefault(dependencyMap[7]).Millis.MINUTE;
MINUTE = importDefault(dependencyMap[7]).Millis.MINUTE;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/storefront/StorefrontActionCreators.tsx");

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
  let obj = importDefault(dependencyMap[8]);
  obj = { type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride };
  obj.dispatch(obj);
};
