// Module ID: 8658
// Function ID: 68534
// Name: trackOnConsecutiveVisibility
// Dependencies: []
// Exports: useTrackShopCardImpression

// Module 8658 (trackOnConsecutiveVisibility)
function trackOnConsecutiveVisibility(current, current2, current3) {
  if (current) {
    if (tmp) {
      arg3();
      current3.current = true;
    }
    const tmp = current2.current && !current3.current;
  } else {
    current3.current = false;
  }
  current2.current = current;
}
function isVisibleAtThreshold(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  const bound = Math.min(arg1 + arg3, arg5);
  const bound1 = Math.max(0, bound - Math.max(arg1, 0));
  const bound2 = Math.min(arg0 + arg2, arg4);
  const result = bound1 * Math.max(0, bound2 - Math.max(arg0, 0));
  const result1 = arg2 * arg3;
  let tmp6 = result1 > 0 && result > 0;
  if (tmp6) {
    tmp6 = result / result1 >= arg6;
  }
  return tmp6;
}
let closure_3 = importAll(dependencyMap[0]);
const AnalyticEvents = arg1(dependencyMap[1]).AnalyticEvents;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = function useTrackShopCardImpression(product, selectedProduct, flag2) {
  selectedProduct = product;
  const importDefault = selectedProduct;
  const dependencyMap = flag2;
  const collectiblesAnalyticsContext = selectedProduct(dependencyMap[2]).useCollectiblesAnalyticsContext();
  const React = collectiblesAnalyticsContext;
  const analyticsLocations = importDefault(dependencyMap[3])().analyticsLocations;
  const AnalyticEvents = analyticsLocations;
  const size = importDefault(dependencyMap[4])();
  const width = size.width;
  const trackOnConsecutiveVisibility = width;
  const height = size.height;
  const isVisibleAtThreshold = height;
  const obj = selectedProduct(dependencyMap[2]);
  const currentUser = selectedProduct(dependencyMap[5]).useCurrentUser();
  const obj2 = selectedProduct(dependencyMap[5]);
  const canUseCollectiblesResult = importDefault(dependencyMap[6]).canUseCollectibles(currentUser);
  const obj3 = importDefault(dependencyMap[6]);
  const shopDiscountSource = selectedProduct(dependencyMap[7]).getShopDiscountSource(currentUser);
  const ref = React.useRef(null);
  let closure_10 = React.useRef(null);
  let closure_11 = React.useRef({ windowWidth: width, windowHeight: height });
  let closure_12 = React.useRef(false);
  let closure_13 = React.useRef(false);
  let closure_14 = React.useRef(false);
  let closure_15 = React.useRef(false);
  const items = [width, height];
  const effect = React.useEffect(() => {
    closure_11.current = { windowWidth: width, windowHeight: height };
  }, items);
  const items1 = [canUseCollectiblesResult, , , , , , ];
  let sessionId;
  if (null != collectiblesAnalyticsContext) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  items1[1] = sessionId;
  let tilePosition;
  if (null != collectiblesAnalyticsContext) {
    tilePosition = collectiblesAnalyticsContext.tilePosition;
  }
  items1[2] = tilePosition;
  let pageCategory;
  if (null != collectiblesAnalyticsContext) {
    pageCategory = collectiblesAnalyticsContext.pageCategory;
  }
  items1[3] = pageCategory;
  let pageSection;
  if (null != collectiblesAnalyticsContext) {
    pageSection = collectiblesAnalyticsContext.pageSection;
  }
  items1[4] = pageSection;
  let categoryPosition;
  if (null != collectiblesAnalyticsContext) {
    categoryPosition = collectiblesAnalyticsContext.categoryPosition;
  }
  items1[5] = categoryPosition;
  items1[6] = product;
  const callback = React.useCallback(() => {
    let priceForCollectiblesProduct = null;
    if (null != arg0) {
      let obj = arg0(arg2[7]);
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(arg0, canUseCollectiblesResult, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != arg0) {
      strikeThroughPriceAmountForCollectiblesProduct = arg0(arg2[7]).getStrikeThroughPriceAmountForCollectiblesProduct(arg0, canUseCollectiblesResult, true);
      const obj2 = arg0(arg2[7]);
    }
    obj = {};
    let sessionId;
    if (null != collectiblesAnalyticsContext) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj.collectibles_shop_session_id = sessionId;
    obj.sku_id = arg0.skuId;
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
    let categoryPosition;
    if (null != collectiblesAnalyticsContext) {
      categoryPosition = collectiblesAnalyticsContext.categoryPosition;
    }
    obj.category_position = categoryPosition;
    obj.type = "product";
    arg1(arg2[8]).track(analyticsLocations.COLLECTIBLES_TILE_IMPRESSION, obj);
  }, items1);
  const items2 = [product, selectedProduct, , , , , ];
  let cardId;
  if (null != collectiblesAnalyticsContext) {
    cardId = collectiblesAnalyticsContext.cardId;
  }
  items2[2] = cardId;
  let sessionId1;
  if (null != collectiblesAnalyticsContext) {
    sessionId1 = collectiblesAnalyticsContext.sessionId;
  }
  items2[3] = sessionId1;
  let tilePosition1;
  if (null != collectiblesAnalyticsContext) {
    tilePosition1 = collectiblesAnalyticsContext.tilePosition;
  }
  items2[4] = tilePosition1;
  items2[5] = analyticsLocations;
  items2[6] = shopDiscountSource;
  const callback1 = React.useCallback(() => {
    let obj = arg0(arg2[9]);
    obj = { name: arg0(arg2[10]).ImpressionNames.SHOP_CARD, type: arg0(arg2[10]).ImpressionTypes.VIEW };
    obj = { sku_id: arg1.skuId };
    let cardId;
    if (null != collectiblesAnalyticsContext) {
      cardId = collectiblesAnalyticsContext.cardId;
    }
    obj.card_id = cardId;
    let sessionId;
    if (null != collectiblesAnalyticsContext) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj.shop_session_id = sessionId;
    let tilePosition;
    if (null != collectiblesAnalyticsContext) {
      tilePosition = collectiblesAnalyticsContext.tilePosition;
    }
    obj.position_in_section = tilePosition;
    obj.product_sku_ids = arg0(arg2[11]).getProductSkuIds(arg0);
    obj.location_stack = analyticsLocations;
    const obj4 = arg0(arg2[11]);
    obj.discount_source = arg0(arg2[7]).getAnalyticsShopDiscountSource(shopDiscountSource);
    obj.properties = obj;
    obj.trackImpression(obj, false, true);
  }, items2);
  const items3 = [flag2, callback, callback1];
  const effect1 = React.useEffect(() => {
    if (arg2) {
      const _setInterval = setInterval;
      closure_10.current = setInterval(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let windowHeight;
            let windowWidth;
            ({ windowWidth, windowHeight } = ref.current);
            const tmp = callback2(arg4, arg5, arg2, arg3, windowWidth, windowHeight, 0);
            callback(tmp, closure_12, closure_13, closure_16);
            callback(callback2(arg4, arg5, arg2, arg3, windowWidth, windowHeight, 0.5), closure_14, closure_15, closure_17);
          });
        }
      }, 1000);
      return () => {
        if (null !== ref2.current) {
          const _clearInterval = clearInterval;
          clearInterval(ref2.current);
          ref2.current = null;
        }
        closure_12.current = false;
        closure_13.current = false;
        closure_14.current = false;
        closure_15.current = false;
      };
    }
  }, items3);
  return ref;
};
