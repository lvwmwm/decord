// Module ID: 14017
// Function ID: 107202
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 14018, 1849, 6774, 6776, 655, 664, 6785, 566, 3776, 14019, 658, 14020, 14021, 659, 11877, 14022, 8725, 14023, 14025, 2]
// Exports: usePopularOrbShopProducts

// Module 14017 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import { CollectiblesMobileShopScreen as closure_10 } from "items";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function withStorefrontPrices(product, arr, hasShopDiscount) {
  const _require = product;
  let obj = _require(6785);
  obj = { product, hasShopDiscount };
  if (null != obj.getProductOrbPrice(obj)) {
    return product;
  } else {
    const tmp14 = (function getStorefrontPricesForSkuId(skuId, arr) {
      let found;
      let closure_0 = skuId;
      if (null == arr) {
        return null;
      } else {
        const tmp3 = outer1_13(arr);
        const iter3 = tmp3();
        let iter2 = iter3;
        if (!iter3.done) {
          while (true) {
            let skus = iter2.value.skus;
            found = skus.find((id) => id.id === closure_0);
            if (null != found) {
              let _Object = Object;
              if (Object.keys(found.prices).length > 0) {
                break;
              }
            }
            let iter = tmp3();
            iter2 = iter;
          }
          return found.prices;
        }
        return null;
      }
    })(product.skuId, arr);
    if (null == tmp14) {
      return product;
    } else {
      let found;
      if (null != arr) {
        found = arr.flatMap((skus) => skus.skus).find((id) => id.id === product.skuId);
        const flatMapResult = arr.flatMap((skus) => skus.skus);
      }
      let tmp2 = _callSuper;
      obj = {};
      ({ storeListingId: obj3.storeListingId, skuId: obj3.skuId, name: obj3.name, summary: obj3.summary, styles: obj3.styles, type: obj3.type, premiumType: obj3.premiumType, items: obj3.items, categorySkuId: obj3.categorySkuId, isCategoryReward: obj3.isCategoryReward } = product);
      const obj1 = {};
      const merged = Object.assign(product.prices);
      const merged1 = Object.assign(tmp14);
      obj.prices = obj1;
      ({ bundledProducts: obj3.bundledProducts, previewAssets: obj3.previewAssets } = product);
      let googleSkuIds;
      if (null != found) {
        googleSkuIds = found.googleSkuIds;
      }
      if (null == googleSkuIds) {
        googleSkuIds = product.googleSkuIds;
      }
      obj.googleSkuIds = googleSkuIds;
      ({ variants: obj3.variants, eligibleOffers: obj3.eligibleOffers, badgeOverride: obj3.badgeOverride, hideBadge: obj3.hideBadge } = product);
      const prototype = tmp2.prototype;
      tmp2 = new tmp2(obj);
      return tmp2;
    }
  }
}
let closure_11 = 10 * require("set").Millis.SECOND;
let closure_12 = 10 * require("set").Millis.SECOND;
let result = require("result").fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  enabled = enabled.enabled;
  const variation = enabled.variation;
  let obj = React;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const tmp2 = callback(React.useState(false), 2);
  const first1 = tmp2[0];
  callback = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  React = tmp4[1];
  const items = [POPULARITY];
  const stateFromStores = enabled(566).useStateFromStores(items, () => POPULARITY.getCurrentUser());
  const obj2 = enabled(566);
  const tmp8 = first;
  const canUseShopDiscountsResult = first(3776).canUseShopDiscounts(stateFromStores);
  if (enabled(14019).BountiesShopCarouselExperimentVariation.POPULARITY === variation) {
    POPULARITY = enabled(658).CollectibleSearchSortType.POPULARITY;
  } else if (enabled(14019).BountiesShopCarouselExperimentVariation.RECENCY === variation) {
    POPULARITY = enabled(658).CollectibleSearchSortType.RECENCY;
  } else {
    const BASE = enabled(14019).BountiesShopCarouselExperimentVariation.BASE;
    POPULARITY = enabled(658).CollectibleSearchSortType.POPULARITY;
  }
  const items1 = [enabled, POPULARITY];
  const effect = obj.useEffect(() => {
    function _fetchSearchResults() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = first1(tmp);
      return obj(...arguments);
    }
    if (c0) {
      c0 = false;
      callback(false);
      (function fetchSearchResults() {
        return _fetchSearchResults(...arguments);
      })();
      return () => {
        let c0 = true;
      };
    } else {
      dependencyMap([]);
      callback(false);
    }
  }, items1);
  const items2 = [enabled, first1, first];
  const effect1 = obj.useEffect(() => {
    if (timeout) {
      if (first1) {
        callback2(false);
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => outer1_5(true), filteredAndSortedProducts);
        return () => clearTimeout(closure_0);
      }
    }
    callback2(false);
  }, items2);
  let tmp5Result = tmp5(11877);
  let fetchCollectiblesProducts = tmp5Result.useFetchCollectiblesProducts(first);
  const items3 = [first];
  const effect2 = obj.useEffect(() => {
    if (0 !== first.length) {
      let obj = enabled(14022);
      obj = { skuIds: first };
      const result = obj.maybeFetchProductsBySkuIds(obj);
    }
  }, items3);
  tmp5Result = tmp5(8725);
  const getOrFetchStorefrontPricesForSkuIds = tmp5Result.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: first });
  const obj3 = first(3776);
  const items4 = [canUseShopDiscountsResult];
  const stateFromStoresArray = enabled(566).useStateFromStoresArray(items4, () => first.map((arg0) => canUseShopDiscountsResult.getProductsForSku(arg0)));
  const tmp5Result1 = enabled(566);
  const items5 = [canUseShopDiscountsResult];
  const stateFromStoresArray1 = enabled(566).useStateFromStoresArray(items5, () => first.map((arg0) => canUseShopDiscountsResult.getFetchStateForSku(arg0)));
  const tmp23 = tmp8(14023)();
  const constants = tmp23;
  const items6 = [tmp23, first, stateFromStoresArray, canUseShopDiscountsResult];
  const memo = obj.useMemo(() => tmp23(first).map((arg0, arg1) => outer2_15(arg0, outer1_8[arg1], outer1_6)), items6);
  const items7 = [first, stateFromStoresArray1, canUseShopDiscountsResult];
  const items8 = [memo, canUseShopDiscountsResult];
  const memo1 = obj.useMemo(() => {
    let someResult = 0 !== first.length;
    if (someResult) {
      someResult = first.some((arg0, arg1) => {
        const product = stateFromStoresArray.getProduct(arg0);
        if (null != product) {
          let obj = enabled(table[9]);
          obj = { product, hasShopDiscount: outer1_6 };
          if (null != obj.getProductOrbPrice(obj)) {
            return false;
          }
        }
        return "loading" === outer1_9[arg1] || null == outer1_9[arg1];
      });
    }
    return someResult;
  }, items7);
  const memo2 = obj.useMemo(() => memo.filter((product) => {
    let obj = enabled(table[9]);
    obj = { product, hasShopDiscount: outer1_6 };
    return null != obj.getProductOrbPrice(obj);
  }), items8);
  const tmp5Result2 = enabled(566);
  obj = { products: memo2, screen: constants.ORBS };
  const filteredAndSortedProducts = enabled(14025).useFilteredAndSortedProducts(obj);
  const items9 = [filteredAndSortedProducts];
  const memo3 = obj.useMemo(() => filteredAndSortedProducts.slice(0, 10), items9);
  if (!fetchCollectiblesProducts) {
    fetchCollectiblesProducts = memo1;
  }
  let tmp28 = first1;
  if (first1) {
    tmp28 = first.length >= 3;
  }
  obj = { products: memo3 };
  let tmp30 = enabled;
  if (enabled) {
    tmp30 = !first1;
  }
  obj.isSearchingSkuIds = tmp30;
  obj.isLoadingProducts = fetchCollectiblesProducts;
  if (enabled) {
    enabled = tmp28;
  }
  if (enabled) {
    enabled = !tmp29;
  }
  if (enabled) {
    enabled = fetchCollectiblesProducts;
  }
  if (enabled) {
    enabled = !tmp4[0];
  }
  obj.showPlaceholderCarousel = enabled;
  return obj;
};
