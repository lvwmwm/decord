// Module ID: 8692
// Function ID: 68844
// Name: useTrackShopCardClick
// Dependencies: []
// Exports: useTrackShopCardClick

// Module 8692 (useTrackShopCardClick)
let closure_3 = importAll(dependencyMap[0]);
const useSelectedVariantIndex = arg1(dependencyMap[1]).useSelectedVariantIndex;
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = function useTrackShopCardClick(product) {
  product = product.product;
  const arg1 = product;
  const analyticsLocations = product.analyticsLocations;
  const importDefault = analyticsLocations;
  let dependencyMap;
  let React;
  let useSelectedVariantIndex;
  let AnalyticEvents;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = arg1(dependencyMap[3]).useCollectiblesAnalyticsContext();
  if (null == collectiblesAnalyticsContext) {
    collectiblesAnalyticsContext = {};
  }
  const cardId = collectiblesAnalyticsContext.cardId;
  dependencyMap = cardId;
  const sessionId = collectiblesAnalyticsContext.sessionId;
  React = sessionId;
  const tilePosition = collectiblesAnalyticsContext.tilePosition;
  useSelectedVariantIndex = tilePosition;
  const tmp = useSelectedVariantIndex(product);
  AnalyticEvents = tmp;
  const obj = arg1(dependencyMap[3]);
  const currentUserIfAvailable = arg1(dependencyMap[4]).useCurrentUserIfAvailable();
  const obj3 = arg1(dependencyMap[4]);
  shopDiscountSource = arg1(dependencyMap[5]).getShopDiscountSource(currentUserIfAvailable);
  const items = [product, tmp, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
  return React.useCallback((cta) => {
    const tmp = arg1;
    let obj = product(cardId[6]);
    if (!obj.getIsVariantProduct(product)) {
      let skuId = product.skuId;
    } else {
      skuId = undefined;
      if (null != product.variants[tmp]) {
        skuId = tmp4.skuId;
      }
    }
    obj = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId };
    const obj2 = analyticsLocations(cardId[7]);
    obj.product_sku_ids = product(cardId[6]).getProductSkuIds(product);
    obj.location_stack = analyticsLocations;
    obj.position_in_section = tilePosition;
    const obj4 = product(cardId[6]);
    obj.discount_source = product(cardId[5]).getAnalyticsShopDiscountSource(shopDiscountSource);
    obj2.track(tmp.SHOP_CARD_CLICKED, obj);
  }, items);
};
