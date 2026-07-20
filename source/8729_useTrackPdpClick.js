// Module ID: 8729
// Function ID: 69054
// Name: useTrackPdpClick
// Dependencies: []
// Exports: useTrackPdpClick

// Module 8729 (useTrackPdpClick)
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/collectibles/hooks/useTrackPdpClick.tsx");

export const useTrackPdpClick = function useTrackPdpClick(skuId) {
  skuId = skuId.skuId;
  const arg1 = skuId;
  const productSkuIds = skuId.productSkuIds;
  const importDefault = productSkuIds;
  const analyticsLocations = skuId.analyticsLocations;
  const dependencyMap = analyticsLocations;
  let React;
  let AnalyticEvents;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = arg1(dependencyMap[2]).useCollectiblesAnalyticsContext();
  if (null == collectiblesAnalyticsContext) {
    collectiblesAnalyticsContext = {};
  }
  const cardId = collectiblesAnalyticsContext.cardId;
  React = cardId;
  const sessionId = collectiblesAnalyticsContext.sessionId;
  AnalyticEvents = sessionId;
  const obj = arg1(dependencyMap[2]);
  const currentUserIfAvailable = arg1(dependencyMap[3]).useCurrentUserIfAvailable();
  const obj3 = arg1(dependencyMap[3]);
  shopDiscountSource = arg1(dependencyMap[4]).getShopDiscountSource(currentUserIfAvailable);
  const items = [skuId, analyticsLocations, cardId, productSkuIds, sessionId, shopDiscountSource];
  return React.useCallback((cta) => {
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
