// Module ID: 9138
// Function ID: 9139
// Name: useTrackShopCardClick
// Dependencies: [19, 9139, 1078, 558, 568, 9077, 8484, 7833, 7832, 1245, 2]

// Module 9138 (useTrackShopCardClick)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7832 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7833 */;
import noop from "module_19" /* 19 */;

require = fn;
const useSelectedVariantIndex = fn(9139).useSelectedVariantIndex;
const AnalyticEvents = fn(1078).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackShopCardClick.tsx");

export const useTrackShopCardClick = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  const cResult = require("c").c(10);
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  let obj = require("c");
  let collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  const sessionId = collectiblesAnalyticsContext.sessionId;
  const tilePosition = collectiblesAnalyticsContext.tilePosition;
  let tmp4 = tilePosition(product);
  closure_5 = tmp4;
  let obj2 = require("CollectiblesAnalyticsContext");
  const currentUserIfAvailable = require("useCurrentUser").useCurrentUserIfAvailable();
  if (cResult[0] !== currentUserIfAvailable) {
    const shopDiscountSource = tmp(tmp2[7]).getShopDiscountSource(currentUserIfAvailable);
    cResult[0] = currentUserIfAvailable;
    cResult[1] = shopDiscountSource;
    let tmp6 = shopDiscountSource;
    const tmpResult2 = tmp(tmp2[7]);
  } else {
    tmp6 = cResult[1];
  }
  closure_6 = tmp6;
  if (cResult[2] === analyticsLocations) {
    if (cResult[3] === cardId) {
      if (cResult[4] === tmp6) {
        if (cResult[5] === product) {
          if (cResult[6] === tmp4) {
            if (cResult[7] === sessionId) {
              if (cResult[8] === tilePosition) {
                let tmp8 = cResult[9];
              }
              return tmp8;
            }
          }
        }
      }
    }
  }
  const fn = function v(cta, arg1) {
    if (obj.getIsVariantProduct(product)) {
      let tmp4 = arg1;
      if (arg1 == null) {
        tmp4 = closure_5;
      }
      let skuId1;
      if (tmp3.variants[tmp4] != null) {
        skuId1 = tmp6.skuId;
      }
      if (skuId1 == null) {
        skuId1 = tmp3.skuId;
      }
      let skuId = skuId1;
    } else {
      skuId = tmp3.skuId;
    }
    obj = CollectiblesProductUtils;
    const obj3 = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: null, location_stack: null, position_in_section: null, discount_source: null };
    const obj2 = AnalyticsUtilsDefault;
    obj3.product_sku_ids = CollectiblesProductUtils.getProductSkuIds(product);
    obj3.location_stack = analyticsLocations;
    obj3.position_in_section = tilePosition;
    const tmpResult = CollectiblesProductUtils;
    obj3.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(closure_6);
    obj2.track(AnalyticEvents.SHOP_CARD_CLICKED, obj3);
  };
  cResult[2] = analyticsLocations;
  cResult[3] = cardId;
  cResult[4] = tmp6;
  cResult[5] = product;
  cResult[6] = tmp4;
  cResult[7] = sessionId;
  cResult[8] = tilePosition;
  cResult[9] = fn;
  tmp8 = fn;
}) : ((product) => {
  product = product.product;
  require = product;
  const analyticsLocations = product.analyticsLocations;
  let cardId;
  let sessionId;
  let tilePosition;
  closure_5 = undefined;
  let shopDiscountSource;
  let collectiblesAnalyticsContext = require("CollectiblesAnalyticsContext").useCollectiblesAnalyticsContext();
  if (collectiblesAnalyticsContext == null) {
    collectiblesAnalyticsContext = {};
  }
  cardId = collectiblesAnalyticsContext.cardId;
  sessionId = collectiblesAnalyticsContext.sessionId;
  tilePosition = collectiblesAnalyticsContext.tilePosition;
  const tmp3 = tilePosition(product);
  closure_5 = tmp3;
  let obj = require("CollectiblesAnalyticsContext");
  const currentUserIfAvailable = require("useCurrentUser").useCurrentUserIfAvailable();
  let tmpResult = require("useCurrentUser");
  shopDiscountSource = require("CollectiblesUtils").getShopDiscountSource(currentUserIfAvailable);
  const items = [product, tmp3, sessionId, cardId, analyticsLocations, tilePosition, shopDiscountSource];
  return sessionId.useCallback((cta, arg1) => {
    if (obj.getIsVariantProduct(product)) {
      let tmp4 = arg1;
      if (arg1 == null) {
        tmp4 = closure_5;
      }
      let skuId1;
      if (tmp3.variants[tmp4] != null) {
        skuId1 = tmp6.skuId;
      }
      if (skuId1 == null) {
        skuId1 = tmp3.skuId;
      }
      let skuId = skuId1;
    } else {
      skuId = tmp3.skuId;
    }
    obj = CollectiblesProductUtils;
    const obj3 = { sku_id: skuId, cta, shop_session_id: sessionId, card_id: cardId, product_sku_ids: null, location_stack: null, position_in_section: null, discount_source: null };
    const obj2 = AnalyticsUtilsDefault;
    obj3.product_sku_ids = CollectiblesProductUtils.getProductSkuIds(product);
    obj3.location_stack = analyticsLocations;
    obj3.position_in_section = tilePosition;
    const tmpResult = CollectiblesProductUtils;
    obj3.discount_source = CollectiblesUtils.getAnalyticsShopDiscountSource(shopDiscountSource);
    obj2.track(AnalyticEvents.SHOP_CARD_CLICKED, obj3);
  }, items);
});
