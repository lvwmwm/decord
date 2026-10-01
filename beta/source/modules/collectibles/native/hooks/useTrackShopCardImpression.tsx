// Module ID: 8228
// Function ID: 8229
// Name: useTrackShopCardImpression
// Dependencies: [19, 8229, 6583, 1479, 7623, 6974, 8230, 1249, 6973, 6865, 2]
// Exports: useTrackShopCardImpression

// Module 8228 (useTrackShopCardImpression)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useTrackImpression from "useTrackImpression" /* 8230 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = function useTrackShopCardImpression(product, selectedProduct) {
  let closure_4;
  let closure_5;
  let collectiblesAnalyticsContext;
  _require = product;
  importDefault = selectedProduct;
  let obj = require("CollectiblesAnalyticsContext");
  const tmp = collectiblesAnalyticsContext;
  collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let tmp3 = importDefault;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const tmp4 = require("useWindowDimensions")();
  ({ width: closure_4, height: closure_5 } = tmp4);
  let obj2 = require("useCurrentUser");
  const currentUser = obj2.useCurrentUser();
  const obj3 = require("CollectiblesUtils");
  const shopDiscountSource = obj3.getShopDiscountSource(currentUser);
  const tmp7 = analyticsLocations;
  const ref = analyticsLocations.useRef(null);
  let closure_8 = analyticsLocations.useRef(false);
  let closure_9 = analyticsLocations.useRef(false);
  const items = [selectedProduct.skuId];
  const effect = analyticsLocations.useEffect(() => {
    closure_8.current = false;
    closure_9.current = false;
  }, items);
  const items1 = [product, selectedProduct, , , , , ];
  let cardId;
  const useCallback = analyticsLocations.useCallback;
  if (collectiblesAnalyticsContext != null) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  items1[2] = cardId;
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  items1[3] = sessionId;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[4] = tilePosition;
  items1[5] = analyticsLocations;
  items1[6] = shopDiscountSource;
  let closure_10 = useCallback(() => {
    let cardId;
    let obj2;
    let sessionId;
    let tilePosition;
    let tmpResult;
    let tmpResult2;
    const tmp3 = useTrackImpression;
    const trackImpression = tmp3.trackImpression;
    const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_CARD, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: obj2 };
    obj2 = { sku_id: selectedProduct.skuId, card_id: cardId, shop_session_id: sessionId, position_in_section: tilePosition, product_sku_ids: tmpResult.getProductSkuIds(_require), location_stack: analyticsLocations, discount_source: tmpResult2.getAnalyticsShopDiscountSource(shopDiscountSource) };
    cardId = undefined;
    if (collectiblesAnalyticsContext != null) {
      cardId = tmp4.cardId;
    }
    sessionId = undefined;
    if (collectiblesAnalyticsContext != null) {
      sessionId = tmp4.sessionId;
    }
    tilePosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = tmp4.tilePosition;
    }
    tmpResult = CollectiblesProductUtils;
    tmpResult2 = CollectiblesUtils;
    trackImpression(obj, false, true);
  }, items1);
  tmp3(tmp[9])(() => {
    let ref2;
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
        const bound = Math.min(arg4 + arg2, closure_1_4);
        const max2 = Math.max;
        const maxResult = max(0, bound - Math.max(arg4, 0));
        const bound1 = Math.min(arg5 + arg3, closure_1_5);
        const result = arg2 * arg3;
        let num = 0;
        if (result > 0) {
          num = maxResult * max2(0, bound1 - Math.max(arg5, 0)) / result;
        }
        if (num >= 0.5) {
          if (ref.current) {
            if (!ref2.current) {
              closure_1_10();
              tmp7.current = true;
            }
            ref.current = num >= 0.5;
          }
        }
        if (num < 0.5) {
          ref2.current = false;
        }
      });
    }
  }, 1000);
  return ref;
};
