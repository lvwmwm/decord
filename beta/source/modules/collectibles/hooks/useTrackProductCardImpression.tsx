// Module ID: 15433
// Function ID: 15434
// Name: useTrackProductCardImpression
// Dependencies: [19, 6962, 1074, 8229, 504, 7623, 4488, 6974, 1241, 2]
// Exports: useTrackProductCardImpression

// Module 15433 (useTrackProductCardImpression)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = function useTrackProductCardImpression(categoryStoreListingId, mobile_home, featured_block) {
  let page_type;
  let sku_id;
  _require = categoryStoreListingId;
  importDefault = mobile_home;
  let str = featured_block;
  if (featured_block === undefined) {
    str = "product";
  }
  let stateFromStores;
  let callback;
  let obj = require("CollectiblesAnalyticsContext");
  const collectiblesAnalyticsContext = obj.useCollectiblesAnalyticsContext();
  let obj2 = require("get initialized");
  const items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => CollectiblesCategoryStore.getProduct(sku_id));
  let obj3 = require("useCurrentUser");
  const currentUser = obj3.useCurrentUser();
  const obj4 = require("PremiumUtils");
  const canUseShopDiscountsResult = obj4.canUseShopDiscounts(currentUser);
  let c5 = canUseShopDiscountsResult;
  const ref = collectiblesAnalyticsContext.useRef(null);
  let sessionId;
  const useCallback = collectiblesAnalyticsContext.useCallback;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  const items1 = [sessionId, , , , , , , , , ];
  let categoryPosition;
  if (collectiblesAnalyticsContext != null) {
    categoryPosition = collectiblesAnalyticsContext.categoryPosition;
  }
  items1[1] = categoryPosition;
  let pageCategory;
  if (collectiblesAnalyticsContext != null) {
    pageCategory = collectiblesAnalyticsContext.pageCategory;
  }
  items1[2] = pageCategory;
  let pageSection;
  if (collectiblesAnalyticsContext != null) {
    pageSection = collectiblesAnalyticsContext.pageSection;
  }
  items1[3] = pageSection;
  let tilePosition;
  if (collectiblesAnalyticsContext != null) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[4] = tilePosition;
  items1[5] = canUseShopDiscountsResult;
  items1[6] = mobile_home;
  items1[7] = stateFromStores;
  items1[8] = categoryStoreListingId;
  items1[9] = str;
  callback = useCallback(() => {
    let amount;
    let categoryPosition;
    let pageCategory;
    let pageSection;
    let str1;
    let tilePosition;
    let priceForCollectiblesProduct = null;
    if (null != stateFromStores) {
      const obj = CollectiblesUtils;
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(tmp, c5, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      const obj2 = CollectiblesUtils;
      strikeThroughPriceAmountForCollectiblesProduct = obj2.getStrikeThroughPriceAmountForCollectiblesProduct(tmp, c5, true);
    }
    let sessionId;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_TILE_IMPRESSION = AnalyticEvents.COLLECTIBLES_TILE_IMPRESSION;
    AnalyticsUtilsDefault;
    if (collectiblesAnalyticsContext != null) {
      sessionId = tmp11.sessionId;
    }
    const obj3 = { collectibles_shop_session_id: sessionId, sku_id, display_price: amount, display_price_currency: str1, display_price_strikethrough: strikeThroughPriceAmountForCollectiblesProduct, position: tilePosition, page_type, page_category: pageCategory, page_section: pageSection, type: str, category_position: categoryPosition };
    amount = undefined;
    if (priceForCollectiblesProduct != null) {
      amount = priceForCollectiblesProduct.amount;
    }
    str1 = undefined;
    if (priceForCollectiblesProduct != null) {
      str1 = str.toString();
    }
    tilePosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = tmp11.tilePosition;
    }
    pageCategory = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = tmp11.pageCategory;
    }
    pageSection = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageSection = tmp11.pageSection;
    }
    categoryPosition = undefined;
    if (collectiblesAnalyticsContext != null) {
      categoryPosition = tmp11.categoryPosition;
    }
    track(COLLECTIBLES_TILE_IMPRESSION, obj3);
  }, items1);
  const items2 = [callback];
  const items3 = [categoryStoreListingId];
  const handleCardVisibilityChange = obj5.useCallback((arg0) => {
    const current = ref.current;
    const tmp2 = arg0;
    if (tmp2) {
      if (null === current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          callback();
          ref.current = null;
        }, 1000);
      }
    } else if (null !== current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const effect = obj5.useEffect(() => () => {
    if (null !== ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items3);
  return { handleCardVisibilityChange };
};
