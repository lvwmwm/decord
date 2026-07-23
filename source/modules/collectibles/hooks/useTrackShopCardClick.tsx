// Module ID: 8700
// Function ID: 68907
// Name: useTrackShopCardClick
// Dependencies: [31, 8701, 653, 8666, 8667, 6786, 6785, 675, 2]
// Exports: useTrackShopCardClick

// Module 8700 (useTrackShopCardClick)
import result from "result";
import { useSelectedVariantIndex } from "useSelectedVariantIndex";
import { AnalyticEvents } from "ME";

let require = arg1;
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = function useTrackShopCardClick(product) {
  product = product.product;
  const require = product;
  const analyticsLocations = product.analyticsLocations;
  let cardId;
  let sessionId;
  let tilePosition;
  let c5;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = require(cardId[3]).useCollectiblesAnalyticsContext();
  if (null == collectiblesAnalyticsContext) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  tilePosition = collectiblesAnalyticsContext.tilePosition;
  let tmp = tilePosition(product);
  c5 = tmp;
  let obj = require(cardId[3]);
  const currentUserIfAvailable = require(cardId[4]).useCurrentUserIfAvailable();
  const obj3 = require(cardId[4]);
  shopDiscountSource = require(cardId[5]).getShopDiscountSource(currentUserIfAvailable);
  const items = [product, tmp, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
  return sessionId.useCallback((cta) => {
    let tmp = arg1;
    let obj = product(cardId[6]);
    if (!obj.getIsVariantProduct(product)) {
      let skuId = product.skuId;
    } else {
      if (null == tmp) {
        tmp = _undefined;
      }
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
    obj2.track(_undefined.SHOP_CARD_CLICKED, obj);
  }, items);
};
