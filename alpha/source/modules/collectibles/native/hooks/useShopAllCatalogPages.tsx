// Module ID: 17820
// Function ID: 17821
// Name: useShopAllCatalogPages
// Dependencies: [32, 19, 9581, 7721, 1072, 9583, 504, 559, 7719, 2]
// Exports: default

// Module 17820 (useShopAllCatalogPages)
import get_initializedDefault from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import StorefrontCollectionActionCreators from "StorefrontCollectionActionCreators" /* 9583 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 9581 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7721 */;
import size from "module_2" /* 2 */;

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
let closure_7 = Constants.COLLECTIBLES_APPLICATION_ID;
const weakMap = new WeakMap();
const weakSet = new WeakSet();
let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useShopAllCatalogPages.tsx");

export default function useShopAllCatalogPages(pageSize) {
  let callback1;
  pageSize = pageSize.pageSize;
  const includeUnpublished = pageSize.includeUnpublished;
  const noCache = pageSize.noCache;
  let enabled = pageSize.enabled;
  let first;
  let current;
  let closure_12;
  let nextPageFetchState;
  let closure_14;
  let memo2;
  let ref;
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
  const obj3 = pageSize(noCache[5]);
  const collectionListKey = obj3.getCollectionListKey(memo[0]);
  let tmp8 = closure_5;
  const items2 = [closure_5];
  const items3 = [memo1];
  const obj4 = pageSize(noCache[6]);
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
  const tmp5Result = tmp5(tmp6[6]);
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
    const tmp = new includeUnpublished(noCache[7])(1000, 30000);
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
  const tmp5Result2 = tmp5(tmp6[6]);
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
          let item = products.forEach(pageSize(noCache[8]).seedCollectiblesProductFromStandaloneLoad);
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
};
