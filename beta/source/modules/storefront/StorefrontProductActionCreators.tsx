// Module ID: 8861
// Function ID: 8862
// Name: StorefrontProductActionCreators
// Dependencies: [5, 2186, 8862, 7815, 1072, 8864, 572, 6588, 6580, 8865, 2]
// Exports: maybeFetchProductsBySkuIds, maybeFetchProductsWithSkus, shouldFetchProductBySku

// Module 8861 (StorefrontProductActionCreators)
import Constants from "Constants" /* 1072 */;
import StorefrontCacheUtils from "StorefrontCacheUtils" /* 8864 */;
import getStorefrontNativeStoreQuery from "getStorefrontNativeStoreQuery" /* 8865 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8862 */;
import StorefrontProductRecord from "StorefrontProductRecord" /* 7815 */;
import size from "module_2" /* 2 */;

let c5, c6;

let obj = function _maybeFetchProductsWithSkus() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let ignoreCache;
    let obj6;
    let obj8;
    let products;
    let tmp25;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      let body;
      try {
        let length;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            length = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            ignoreCache = undefined;
            ({ productIds: c0, ignoreCache } = closure_0);
            if (ignoreCache === undefined) {
              ignoreCache = false;
            }
            length = undefined;
            body = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "flexDirection", done: null };
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              length = c0.filter((item) => {
                let shouldRefetchEntryResult = Boolean(item);
                if (shouldRefetchEntryResult) {
                  obj = { fetchState: closure_1_5.getFetchState(item), fetchedAt: closure_1_5.getFetchedAt(item), needsPricing: true, hasPricingCoverage: closure_1_5.hasPricingCoverage(item) };
                  const shouldRefetchEntry = closure_1_0(length[5]).shouldRefetchEntry;
                  closure_1_0(length[5]);
                  shouldRefetchEntryResult = shouldRefetchEntry(obj);
                }
                return shouldRefetchEntryResult;
              });
              if (0 !== length.length) {
                c4 = 1;
                const obj7 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH", productIds: length };
                const obj4 = closure_130_1(closure_130_2[6]);
                obj4.dispatch(obj7);
                const request = { url: closure_130_7.STOREFRONT_PRODUCTS_WITH_SKUS, query: obj8, rejectWithError: true };
                obj8 = { product_ids: length, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: ignoreCache };
                c5 = 3;
                c6 = 1;
                const obj9 = { value: obj6.httpGetWithCountryCodeQuery(request), done: false };
                obj6 = closure_130_0(closure_130_2[7]);
                return obj9;
              }
            }
          } else if (2 === tmp4) {
            c4 = 0;
            let closure_4 = body;
            const obj10 = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE", productIds: length, apiError: tmp25 };
            const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
            const self = this;
            const self2 = this;
            const tmp20 = closure_130_1(closure_130_2[6]);
            tmp25 = new closure_130_1(closure_130_2[8])(closure_4);
            dispatch2(obj10);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            body = value;
            obj = { type: "STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS", productIds: length, products: products.map(closure_130_6.fromServer) };
            products = body.body.products;
            const dispatch = closure_130_1(closure_130_2[6]).dispatch;
            const tmp9 = closure_130_1(closure_130_2[6]);
            dispatch(obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp41) {
        body = tmp41;
        if (0 === c4) {
          c6 = 3;
          throw tmp41;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _maybeFetchProductsBySkuIds() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let closure_2;
    let ignoreCache;
    let obj7;
    let products;
    let tmp26;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      let flag = true;
      if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        let pricingKey;
        try {
          let storefrontNativeStoreQuery;
          let length;
          let body;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              storefrontNativeStoreQuery = tmp;
              let closure_1 = tmp4;
              c0 = undefined;
              ignoreCache = undefined;
              ({ skuIds: c0, ignoreCache } = closure_0);
              if (ignoreCache === undefined) {
                ignoreCache = false;
              }
              storefrontNativeStoreQuery = undefined;
              pricingKey = undefined;
              length = undefined;
              body = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "flexDirection", done: null };
            }
          } else {
            if (1 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                const obj12 = closure_130_0(closure_130_2[9]);
                storefrontNativeStoreQuery = obj12.getStorefrontNativeStoreQuery();
                const obj13 = closure_130_0(closure_130_2[9]);
                pricingKey = obj13.getStorefrontPricingKey(storefrontNativeStoreQuery);
                length = c0.filter((item) => {
                  let storefrontPricingKey = pricingKey;
                  if (pricingKey === undefined) {
                    obj = closure_0(closure_2[9]);
                    storefrontPricingKey = obj.getStorefrontPricingKey();
                  }
                  let flag = false;
                  if (Boolean(item)) {
                    fetchStateForSku = fetchStateForSku.getFetchStateForSku(item);
                    flag = false;
                    if ("loading" !== fetchStateForSku) {
                      if ("success" !== fetchStateForSku) {
                        const fetchedAtForSku = obj2.getFetchedAtForSku(item);
                        flag = true;
                        if (null != fetchedAtForSku) {
                          let TWELVE_HOURS_MS;
                          if ("error" === fetchStateForSku) {
                            TWELVE_HOURS_MS = closure_0(closure_2[5]).ERROR_STALE_THRESHOLD_MS;
                          } else {
                            TWELVE_HOURS_MS = closure_0(closure_2[5]).TWELVE_HOURS_MS;
                          }
                          const _Date = Date;
                          flag = Date.now() - fetchedAtForSku > TWELVE_HOURS_MS;
                        }
                      } else {
                        flag = true;
                      }
                    }
                  }
                  return flag;
                });
                if (0 !== length.length) {
                  c4 = 1;
                  const obj6 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH", skuIds: length };
                  const obj4 = closure_130_1(closure_130_2[6]);
                  obj4.dispatch(obj6);
                  const request = { url: closure_130_7.STOREFRONT_PRODUCTS_BY_SKU_IDS, query: obj7, rejectWithError: true };
                  obj7 = { sku_ids: length, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, ignore_cache: ignoreCache };
                  const httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[7]).httpGetWithCountryCodeQuery;
                  const tmp37 = closure_130_0(closure_130_2[7]);
                  const merged = Object.assign(storefrontNativeStoreQuery);
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: httpGetWithCountryCodeQuery(request), done: false };
                  return obj8;
                }
              }
            } else if (2 === c5) {
              c4 = 0;
              let closure_6 = pricingKey;
              const obj9 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE", skuIds: length, apiError: tmp26 };
              const dispatch2 = closure_130_1(closure_130_2[6]).dispatch;
              const self = this;
              const self2 = this;
              const tmp21 = closure_130_1(closure_130_2[6]);
              tmp26 = new closure_130_1(closure_130_2[8])(closure_6);
              dispatch2(obj9);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              body = value;
              const tmp9 = closure_130_1(closure_130_2[6]);
              obj = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: length, products: products.map(closure_130_6.fromServer), pricingKey };
              products = body.body.products;
              const dispatch = tmp9.dispatch;
              dispatch(obj);
              c4 = 0;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp46) {
          pricingKey = tmp46;
          if (0 === c4) {
            c6 = 3;
            throw tmp46;
          } else {
            c5 = 2;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductActionCreators.tsx");

export function maybeFetchProductsWithSkus() {
  return obj(...arguments);
}
export function shouldFetchProductBySku(item10006) {
  let storefrontPricingKey = arg1;
  if (arg1 === undefined) {
    obj = getStorefrontNativeStoreQuery;
    storefrontPricingKey = obj.getStorefrontPricingKey();
  }
  if (Boolean(item10006)) {
    const fetchStateForSku = StorefrontProductStore.getFetchStateForSku(item10006);
    if ("loading" === fetchStateForSku) {
      return false;
    } else {
      if ("success" === fetchStateForSku) {
        if (StorefrontProductStore.getPricingKeyForSku(item10006) !== storefrontPricingKey) {
          return true;
        }
      }
      const fetchedAtForSku = obj2.getFetchedAtForSku(item10006);
      if (null != fetchedAtForSku) {
        let TWELVE_HOURS_MS;
        if ("error" === fetchStateForSku) {
          TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
        } else {
          TWELVE_HOURS_MS = StorefrontCacheUtils.TWELVE_HOURS_MS;
        }
        const _Date = Date;
        return Date.now() - fetchedAtForSku > TWELVE_HOURS_MS;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
export function maybeFetchProductsBySkuIds() {
  return obj(...arguments);
}
