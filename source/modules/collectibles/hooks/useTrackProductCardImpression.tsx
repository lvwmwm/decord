// Module ID: 11834
// Function ID: 91724
// Name: useTrackProductCardImpression
// Dependencies: []
// Exports: useTrackProductCardImpression

// Module 11834 (useTrackProductCardImpression)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/collectibles/hooks/useTrackProductCardImpression.tsx");

export const useTrackProductCardImpression = function useTrackProductCardImpression(categoryStoreListingId, mobile_home, hero_block) {
  let str = hero_block;
  mobile_home = categoryStoreListingId;
  const importDefault = mobile_home;
  if (hero_block === undefined) {
    str = "product";
  }
  const dependencyMap = str;
  let React;
  let closure_4;
  let AnalyticEvents;
  let closure_6;
  let callback;
  const collectiblesAnalyticsContext = mobile_home(dependencyMap[3]).useCollectiblesAnalyticsContext();
  React = collectiblesAnalyticsContext;
  const obj = mobile_home(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = mobile_home(dependencyMap[4]).useStateFromStores(items, () => stateFromStores.getProduct(arg0));
  closure_4 = stateFromStores;
  const obj2 = mobile_home(dependencyMap[4]);
  const currentUser = mobile_home(dependencyMap[5]).useCurrentUser();
  const obj3 = mobile_home(dependencyMap[5]);
  const canUseShopDiscountsResult = importDefault(dependencyMap[6]).canUseShopDiscounts(currentUser);
  AnalyticEvents = canUseShopDiscountsResult;
  closure_6 = React.useRef(null);
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
  callback = React.useCallback(() => {
    let priceForCollectiblesProduct = null;
    if (null != stateFromStores) {
      let obj = arg0(str[7]);
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(stateFromStores, canUseShopDiscountsResult, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != stateFromStores) {
      strikeThroughPriceAmountForCollectiblesProduct = arg0(str[7]).getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, canUseShopDiscountsResult, true);
      const obj2 = arg0(str[7]);
    }
    obj = {};
    let sessionId;
    if (null != collectiblesAnalyticsContext) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj.collectibles_shop_session_id = sessionId;
    obj.sku_id = arg0;
    let amount;
    if (null != priceForCollectiblesProduct) {
      amount = priceForCollectiblesProduct.amount;
    }
    obj.display_price = amount;
    let str;
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
    obj.page_type = arg1;
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
    arg1(str[8]).track(canUseShopDiscountsResult.COLLECTIBLES_TILE_IMPRESSION, obj);
  }, items1);
  const items2 = [callback];
  const items3 = [categoryStoreListingId];
  const handleCardVisibilityChange = React.useCallback((arg0) => {
    const current = ref.current;
    if (arg0) {
      if (null === current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          callback();
          closure_6.current = null;
        }, 1000);
      }
    } else if (null !== current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items2);
  const effect = React.useEffect(() => () => {
    if (null !== ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, items3);
  return { handleCardVisibilityChange };
};
