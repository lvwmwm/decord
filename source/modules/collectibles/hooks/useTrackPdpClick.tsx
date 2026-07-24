// Module ID: 8780
// Function ID: 69345
// Name: useTrackPdpClick
// Dependencies: [31, 653, 8707, 8708, 6786, 675, 2]
// Exports: useTrackPdpClick

// Module 8780 (useTrackPdpClick)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("useCollectiblesAnalyticsContext").fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

export const useTrackPdpClick = function useTrackPdpClick(skuId) {
  skuId = skuId.skuId;
  const productSkuIds = skuId.productSkuIds;
  const analyticsLocations = skuId.analyticsLocations;
  let cardId;
  let sessionId;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = skuId(analyticsLocations[2]).useCollectiblesAnalyticsContext();
  if (null == collectiblesAnalyticsContext) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  let obj = skuId(analyticsLocations[2]);
  const currentUserIfAvailable = skuId(analyticsLocations[3]).useCurrentUserIfAvailable();
  const obj3 = skuId(analyticsLocations[3]);
  shopDiscountSource = skuId(analyticsLocations[4]).getShopDiscountSource(currentUserIfAvailable);
  const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
  return cardId.useCallback((cta) => {
    let tmp = arg1;
    let obj = productSkuIds(analyticsLocations[5]);
    obj = {};
    if (null == arg1) {
      tmp = skuId;
    }
    obj.sku_id = tmp;
    obj.cta = cta;
    obj.shop_session_id = sessionId;
    obj.card_id = cardId;
    obj.product_sku_ids = productSkuIds;
    obj.location_stack = analyticsLocations;
    obj.discount_source = skuId(analyticsLocations[4]).getAnalyticsShopDiscountSource(shopDiscountSource);
    obj.track(sessionId.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, obj);
  }, items);
};
