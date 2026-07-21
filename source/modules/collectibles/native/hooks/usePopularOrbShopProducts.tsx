// Module ID: 13846
// Function ID: 104683
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: usePopularOrbShopProducts

// Module 13846 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  arr = product;
  let obj = arr(dependencyMap[9]);
  obj = { product, hasShopDiscount };
  if (null != obj.getProductOrbPrice(obj)) {
    return product;
  } else {
    const tmp14 = function getStorefrontPricesForSkuId(skuId, arr) {
      let found;
      if (null == arr) {
        return null;
      } else {
        const tmp3 = callback(arr);
        const iter3 = tmp3();
        let iter2 = iter3;
        if (!iter3.done) {
          while (true) {
            let skus = iter2.value.skus;
            found = skus.find((id) => id.id === id);
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
    }(product.skuId, arr);
    if (null == tmp14) {
      return product;
    } else {
      let found;
      if (null != arr) {
        found = arr.flatMap((skus) => skus.skus).find((id) => id.id === id.skuId);
        const flatMapResult = arr.flatMap((skus) => skus.skus);
      }
      let tmp2 = closure_9;
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = arg1(dependencyMap[7]).CollectiblesMobileShopScreen;
let closure_11 = 10 * importDefault(dependencyMap[8]).Millis.SECOND;
let closure_12 = 10 * importDefault(dependencyMap[8]).Millis.SECOND;
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/collectibles/native/hooks/usePopularOrbShopProducts.tsx");

export const MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL = 3;
export const usePopularOrbShopProducts = function usePopularOrbShopProducts(enabled) {
  enabled = enabled.enabled;
  const arg1 = enabled;
  const variation = enabled.variation;
  let obj = React;
  const tmp = callback(React.useState([]), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const tmp2 = callback(React.useState(false), 2);
  const first1 = tmp2[0];
  let closure_3 = first1;
  const callback = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  const React = tmp4[1];
  const items = [closure_7];
  const stateFromStores = arg1(closure_2[10]).useStateFromStores(items, () => POPULARITY.getCurrentUser());
  const obj2 = arg1(closure_2[10]);
  const tmp8 = importDefault;
  const canUseShopDiscountsResult = importDefault(closure_2[11]).canUseShopDiscounts(stateFromStores);
  let closure_6 = canUseShopDiscountsResult;
  if (arg1(closure_2[12]).BountiesShopCarouselExperimentVariation.POPULARITY === variation) {
    let POPULARITY = arg1(closure_2[13]).CollectibleSearchSortType.POPULARITY;
  } else if (arg1(closure_2[12]).BountiesShopCarouselExperimentVariation.RECENCY === variation) {
    POPULARITY = arg1(closure_2[13]).CollectibleSearchSortType.RECENCY;
  } else {
    const BASE = arg1(closure_2[12]).BountiesShopCarouselExperimentVariation.BASE;
    POPULARITY = arg1(closure_2[13]).CollectibleSearchSortType.POPULARITY;
  }
  closure_7 = POPULARITY;
  const items1 = [enabled, POPULARITY];
  const effect = obj.useEffect(() => {
    function _fetchSearchResults() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    if (closure_0) {
      closure_0 = false;
      callback2(false);
      function fetchSearchResults() {
        return _fetchSearchResults(...arguments);
      }();
      return () => {
        let closure_0 = true;
      };
    } else {
      callback([]);
      callback2(false);
    }
  }, items1);
  const items2 = [enabled, first1, first];
  const effect1 = obj.useEffect(() => {
    if (timeout) {
      if (first1) {
        callback3(false);
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => callback(true), filteredAndSortedProducts);
        return () => clearTimeout(closure_0);
      }
    }
    callback3(false);
  }, items2);
  let tmp5Result = tmp5(tmp6[17]);
  let fetchCollectiblesProducts = tmp5Result.useFetchCollectiblesProducts(first);
  const items3 = [first];
  const effect2 = obj.useEffect(() => {
    if (0 !== first.length) {
      let obj = enabled(closure_2[18]);
      obj = { skuIds: first };
      const result = obj.maybeFetchProductsBySkuIds(obj);
    }
  }, items3);
  tmp5Result = tmp5(tmp6[19]);
  const getOrFetchStorefrontPricesForSkuIds = tmp5Result.useGetOrFetchStorefrontPricesForSkuIds({ skuIds: first });
  const obj3 = importDefault(closure_2[11]);
  const items4 = [closure_6];
  const stateFromStoresArray = arg1(closure_2[10]).useStateFromStoresArray(items4, () => first.map((arg0) => productsForSku.getProductsForSku(arg0)));
  let closure_8 = stateFromStoresArray;
  const tmp5Result1 = arg1(closure_2[10]);
  const items5 = [closure_6];
  const stateFromStoresArray1 = arg1(closure_2[10]).useStateFromStoresArray(items5, () => first.map((arg0) => fetchStateForSku.getFetchStateForSku(arg0)));
  let closure_9 = stateFromStoresArray1;
  const tmp23 = tmp8(closure_2[20])();
  const constants = tmp23;
  const items6 = [tmp23, first, stateFromStoresArray, canUseShopDiscountsResult];
  const memo = obj.useMemo(() => tmp23(first).map((arg0, arg1) => callback(arg0, closure_8[arg1], closure_6)), items6);
  let closure_11 = memo;
  const items7 = [first, stateFromStoresArray1, canUseShopDiscountsResult];
  const items8 = [memo, canUseShopDiscountsResult];
  const memo1 = obj.useMemo(() => {
    let someResult = 0 !== first.length;
    if (someResult) {
      someResult = first.some((arg0, arg1) => {
        const product = product.getProduct(arg0);
        if (null != product) {
          let obj = callback(closure_2[9]);
          obj = { product, hasShopDiscount: closure_6 };
          if (null != obj.getProductOrbPrice(obj)) {
            return false;
          }
        }
        return "loading" === closure_9[arg1] || null == closure_9[arg1];
      });
    }
    return someResult;
  }, items7);
  const memo2 = obj.useMemo(() => memo.filter((product) => {
    let obj = callback(closure_2[9]);
    obj = { product, hasShopDiscount: closure_6 };
    return null != obj.getProductOrbPrice(obj);
  }), items8);
  const tmp5Result2 = arg1(closure_2[10]);
  obj = { products: memo2, screen: constants.ORBS };
  const filteredAndSortedProducts = arg1(closure_2[21]).useFilteredAndSortedProducts(obj);
  let closure_12 = filteredAndSortedProducts;
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
