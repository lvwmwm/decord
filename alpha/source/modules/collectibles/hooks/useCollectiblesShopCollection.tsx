// Module ID: 18156
// Function ID: 18157
// Name: useCollectiblesShopCollection
// Dependencies: [19, 9686, 7820, 9687, 504, 9685, 9688, 2]
// Exports: default

// Module 18156 (useCollectiblesShopCollection)
import CollectiblesShopManager2 from "CollectiblesShopManager" /* 9687 */;
import StorefrontCollectionActionCreators from "StorefrontCollectionActionCreators" /* 9688 */;
import react from "react" /* 19 */;
import StorefrontCollectionStore from "StorefrontCollectionStore" /* 9686 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7820 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesShopCollection.tsx");

export default function useCollectiblesShopCollection(id) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.includeUnpublished;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.includePricing;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str;
  let collection;
  let fetchState;
  let fetchResolvedAbsent;
  let memo;
  if (id == null) {
    str = "";
  }
  let items = [str, flag, flag2];
  const effect = str.useEffect(() => {
    if ("" !== str) {
      const CollectiblesShopManager = CollectiblesShopManager2.CollectiblesShopManager;
      const items = [tmp];
      const obj = { includeUnpublished: flag, includePricing: flag2 };
      const collections = CollectiblesShopManager.requestCollections(items, obj);
    }
  }, items);
  let obj2 = flag(flag2[4]);
  const items1 = [collection];
  const items2 = [str];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { collection: StorefrontCollectionStore.getCollection(str), fetchState: StorefrontCollectionStore.getFetchState(str) };
    return obj;
  }, items2);
  collection = stateFromStoresObject.collection;
  fetchState = stateFromStoresObject.fetchState;
  const obj3 = flag(flag2[5]);
  fetchResolvedAbsent = obj3.useFetchResolvedAbsent(str, fetchState);
  const items3 = [collection];
  memo = str.useMemo(() => {
    let result = null;
    if (null != collection) {
      result = CollectiblesCategoryRecord.fromStorefrontCollectionRecord(tmp);
    }
    return result;
  }, items3);
  const items4 = [fetchState, fetchResolvedAbsent, memo];
  const items5 = [str, flag, flag2];
  const memo1 = str.useMemo(() => {
    str = "error";
    if ("error" !== fetchState) {
      str = "error";
      if (!fetchResolvedAbsent) {
        let str2 = "loading";
        if (null != memo) {
          str2 = "ready";
        }
        str = str2;
      }
    }
    return str;
  }, items4);
  const obj4 = {
    category: memo,
    state: memo1,
    retry: str.useCallback(() => {
      let items;
      if ("" !== str) {
        const obj2 = { collectionIds: items, includeUnpublishedCollections: flag, includeUnpublishedProducts: flag, includePricing: flag2, ignoreCache: true };
        items = [tmp];
        const obj = StorefrontCollectionActionCreators;
        const result = obj.maybeFetchCollectionsWithProducts(obj2, { retryAfterError: true });
      }
    }, items5)
  };
  return obj4;
};
