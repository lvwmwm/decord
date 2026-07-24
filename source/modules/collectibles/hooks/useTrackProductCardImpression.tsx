// Module ID: 11872
// Function ID: 92025
// Name: useTrackProductCardImpression
// Dependencies: [31, 6774, 653, 8707, 566, 8708, 3776, 6786, 675, 2]
// Exports: useTrackProductCardImpression

// Module 11872 (useTrackProductCardImpression)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = function useTrackProductCardImpression(categoryStoreListingId, mobile_home, hero_block) {
  let str = hero_block;
  const _require = categoryStoreListingId;
  const importDefault = mobile_home;
  if (hero_block === undefined) {
    str = "product";
  }
  let collectiblesAnalyticsContext;
  let stateFromStores;
  let c5;
  let closure_6;
  let callback;
  collectiblesAnalyticsContext = _require(str[3]).useCollectiblesAnalyticsContext();
  let obj = _require(str[3]);
  const items = [stateFromStores];
  stateFromStores = _require(str[4]).useStateFromStores(items, () => stateFromStores.getProduct(closure_0));
  let obj2 = _require(str[4]);
  const currentUser = _require(str[5]).useCurrentUser();
  const obj3 = _require(str[5]);
  const canUseShopDiscountsResult = importDefault(str[6]).canUseShopDiscounts(currentUser);
  c5 = canUseShopDiscountsResult;
  closure_6 = collectiblesAnalyticsContext.useRef(null);
  let sessionId;
  if (null != collectiblesAnalyticsContext) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  const items1 = [sessionId, , , , , , , , , ];
  let categoryPosition;
  if (null != collectiblesAnalyticsContext) {
    categoryPosition = collectiblesAnalyticsContext.categoryPosition;
  }
  items1[1] = categoryPosition;
  let pageCategory;
  if (null != collectiblesAnalyticsContext) {
    pageCategory = collectiblesAnalyticsContext.pageCategory;
  }
  items1[2] = pageCategory;
  let pageSection;
  if (null != collectiblesAnalyticsContext) {
    pageSection = collectiblesAnalyticsContext.pageSection;
  }
  items1[3] = pageSection;
  let tilePosition;
  if (null != collectiblesAnalyticsContext) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[4] = tilePosition;
  items1[5] = canUseShopDiscountsResult;
  items1[6] = mobile_home;
  items1[7] = stateFromStores;
  items1[8] = categoryStoreListingId;
  items1[9] = str;
  callback = collectiblesAnalyticsContext.useCallback(() => {
    let priceForCollectiblesProduct = null;
    if (null != stateFromStores) {
      let obj = categoryStoreListingId(str[7]);
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(stateFromStores, _undefined, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      strikeThroughPriceAmountForCollectiblesProduct = categoryStoreListingId(str[7]).getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, _undefined, true);
      const obj2 = categoryStoreListingId(str[7]);
    }
    obj = {};
    let sessionId;
    if (null != collectiblesAnalyticsContext) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj.collectibles_shop_session_id = sessionId;
    obj.sku_id = categoryStoreListingId;
    let amount;
    if (null != priceForCollectiblesProduct) {
      amount = priceForCollectiblesProduct.amount;
    }
    obj.display_price = amount;
    str = undefined;
    if (null != priceForCollectiblesProduct) {
      str = priceForCollectiblesProduct.currency;
      str = str.toString();
    }
    obj.display_price_currency = str;
    obj.display_price_strikethrough = strikeThroughPriceAmountForCollectiblesProduct;
    let tilePosition;
    if (null != collectiblesAnalyticsContext) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    obj.position = tilePosition;
    obj.page_type = mobile_home;
    let pageCategory;
    if (null != collectiblesAnalyticsContext) {
      pageCategory = collectiblesAnalyticsContext.pageCategory;
    }
    obj.page_category = pageCategory;
    let pageSection;
    if (null != collectiblesAnalyticsContext) {
      pageSection = collectiblesAnalyticsContext.pageSection;
    }
    obj.page_section = pageSection;
    obj.type = str;
    let categoryPosition;
    if (null != collectiblesAnalyticsContext) {
      categoryPosition = collectiblesAnalyticsContext.categoryPosition;
    }
    obj.category_position = categoryPosition;
    mobile_home(str[8]).track(_undefined.COLLECTIBLES_TILE_IMPRESSION, obj);
  }, items1);
  const items2 = [callback];
  const items3 = [categoryStoreListingId];
  const handleCardVisibilityChange = collectiblesAnalyticsContext.useCallback((arg0) => {
    const current = ref.current;
    if (arg0) {
      if (null === current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          outer1_7();
          outer1_6.current = null;
        }, 1000);
      }
    } else if (null !== current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const effect = collectiblesAnalyticsContext.useEffect(() => () => {
    if (null !== outer1_6.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(outer1_6.current);
      outer1_6.current = null;
    }
  }, items3);
  return { handleCardVisibilityChange };
};
