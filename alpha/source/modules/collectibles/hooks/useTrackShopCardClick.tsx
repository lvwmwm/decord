// Module ID: 9501
// Function ID: 9502
// Name: useTrackShopCardClick
// Dependencies: [19, 9502, 1072, 9440, 8741, 7725, 7724, 1253, 2]
// Exports: useTrackShopCardClick

// Module 9501 (useTrackShopCardClick)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7724 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7725 */;
import CollectiblesShopVariantsUIStore from "CollectiblesShopVariantsUIStore" /* 9502 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const useSelectedVariantIndex = CollectiblesShopVariantsUIStore.useSelectedVariantIndex;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export function useTrackShopCardClick(product) {
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  let cardId;
  let sessionId;
  let tilePosition;
  let closure_5;
  let shopDiscountSource;
  let obj = require("CollectiblesAnalyticsContext");
  let collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  tilePosition = collectiblesAnalyticsContext.tilePosition;
  const tmp3 = tilePosition(product);
  closure_5 = tmp3;
  let tmpResult = tmp(tmp2[4]);
  const currentUserIfAvailable = tmpResult.useCurrentUserIfAvailable();
  let tmpResult2 = tmp(tmp2[5]);
  shopDiscountSource = tmpResult2.getShopDiscountSource(currentUserIfAvailable);
  const items = [product, tmp3, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
  return sessionId.useCallback((cta, arg1) => {
    let skuId;
    let tmpResult;
    let tmpResult2;
    const obj = CollectiblesProductUtils;
    if (obj.getIsVariantProduct(require)) {
      let tmp4 = arg1;
      const variants = tmp3.variants;
      if (arg1 == null) {
        tmp4 = closure_5;
      }
      let skuId1;
      if (variants[tmp4] != null) {
        skuId1 = tmp6.skuId;
      }
      if (skuId1 == null) {
        skuId1 = tmp3.skuId;
      }
      skuId = skuId1;
    } else {
      skuId = tmp3.skuId;
    }
    const obj2 = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: tmpResult.getProductSkuIds(require), location_stack: analyticsLocations, position_in_section: tilePosition, discount_source: tmpResult2.getAnalyticsShopDiscountSource(shopDiscountSource) };
    const track = AnalyticsUtilsDefault.track;
    const SHOP_CARD_CLICKED = AnalyticEvents.SHOP_CARD_CLICKED;
    AnalyticsUtilsDefault;
    tmpResult = CollectiblesProductUtils;
    tmpResult2 = CollectiblesUtils;
    track(SHOP_CARD_CLICKED, obj2);
  }, items);
}
