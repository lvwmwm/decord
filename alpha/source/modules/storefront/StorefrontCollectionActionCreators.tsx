// Module ID: 10390
// Function ID: 10391
// Name: StorefrontCollectionActionCreators
// Dependencies: [5, 2186, 9383, 8436, 1072, 8516, 8515, 572, 6703, 6695, 2]
// Exports: maybeFetchCollectionsAfter, maybeFetchCollectionsForApplication, maybeFetchCollectionsForApplicationPage, maybeFetchCollectionsWithProducts

// Module 10390 (StorefrontCollectionActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import StoreUtils from "StoreUtils" /* 6703 */;
import StorefrontCacheUtils from "StorefrontCacheUtils" /* 8515 */;
import getStorefrontNativeStoreQuery from "getStorefrontNativeStoreQuery" /* 8516 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 9383 */;
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 8436 */;
import size from "module_2" /* 2 */;

let collectionsAfterFetchState, fetchState, requestKey;

let obj = function _maybeFetchCollectionsWithProducts() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let closure_2;
    let collections;
    let flag;
    let flag2;
    let flag3;
    let includeUnpublishedProducts;
    let length;
    let obj8;
    let pricingKey;
    let tmp16;
    let tmp4;
    let closure_0 = arg0;
    let closure_1 = value;
    if (1 === tmp4) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const obj13 = closure_131_0(closure_131_2[5]);
        const storefrontNativeStoreQuery = obj13.getStorefrontNativeStoreQuery();
        const obj14 = closure_131_0(closure_131_2[5]);
        pricingKey = obj14.getStorefrontPricingKey(storefrontNativeStoreQuery);
        length = c0.filter((item) => {
          if (Boolean(item)) {
            fetchState = fetchState.getFetchState(item);
            let tmp3 = !closure_1_5;
            if (closure_1_5) {
              tmp3 = "error" !== fetchState;
            }
            let tmp4 = !tmp3;
            if (tmp3) {
              let tmp6 = !needsPricing;
              if (needsPricing) {
                tmp6 = "success" !== fetchState;
              }
              if (!tmp6) {
                tmp6 = !obj.hasPricingCoverage(item);
              }
              if (!tmp6) {
                tmp6 = obj.getPricingKey(item) === pricingKey;
              }
              let shouldRefetchEntryResult = !tmp6;
              if (tmp6) {
                const obj2 = { fetchState, fetchedAt: fetchState.getFetchedAt(item), needsPricing, hasPricingCoverage: fetchState.hasPricingCoverage(item) };
                const shouldRefetchEntry = closure_0(closure_2[6]).shouldRefetchEntry;
                closure_0(closure_2[6]);
                shouldRefetchEntryResult = shouldRefetchEntry(obj2);
              }
              tmp4 = shouldRefetchEntryResult;
            }
            return tmp4;
          } else {
            return false;
          }
        });
        if (0 !== length.length) {
          let c5 = 1;
          const obj7 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH", collectionIds: length, includePricing: flag3 };
          const obj3 = closure_131_1(closure_131_2[7]);
          obj3.dispatch(obj7);
          const request = { url: closure_131_7.STOREFRONT_COLLECTIONS_WITH_PRODUCTS, query: obj8, rejectWithError: true };
          obj8 = { collection_ids: length, locale: closure_131_4.locale, with_bundled_skus: true, include_pricing: flag3, include_google_sku_ids: true, include_unpublished_products: includeUnpublishedProducts, include_unpublished_collections: flag, ignore_cache: flag2 };
          const httpGetWithCountryCodeQuery = closure_131_0(closure_131_2[8]).httpGetWithCountryCodeQuery;
          const tmp28 = closure_131_0(closure_131_2[8]);
          const merged = Object.assign(storefrontNativeStoreQuery);
          let c6 = 3;
          c7 = 1;
          const obj9 = { value: httpGetWithCountryCodeQuery(request), done: false };
          return obj9;
        }
      }
    } else if (2 === tmp4) {
      let tmp6 = closure_3;
      c5 = 0;
      let closure_10 = closure_4;
      const tmp11 = closure_131_1(closure_131_2[7]);
      const obj10 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE", collectionIds: length, apiError: tmp16 };
      const dispatch = tmp11.dispatch;
      const self = this;
      const self2 = this;
      tmp16 = new closure_131_1(closure_131_2[9])(closure_10);
      dispatch(obj10);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      const body = value;
      const obj11 = { type: "STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS", collectionIds: length, collections: collections.map(closure_131_6.fromServer), includePricing: flag3, pricingKey };
      collections = body.body.collections;
      const dispatch2 = closure_131_1(closure_131_2[7]).dispatch;
      const tmp49 = closure_131_1(closure_131_2[7]);
      dispatch2(obj11);
      c5 = 0;
    }
    await "HermesInternal";
    closure_3 = tmp;
    ({ collectionIds: c0, includeUnpublishedProducts } = closure_0);
    if (includeUnpublishedProducts === undefined) {
      includeUnpublishedProducts = false;
    }
    flag = tmp65.includeUnpublishedCollections ?? false;
    flag2 = tmp65.ignoreCache ?? false;
    flag3 = tmp65.includePricing ?? false;
    let obj5 = closure_1;
    if (closure_1 === undefined) {
      obj5 = {};
    }
    const flag4 = obj5.retryAfterError ?? false;
    return "flexDirection";
  });
  return obj(...arguments);
};
function getCollectionListKey(memo, storefrontPricingKey) {
  let applicationId;
  let useShopOrdering;
  ({ applicationId, useShopOrdering } = memo);
  if (useShopOrdering === undefined) {
    useShopOrdering = true;
  }
  let flag = memo.includeUnpublishedProducts;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = memo.includeUnpublishedCollections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (storefrontPricingKey === undefined) {
    obj = getStorefrontNativeStoreQuery;
    storefrontPricingKey = obj.getStorefrontPricingKey();
  }
  return "" + applicationId + ":" + useShopOrdering + ":" + flag + ":" + flag2 + ":" + storefrontPricingKey;
}
function getCollectionPageKey(includeUnpublishedProducts, arg1) {
  let applicationId;
  let useShopOrdering;
  let storefrontPricingKey = arg1;
  if (arg1 === undefined) {
    obj = getStorefrontNativeStoreQuery;
    storefrontPricingKey = obj.getStorefrontPricingKey();
  }
  ({ applicationId, useShopOrdering } = includeUnpublishedProducts);
  if (useShopOrdering === undefined) {
    useShopOrdering = true;
  }
  let flag = includeUnpublishedProducts.includeUnpublishedProducts;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = includeUnpublishedProducts.includeUnpublishedCollections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  if (storefrontPricingKey === undefined) {
    const obj2 = getStorefrontNativeStoreQuery;
    storefrontPricingKey = obj2.getStorefrontPricingKey();
  }
  return "" + "" + applicationId + ":" + useShopOrdering + ":" + flag + ":" + flag2 + ":" + storefrontPricingKey + ":" + includeUnpublishedProducts.offset + ":" + includeUnpublishedProducts.limit;
}
obj = function _maybeFetchCollectionsForApplicationPage() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let applicationId;
    let closure_2;
    let closure_3;
    let collections;
    let flag;
    let listKey;
    let obj10;
    let pageKey;
    let pricingKey;
    let tmp16;
    let closure_0 = arg0;
    let closure_1 = value;
    if (1 === c6) {
      if (arg0 === 1) {
        let c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        applicationId = closure_0.applicationId;
        const offset = closure_0.offset;
        const limit = closure_0.limit;
        const useShopOrdering = closure_0.useShopOrdering;
        const tmp20 = undefined === useShopOrdering || useShopOrdering;
        const use_shop_ordering = tmp20;
        let closure_7 = closure_0.includeUnpublishedProducts;
        const tmp24 = undefined !== closure_7 && closure_7;
        const include_unpublished_products = tmp24;
        let closure_9 = closure_0.includeUnpublishedCollections;
        const tmp29 = undefined !== closure_9 && closure_9;
        const include_unpublished_collections = tmp29;
        const ignoreCache = closure_0.ignoreCache;
        const tmp34 = undefined !== ignoreCache && ignoreCache;
        const ignore_cache = tmp34;
        const _Boolean = Boolean;
        if (Boolean(applicationId)) {
          const obj3 = closure_131_0(closure_131_2[5]);
          const storefrontNativeStoreQuery = obj3.getStorefrontNativeStoreQuery();
          const obj4 = closure_131_0(closure_131_2[5]);
          pricingKey = obj4.getStorefrontPricingKey(storefrontNativeStoreQuery);
          pageKey = closure_131_10(closure_0, pricingKey);
          listKey = closure_131_9(closure_0, pricingKey);
          const collectionPageFetchState = closure_131_5.getCollectionPageFetchState(pageKey);
          if ("loading" !== collectionPageFetchState) {
            const collectionPageFetchedAt = closure_131_5.getCollectionPageFetchedAt(pageKey);
            const tmp58 = ignore_cache;
            if (!tmp58) {
              if (null != collectionPageFetchedAt) {
                const tmp121 = flag;
                if (!tmp121) {
                  let TWELVE_HOURS_MS;
                  if ("error" === collectionPageFetchState) {
                    TWELVE_HOURS_MS = closure_131_0(closure_131_2[6]).ERROR_STALE_THRESHOLD_MS;
                  } else {
                    TWELVE_HOURS_MS = closure_131_0(closure_131_2[6]).TWELVE_HOURS_MS;
                  }
                  const _Date = Date;
                  if (Date.now() - collectionPageFetchedAt <= TWELVE_HOURS_MS) {
                    c7 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
              }
            }
            let c5 = 1;
            const obj9 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH", pageKey };
            const obj5 = closure_131_1(closure_131_2[7]);
            obj5.dispatch(obj9);
            const request = { url: closure_131_7.STOREFRONT_COLLECTIONS_FOR_APPLICATION, query: obj10, rejectWithError: true };
            obj10 = { application_id: applicationId, use_shop_ordering, offset, limit, include_pricing: true, locale: closure_131_4.locale, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products, include_unpublished_collections, ignore_cache };
            const httpGetWithCountryCodeQuery = closure_131_0(closure_131_2[8]).httpGetWithCountryCodeQuery;
            const tmp80 = closure_131_0(closure_131_2[8]);
            const merged = Object.assign(storefrontNativeStoreQuery);
            c6 = 3;
            c7 = 1;
            const obj11 = { value: httpGetWithCountryCodeQuery(request), done: false };
            return obj11;
          }
        }
      }
    } else if (2 === c6) {
      c5 = 0;
      let closure_21 = closure_4;
      const obj12 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE", pageKey, apiError: tmp16 };
      const dispatch = closure_131_1(closure_131_2[7]).dispatch;
      const self = this;
      const self2 = this;
      const tmp11 = closure_131_1(closure_131_2[7]);
      tmp16 = new closure_131_1(closure_131_2[9])(closure_21);
      dispatch(obj12);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c7 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_20 = value;
      const obj13 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS", pageKey, listKey, applicationId, collections: collections.map(closure_131_6.fromServer), total: closure_20.body.total, pricingKey };
      collections = closure_20.body.collections;
      const dispatch2 = closure_131_1(closure_131_2[7]).dispatch;
      const tmp105 = closure_131_1(closure_131_2[7]);
      dispatch2(obj13);
      c5 = 0;
    }
    await "HermesInternal";
    let obj7 = closure_1;
    if (closure_1 === undefined) {
      obj7 = {};
    }
    flag = obj7.retryAfterError ?? false;
    return "flexDirection";
  });
  return obj(...arguments);
};
function getCollectionsAfterKey(includeUnpublishedCollections) {
  let anchorCollectionId;
  let applicationId;
  let includeUnpublishedProducts;
  let limit;
  ({ applicationId, anchorCollectionId, limit, includeUnpublishedProducts } = includeUnpublishedCollections);
  if (includeUnpublishedProducts === undefined) {
    includeUnpublishedProducts = false;
  }
  let flag = includeUnpublishedCollections.includeUnpublishedCollections;
  if (flag === undefined) {
    flag = false;
  }
  return "" + applicationId + ":after:" + anchorCollectionId + ":" + limit + ":" + includeUnpublishedProducts + ":" + flag;
}
obj = function _maybeFetchCollectionsAfter() {
  let locale;
  obj = _asyncToGenerator(async (requestKey) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let anchorCollectionId;
      let applicationId;
      let collections;
      let includeUnpublishedProducts;
      let obj7;
      let obj8;
      let tmp25;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              requestKey = undefined;
              body = undefined;
              ({ applicationId, anchorCollectionId, includeUnpublishedProducts } = requestKey);
              let tmp28 = undefined !== includeUnpublishedProducts;
              const limit = requestKey.limit;
              if (tmp28) {
                tmp28 = includeUnpublishedProducts;
              }
              const includeUnpublishedCollections = tmp54.includeUnpublishedCollections;
              const ignoreCache = tmp54.ignoreCache;
              const _Boolean = Boolean;
              const tmp29 = undefined !== includeUnpublishedCollections && includeUnpublishedCollections;
              if (Boolean(applicationId)) {
                const _Boolean2 = Boolean;
                if (Boolean(anchorCollectionId)) {
                  const tmp32 = getCollectionsAfterKey(requestKey);
                  requestKey = tmp32;
                  const obj4 = collectionsAfterFetchState;
                  collectionsAfterFetchState = collectionsAfterFetchState.getCollectionsAfterFetchState(tmp32);
                  if ("loading" !== collectionsAfterFetchState) {
                    const collectionsAfterFetchedAt = obj4.getCollectionsAfterFetchedAt(tmp32);
                    if (!(undefined !== ignoreCache && ignoreCache)) {
                      if (null != collectionsAfterFetchedAt) {
                        let TWELVE_HOURS_MS;
                        if ("error" === collectionsAfterFetchState) {
                          TWELVE_HOURS_MS = StorefrontCacheUtils.ERROR_STALE_THRESHOLD_MS;
                        } else {
                          TWELVE_HOURS_MS = StorefrontCacheUtils.TWELVE_HOURS_MS;
                        }
                        const _Date = Date;
                        if (Date.now() - collectionsAfterFetchedAt <= TWELVE_HOURS_MS) {
                          c6 = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      }
                    }
                    c4 = 1;
                    const obj6 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH", requestKey: tmp32 };
                    const obj5 = DispatcherDefault;
                    obj5.dispatch(obj6);
                    const request = { url: constants.STOREFRONT_COLLECTIONS_FOR_APPLICATION, query: obj8, rejectWithError: true };
                    c5 = 2;
                    c6 = 1;
                    obj8 = { application_id: applicationId, use_shop_ordering: true, anchor_collection_id: anchorCollectionId, limit, include_products: false, include_pricing: false, include_google_sku_ids: false, locale: locale.locale, include_unpublished_products: tmp28, include_unpublished_collections: tmp29, ignore_cache: undefined !== ignoreCache && ignoreCache };
                    const obj9 = { value: obj7.httpGetWithCountryCodeQuery(request), done: false };
                    obj7 = StoreUtils;
                    return obj9;
                  }
                }
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj10 = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE", requestKey, apiError: tmp25 };
            const dispatch2 = closure_130_1(closure_130_2[7]).dispatch;
            const self = this;
            const self2 = this;
            closure_130_1(closure_130_2[7]);
            tmp25 = new closure_130_1(closure_130_2[9])(closure_2);
            dispatch2(obj10);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            obj = { type: "STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS", requestKey, collections: collections.map(closure_130_6.fromServer) };
            collections = body.body.collections;
            const dispatch = closure_130_1(closure_130_2[7]).dispatch;
            closure_130_1(closure_130_2[7]);
            dispatch(obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp46) {
          closure_3 = tmp46;
          if (0 === c4) {
            c6 = 3;
            throw tmp46;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _maybeFetchCollectionsForApplication() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let c4;
    let closure_1;
    let closure_2;
    let collections;
    let flag;
    let flag2;
    let includePricing;
    let includeUnpublishedProducts;
    let obj8;
    let skuTypes;
    let tmp16;
    let closure_0 = arg0;
    if (1 === c5) {
      if (arg0 === 1) {
        let c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const _Boolean = Boolean;
        if (Boolean(applicationId)) {
          const fetchStateForApplication = closure_130_5.getFetchStateForApplication(applicationId);
          if ("loading" !== fetchStateForApplication) {
            let obj10;
            let obj11;
            const fetchedAtForApplication = closure_130_5.getFetchedAtForApplication(applicationId);
            if (null != fetchedAtForApplication) {
              let TWELVE_HOURS_MS;
              if ("error" === fetchStateForApplication) {
                TWELVE_HOURS_MS = closure_130_0(closure_130_2[6]).ERROR_STALE_THRESHOLD_MS;
              } else {
                TWELVE_HOURS_MS = closure_130_0(closure_130_2[6]).TWELVE_HOURS_MS;
              }
              const _Date = Date;
              if (Date.now() - fetchedAtForApplication <= TWELVE_HOURS_MS) {
                const fetchParamsForApplication = closure_130_5.getFetchParamsForApplication(applicationId);
                if ("error" !== fetchStateForApplication) {
                  if (null != fetchParamsForApplication) {
                    const obj6 = { includePricing, skuTypes };
                  }
                }
                c6 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            skuTypes = 1;
            const obj7 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH", applicationId };
            const obj4 = closure_130_1(closure_130_2[7]);
            obj4.dispatch(obj7);
            const request = { url: closure_130_7.STOREFRONT_COLLECTIONS_FOR_APPLICATION, query: obj8, rejectWithError: true };
            obj8 = { application_id: applicationId, locale: closure_130_4.locale, with_bundled_skus: true, include_google_sku_ids: true, include_unpublished_products: includeUnpublishedProducts, include_unpublished_collections: flag, ignore_cache: flag2 };
            const httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[8]).httpGetWithCountryCodeQuery;
            const tmp55 = closure_130_0(closure_130_2[8]);
            if (null != skuTypes) {
              const obj9 = { sku_types: skuTypes };
              obj10 = obj9;
            } else {
              obj10 = {};
            }
            const merged = Object.assign(obj10);
            const tmp69 = includePricing;
            if (tmp69) {
              obj11 = { include_pricing: true };
            } else {
              obj11 = {};
            }
            const merged1 = Object.assign(obj11);
            c5 = 3;
            c6 = 1;
            const obj12 = { value: httpGetWithCountryCodeQuery(request), done: false };
            return obj12;
          }
        }
      }
    } else if (2 === c5) {
      skuTypes = 0;
      let closure_11 = closure_3;
      const obj13 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE", applicationId, apiError: tmp16 };
      const dispatch = closure_130_1(closure_130_2[7]).dispatch;
      const self = this;
      const self2 = this;
      const tmp11 = closure_130_1(closure_130_2[7]);
      tmp16 = new closure_130_1(closure_130_2[9])(closure_11);
      dispatch(obj13);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      skuTypes = 0;
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      const body = value;
      const obj14 = { type: "STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS", applicationId, collections: collections.map(closure_130_6.fromServer), includePricing, skuTypes };
      collections = body.body.collections;
      const dispatch2 = closure_130_1(closure_130_2[7]).dispatch;
      const tmp85 = closure_130_1(closure_130_2[7]);
      dispatch2(obj14);
      skuTypes = 0;
    }
    await "HermesInternal";
    ({ applicationId: c0, includeUnpublishedProducts } = closure_0);
    if (includeUnpublishedProducts === undefined) {
      includeUnpublishedProducts = false;
    }
    flag = tmp98.includeUnpublishedCollections ?? false;
    flag2 = tmp98.ignoreCache ?? false;
    ({ skuTypes: c4, includePricing } = closure_0);
    if (includePricing === undefined) {
      includePricing = false;
    }
    return "flexDirection";
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/storefront/StorefrontCollectionActionCreators.tsx");

export function maybeFetchCollectionsWithProducts() {
  return obj(...arguments);
}
export { getCollectionListKey };
export { getCollectionPageKey };
export function maybeFetchCollectionsForApplicationPage() {
  return obj(...arguments);
}
export { getCollectionsAfterKey };
export function maybeFetchCollectionsAfter() {
  return obj(...arguments);
}
export function maybeFetchCollectionsForApplication() {
  return obj(...arguments);
}
