// Module ID: 12703
// Function ID: 12704
// Name: useTrackPdpClick
// Dependencies: [19, 1074, 8229, 7623, 6974, 1241, 2]
// Exports: useTrackPdpClick

// Module 12703 (useTrackPdpClick)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

export const useTrackPdpClick = function useTrackPdpClick(skuId) {
  skuId = skuId.skuId;
  const productSkuIds = skuId.productSkuIds;
  const analyticsLocations = skuId.analyticsLocations;
  let cardId;
  let sessionId;
  let shopDiscountSource;
  let tmp = skuId;
  let obj = skuId(analyticsLocations[2]);
  let collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  const tmpResult = tmp(analyticsLocations[3]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  const tmpResult2 = tmp(analyticsLocations[4]);
  shopDiscountSource = tmpResult2.getShopDiscountSource(currentUserIfAvailable);
  const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
  return cardId.useCallback((cta, arg1) => {
    let obj2;
    let tmp = arg1;
    const track = AnalyticsUtilsDefault.track;
    const SHOP_PRODUCT_DETAIL_PAGE_CLICKED = AnalyticEvents.SHOP_PRODUCT_DETAIL_PAGE_CLICKED;
    AnalyticsUtilsDefault;
    if (arg1 == null) {
      tmp = skuId;
    }
    const obj = { sku_id: tmp, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: productSkuIds, location_stack: analyticsLocations, discount_source: obj2.getAnalyticsShopDiscountSource(shopDiscountSource) };
    obj2 = CollectiblesUtils;
    track(SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj);
  }, items);
};
