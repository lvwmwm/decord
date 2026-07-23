// Module ID: 8665
// Function ID: 68574
// Name: trackOnConsecutiveVisibility
// Dependencies: [31, 653, 8666, 5464, 1450, 8667, 3776, 6786, 675, 8559, 480, 6785, 2]
// Exports: useTrackShopCardImpression

// Module 8665 (trackOnConsecutiveVisibility)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
function trackOnConsecutiveVisibility(current, current2, current3) {
  if (current) {
    if (tmp) {
      arg3();
      current3.current = true;
    }
    tmp = current2.current && !current3.current;
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
let result = require("useCollectiblesAnalyticsContext").fileFinishedImporting("modules/collectibles/native/hooks/useTrackShopCardImpression.tsx");

export const useTrackShopCardImpression = function useTrackShopCardImpression(product, selectedProduct, flag2) {
  const _require = product;
  const importDefault = selectedProduct;
  const dependencyMap = flag2;
  const collectiblesAnalyticsContext = _require(8666).useCollectiblesAnalyticsContext();
  const analyticsLocations = importDefault(5464)().analyticsLocations;
  const size = importDefault(1450)();
  const width = size.width;
  const height = size.height;
  let obj = _require(8666);
  const currentUser = _require(8667).useCurrentUser();
  let obj2 = _require(8667);
  const canUseCollectiblesResult = importDefault(3776).canUseCollectibles(currentUser);
  const obj3 = importDefault(3776);
  const shopDiscountSource = _require(6786).getShopDiscountSource(currentUser);
  const ref = collectiblesAnalyticsContext.useRef(null);
  let closure_10 = collectiblesAnalyticsContext.useRef(null);
  let closure_11 = collectiblesAnalyticsContext.useRef({ windowWidth: width, windowHeight: height });
  let closure_12 = collectiblesAnalyticsContext.useRef(false);
  let closure_13 = collectiblesAnalyticsContext.useRef(false);
  let closure_14 = collectiblesAnalyticsContext.useRef(false);
  let closure_15 = collectiblesAnalyticsContext.useRef(false);
  const items = [width, height];
  const effect = collectiblesAnalyticsContext.useEffect(() => {
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
  const callback = collectiblesAnalyticsContext.useCallback(() => {
    let priceForCollectiblesProduct = null;
    if (null != product) {
      let obj = product(6786);
      priceForCollectiblesProduct = obj.getPriceForCollectiblesProduct(product, closure_7, true);
    }
    let strikeThroughPriceAmountForCollectiblesProduct;
    if (null != product) {
      strikeThroughPriceAmountForCollectiblesProduct = product(6786).getStrikeThroughPriceAmountForCollectiblesProduct(product, closure_7, true);
      const obj2 = product(6786);
    }
    obj = {};
    let sessionId;
    if (null != collectiblesAnalyticsContext) {
      sessionId = collectiblesAnalyticsContext.sessionId;
    }
    obj.collectibles_shop_session_id = sessionId;
    obj.sku_id = product.skuId;
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
    selectedProduct(675).track(analyticsLocations.COLLECTIBLES_TILE_IMPRESSION, obj);
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
  const callback1 = collectiblesAnalyticsContext.useCallback(() => {
    let obj = product(8559);
    obj = { name: product(480).ImpressionNames.SHOP_CARD, type: product(480).ImpressionTypes.VIEW };
    obj = { sku_id: selectedProduct.skuId };
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
    obj.product_sku_ids = product(6785).getProductSkuIds(product);
    obj.location_stack = analyticsLocations;
    const obj4 = product(6785);
    obj.discount_source = product(6786).getAnalyticsShopDiscountSource(shopDiscountSource);
    obj.properties = obj;
    obj.trackImpression(obj, false, true);
  }, items2);
  const items3 = [flag2, callback, callback1];
  const effect1 = collectiblesAnalyticsContext.useEffect(() => {
    if (closure_2) {
      const _setInterval = setInterval;
      closure_10.current = setInterval(() => {
        if (null != outer1_9.current) {
          const current = outer1_9.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let windowHeight;
            let windowWidth;
            ({ windowWidth, windowHeight } = outer2_11.current);
            const tmp = height(arg4, arg5, arg2, arg3, windowWidth, windowHeight, 0);
            width(tmp, outer2_12, outer2_13, outer2_16);
            width(height(arg4, arg5, arg2, arg3, windowWidth, windowHeight, 0.5), outer2_14, outer2_15, outer2_17);
          });
        }
      }, 1000);
      return () => {
        if (null !== outer1_10.current) {
          const _clearInterval = clearInterval;
          clearInterval(outer1_10.current);
          outer1_10.current = null;
        }
        outer1_12.current = false;
        outer1_13.current = false;
        outer1_14.current = false;
        outer1_15.current = false;
      };
    }
  }, items3);
  return ref;
};
