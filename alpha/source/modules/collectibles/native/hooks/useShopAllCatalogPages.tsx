// Module ID: 16180
// Function ID: 16181
// Name: useShopAllCatalogPages
// Dependencies: [32, 19, 9089, 7264, 1085, 558, 576, 9091, 504, 569, 7262, 2]

// Module 16180 (useShopAllCatalogPages)
import get_initializedDefault from "get initialized" /* 504 */;
import Constants from "Constants" /* 1085 */;
import StorefrontCollectionActionCreators from "StorefrontCollectionActionCreators" /* 9091 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StorefrontCollectionStore_mod from "StorefrontCollectionStore" /* 9089 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7264 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let current, ref;

function getCategoryForCollection(id) {
  let value = weakMap.get(id);
  const obj = weakMap;
  if (null == value) {
    const result = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(id);
    const result1 = obj.set(id, result);
    value = result;
  }
  return value;
}
let StorefrontCollectionStore = StorefrontCollectionStore_mod;
let closure_7 = Constants.COLLECTIBLES_APPLICATION_ID;
const weakMap = new WeakMap();
const weakSet = new WeakSet();
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShopAllCatalogPages(pageSize) {
  let closure_5;
  let first;
  let noCache;
  let tmp20;
  let tmp21;
  let tmp = pageSize;
  let tmp2 = noCache;
  let obj = pageSize(noCache[6]);
  const cResult = obj.c(53);
  pageSize = pageSize.pageSize;
  const includeUnpublished = pageSize.includeUnpublished;
  noCache = pageSize.noCache;
  const enabled = pageSize.enabled;
  let obj2 = first;
  let tmp4 = enabled(first.useState(3 * pageSize), 2);
  first = tmp4[0];
  StorefrontCollectionStore = tmp4[1];
  const rounded = Math.ceil(first / pageSize);
  if (cResult[0] === includeUnpublished) {
    if (cResult[1] === noCache) {
      if (cResult[2] === pageSize) {
        let obj3;
        let tmp8;
        let tmp10;
        let tmp13;
        let tmp12;
        let tmp19;
        if (cResult[9] !== arr) {
          const mapped = arr.map(tmp(tmp2[7]).getCollectionPageKey);
          cResult[9] = arr;
          cResult[10] = mapped;
          obj3 = mapped;
        } else {
          obj3 = cResult[10];
        }
        if (cResult[11] !== arr[0]) {
          const tmpResult = tmp(tmp2[7]);
          const collectionListKey = tmpResult.getCollectionListKey(arr[0]);
          cResult[11] = arr[0];
          cResult[12] = collectionListKey;
          tmp8 = collectionListKey;
        } else {
          tmp8 = cResult[12];
        }
        const applicationId = tmp8;
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [StorefrontCollectionStore];
          cResult[13] = items;
          tmp10 = items;
        } else {
          tmp10 = cResult[13];
        }
        if (cResult[14] !== obj3) {
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
          const items1 = [obj3];
          cResult[14] = obj3;
          cResult[15] = O;
          cResult[16] = items1;
          tmp13 = items1;
          tmp12 = O;
        } else {
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
          tmp13 = cResult[16];
        }
        const tmpResult3 = tmp(tmp2[8]);
        const stateFromStoresObject = tmpResult3.useStateFromStoresObject(tmp10, tmp12, tmp13);
        const findIndexResult = obj3.findIndex((item) => null == stateFromStoresObject[item]);
        if (-1 !== findIndexResult) {
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
        }
        let c9 = tmp17;
        if (-1 !== findIndexResult) {
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
        }
        let c10 = tmp18;
        const _Symbol2 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
          const items2 = [StorefrontCollectionStore];
          cResult[17] = items2;
          tmp19 = items2;
        } else {
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
        }
        if (cResult[18] === tmp8) {
          let tmp31;
          let tmp30;
          class O {
            constructor() {
              const obj = {};
              for (const item10006 of obj3) {
                obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                continue;
              }
              return obj;
            }
          }
          const tmpResult4 = tmp(tmp2[8]);
          const stateFromStoresObject1 = tmpResult4.useStateFromStoresObject(tmp19, tmp20, tmp21);
          const nextPageFetchState = stateFromStoresObject1.nextPageFetchState;
          const total = stateFromStoresObject1.total;
          let tmp24 = null == total;
          if (!tmp24) {
            class O {
              constructor() {
                const obj = {};
                for (const item10006 of obj3) {
                  obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                  continue;
                }
                return obj;
              }
            }
            tmp24 = findIndexResult * pageSize < total;
          }
          let closure_12 = tmp24;
          const _Symbol3 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class O {
              constructor() {
                const obj = {};
                for (const item10006 of obj3) {
                  obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                  continue;
                }
                return obj;
              }
            }
            const self = this;
            const self2 = this;
            cResult[22] = new includeUnpublished(tmp2[9])(1000, 30000);
            const tmp27 = new includeUnpublished(tmp2[9])(1000, 30000);
          } else {
            class O {
              constructor() {
                const obj = {};
                for (const item10006 of obj3) {
                  obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
                  continue;
                }
                return obj;
              }
            }
          }
          let closure_13 = tmp26;
          ref = obj2.useRef(tmp17);
          const _Symbol4 = Symbol;
          if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor() {
                if (null != ref.current) {
                  const obj = StorefrontCollectionActionCreators;
                  const result = obj.maybeFetchCollectionsForApplicationPage(tmp.current, { retryAfterError: true });
                }
              }
            }
            cResult[23] = H;
          } else {
            class H {
              constructor() {
                if (null != ref.current) {
                  const obj = StorefrontCollectionActionCreators;
                  const result = obj.maybeFetchCollectionsForApplicationPage(tmp.current, { retryAfterError: true });
                }
              }
            }
          }
          H = tmp29;
          const _Symbol5 = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class V {
              constructor() {
                return () => closure_1_13.cancel();
              }
            }
            const items3 = [tmp26];
            cResult[24] = V;
            cResult[25] = items3;
            tmp31 = items3;
            tmp30 = V;
          } else {
            class V {
              constructor() {
                return () => closure_1_13.cancel();
              }
            }
            tmp31 = cResult[25];
          }
          const effect = obj2.useEffect(tmp30, tmp31);
          if (cResult[26] === enabled) {
            class V {
              constructor() {
                return () => closure_1_13.cancel();
              }
            }
          }
          class Y {
            constructor() {
              ref.current = current;
              const tmp2 = enabled && null != tmp && closure_12;
              if (tmp2) {
                if ("error" === nextPageFetchState) {
                  const obj2 = closure_13;
                  if (!closure_13.pending) {
                    obj2.fail(H);
                  }
                } else if (null == tmp4) {
                  closure_13.succeed();
                  const obj = StorefrontCollectionActionCreators;
                  const result = obj.maybeFetchCollectionsForApplicationPage(tmp);
                }
              }
            }
          }
          class T {
            constructor() {
              let collectionPageFetchState;
              if (null != c10) {
                collectionPageFetchState = StorefrontCollectionStore.getCollectionPageFetchState(tmp);
              }
              const obj = { nextPageFetchState: collectionPageFetchState, total: StorefrontCollectionStore.getCollectionListTotal(applicationId) };
              return obj;
            }
          }
          tmp35[0] = enabled;
          tmp35[1] = undefined;
          tmp35[2] = tmp24;
          tmp35[3] = nextPageFetchState;
          tmp35[4] = tmp26;
          tmp35[5] = tmp29;
          cResult[26] = enabled;
          cResult[27] = tmp24;
          cResult[28] = undefined;
          cResult[29] = nextPageFetchState;
          cResult[30] = Y;
          cResult[31] = tmp35;
        }
        class T {
          constructor() {
            let collectionPageFetchState;
            if (null != c10) {
              collectionPageFetchState = StorefrontCollectionStore.getCollectionPageFetchState(tmp);
            }
            const obj = { nextPageFetchState: collectionPageFetchState, total: StorefrontCollectionStore.getCollectionListTotal(applicationId) };
            return obj;
          }
        }
        const items4 = [undefined, tmp8];
        cResult[18] = tmp8;
        cResult[19] = undefined;
        cResult[20] = T;
        cResult[21] = items4;
        tmp20 = T;
        tmp21 = items4;
      }
    }
  }
  if (cResult[5] === includeUnpublished) {
    class V {
      constructor() {
        return () => closure_1_13.cancel();
      }
    }
  }
  const fn = function f(arg0, arg1) {
    return { applicationId, offset: arg1 * pageSize, limit: pageSize, useShopOrdering: true, includeUnpublishedProducts: includeUnpublished, includeUnpublishedCollections: includeUnpublished, ignoreCache: noCache };
  };
  cResult[5] = includeUnpublished;
  cResult[6] = noCache;
  cResult[7] = pageSize;
  cResult[8] = fn;
}) : (function useShopAllCatalogPages(pageSize) {
  let callback1;
  pageSize = pageSize.pageSize;
  const includeUnpublished = pageSize.includeUnpublished;
  const noCache = pageSize.noCache;
  let enabled = pageSize.enabled;
  let first;
  current = undefined;
  let closure_12;
  let nextPageFetchState;
  let closure_14;
  let memo2;
  ref = undefined;
  let callback;
  let memo3;
  let stateFromStoresObject2;
  let memo4;
  let obj = first;
  let tmp = enabled(first.useState(3 * pageSize), 2);
  first = tmp[0];
  let closure_5 = tmp[1];
  const rounded = Math.ceil(first / pageSize);
  let items = [rounded, pageSize, includeUnpublished, noCache];
  const memo = first.useMemo(() => {
    let ignoreCache;
    let limit;
    const obj = { length: rounded };
    return Array.from(obj, (arg0, arg1) => ({ applicationId: memo, offset: arg1 * limit, limit, useShopOrdering: true, includeUnpublishedProducts: includeUnpublishedCollections, includeUnpublishedCollections, ignoreCache }));
  }, items);
  let items1 = [memo];
  const memo1 = first.useMemo(() => memo.map(StorefrontCollectionActionCreators.getCollectionPageKey), items1);
  let tmp5 = pageSize;
  const tmp6 = noCache;
  const obj3 = pageSize(noCache[7]);
  const collectionListKey = obj3.getCollectionListKey(memo[0]);
  let tmp8 = closure_5;
  const items2 = [closure_5];
  const items3 = [memo1];
  const obj4 = pageSize(noCache[8]);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    const obj = {};
    for (const item10006 of memo1) {
      obj[item10006] = StorefrontCollectionStore.getCollectionPageIds(item10006);
      continue;
    }
    return obj;
  }, items3);
  let findIndexResult = memo1.findIndex((item) => null == stateFromStoresObject[item]);
  let tmp11 = -1 === findIndexResult;
  let tmp12;
  if (!tmp11) {
    tmp12 = memo[findIndexResult];
  }
  current = tmp12;
  let tmp13;
  if (!tmp11) {
    tmp13 = memo1[findIndexResult];
  }
  closure_12 = tmp13;
  const items4 = [tmp8];
  const items5 = [tmp13, collectionListKey];
  const tmp5Result = tmp5(tmp6[8]);
  const stateFromStoresObject1 = tmp5Result.useStateFromStoresObject(items4, () => {
    let collectionPageFetchState;
    if (null != closure_12) {
      collectionPageFetchState = StorefrontCollectionStore.getCollectionPageFetchState(tmp);
    }
    const obj = { nextPageFetchState: collectionPageFetchState, total: StorefrontCollectionStore.getCollectionListTotal(collectionListKey) };
    return obj;
  }, items5);
  nextPageFetchState = stateFromStoresObject1.nextPageFetchState;
  const total = stateFromStoresObject1.total;
  let tmp15 = null == total;
  if (!tmp15) {
    if (tmp11) {
      findIndexResult = rounded;
    }
    tmp15 = findIndexResult * pageSize < total;
  }
  closure_14 = tmp15;
  memo2 = obj.useMemo(() => {
    const tmp = new includeUnpublished(noCache[9])(1000, 30000);
    return tmp;
  }, []);
  ref = obj.useRef(tmp12);
  callback = obj.useCallback(() => {
    if (null != ref.current) {
      const obj = StorefrontCollectionActionCreators;
      const result = obj.maybeFetchCollectionsForApplicationPage(tmp.current, { retryAfterError: true });
    }
  }, []);
  const items6 = [memo2];
  const effect = obj.useEffect(() => () => memo2.cancel(), items6);
  const items7 = [enabled, tmp12, tmp15, nextPageFetchState, memo2, callback];
  const effect1 = obj.useEffect(() => {
    ref.current = current;
    const tmp2 = enabled && null != tmp && closure_14;
    if (tmp2) {
      if ("error" === nextPageFetchState) {
        const obj2 = memo2;
        if (!memo2.pending) {
          obj2.fail(callback);
        }
      } else if (null == tmp4) {
        memo2.succeed();
        const obj = StorefrontCollectionActionCreators;
        const result = obj.maybeFetchCollectionsForApplicationPage(tmp);
      }
    }
  }, items7);
  const items8 = [memo1, stateFromStoresObject];
  memo3 = obj.useMemo(() => {
    const items = [];
    const obj = memo1[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp5 = stateFromStoresObject[tmp3];
      if (null == tmp5) {
        obj.return();
        break;
      } else {
        let push = items.push;
        let items1 = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, tmp6, 0);
        let applyResult = HermesBuiltin.apply(push, items1, items);
        continue;
      }
      return items;
    }
  }, items8);
  const items9 = [tmp8];
  const items10 = [memo3];
  const tmp5Result2 = tmp5(tmp6[8]);
  stateFromStoresObject2 = tmp5Result2.useStateFromStoresObject(items9, () => {
    const obj = {};
    for (const item10006 of memo3) {
      obj[item10006] = StorefrontCollectionStore.getCollection(item10006);
      continue;
    }
    return obj;
  }, items10);
  const items11 = [memo3, stateFromStoresObject2];
  memo4 = obj.useMemo(() => {
    const mapped = memo3.map((item) => stateFromStoresObject2[item]);
    const found = mapped.filter((item) => null != item);
    return found.map(getCategoryForCollection);
  }, items11);
  const items12 = [memo4];
  const effect2 = obj.useEffect(() => {
    const found = memo4.filter((item) => !set.has(item));
    if (0 !== found.length) {
      let tmp = importDefault;
      const Emitter = get_initializedDefault.Emitter;
      Emitter.batched(() => {
        for (const item10005 of found) {
          let addResult = set.add(item10005);
          let products = item10005.products;
          let item = products.forEach(pageSize(noCache[10]).seedCollectiblesProductFromStandaloneLoad);
          continue;
        }
      });
    }
  }, items12);
  const items13 = [pageSize, first];
  let obj2 = { categories: memo4, isLoading: enabled, hasMore: tmp15, prefetchThrough: callback1 };
  callback1 = obj.useCallback((arg0) => {
    const sum = arg0 + 2 * pageSize;
    if (sum > first) {
      closure_5(sum);
    }
  }, items13);
  if (enabled) {
    enabled = null != tmp12;
  }
  if (enabled) {
    enabled = tmp15;
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShopAllCatalogPages.tsx");

export default tmp4;
