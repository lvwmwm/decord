// Module ID: 8338
// Function ID: 8339
// Name: useGameProfileShopCollection
// Dependencies: [19, 8135, 504, 8222, 8339, 2]
// Exports: useGameProfileShopCollection, useGameProfileShopCollectionProducts, useGameProfileShopCollectionState

// Module 8338 (useGameProfileShopCollection)
import GameProfileHttpUtils from "GameProfileHttpUtils" /* 8222 */;
import react from "react" /* 19 */;
import GameProfileStore from "GameProfileStore" /* 8135 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ useEffect: c2, useMemo: c3 } = react);
let closure_5 = [];
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollectionState = function useGameProfileShopCollectionState(arg0) {
  let closure_0;
  let hasFetched;
  _require = arg0;
  const items = [GameProfileStore];
  const obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let result1;
    let shopCollectionSkuIds;
    const result = null != collectionId && GameProfileStore.hasShopCollectionBeenFetched(tmp);
    const obj = { hasFetched: result, isFetching: result1, skuIds: shopCollectionSkuIds };
    result1 = null != tmp && GameProfileStore.isShopCollectionFetching(tmp);
    shopCollectionSkuIds = undefined;
    if (null != collectionId) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(tmp);
    }
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  let skuIds = stateFromStoresObject.skuIds;
  const items1 = [arg0, hasFetched];
  const isFetching = stateFromStoresObject.isFetching;
  closure_2(() => {
    const result = null == collectionId || hasFetched || GameProfileStore.isShopCollectionFetching(tmp);
    if (!result) {
      const obj = GameProfileHttpUtils;
      const shopCollection = obj.getShopCollection(tmp);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  return { skuIds, hasFetched, isFetching };
};
export const useGameProfileShopCollection = function useGameProfileShopCollection(arg0) {
  let closure_0;
  let hasFetched;
  let isFetching;
  let skuIds;
  _require = arg0;
  const items = [GameProfileStore];
  const obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let result1;
    let shopCollectionSkuIds;
    const result = null != collectionId && GameProfileStore.hasShopCollectionBeenFetched(tmp);
    const obj = { hasFetched: result, isFetching: result1, skuIds: shopCollectionSkuIds };
    result1 = null != tmp && GameProfileStore.isShopCollectionFetching(tmp);
    shopCollectionSkuIds = undefined;
    if (null != collectionId) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(tmp);
    }
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  ({ isFetching, skuIds } = stateFromStoresObject);
  const items1 = [arg0, hasFetched];
  closure_2(() => {
    const result = null == collectionId || hasFetched || GameProfileStore.isShopCollectionFetching(tmp);
    if (!result) {
      const obj = GameProfileHttpUtils;
      const shopCollection = obj.getShopCollection(tmp);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  return skuIds;
};
export const useGameProfileShopCollectionProducts = function useGameProfileShopCollectionProducts(collectionId) {
  let hasFetched;
  let tmp8;
  _require = collectionId;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [GameProfileStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let result1;
    let shopCollectionSkuIds;
    const result = null != collectionId && GameProfileStore.hasShopCollectionBeenFetched(tmp);
    const obj = { hasFetched: result, isFetching: result1, skuIds: shopCollectionSkuIds };
    result1 = null != tmp && GameProfileStore.isShopCollectionFetching(tmp);
    shopCollectionSkuIds = undefined;
    if (null != collectionId) {
      shopCollectionSkuIds = GameProfileStore.getShopCollectionSkuIds(tmp);
    }
    return obj;
  });
  const tmp2 = hasFetched;
  hasFetched = stateFromStoresObject.hasFetched;
  let skuIds = stateFromStoresObject.skuIds;
  const items1 = [collectionId, hasFetched];
  const isFetching = stateFromStoresObject.isFetching;
  closure_2(() => {
    const result = null == collectionId || hasFetched || GameProfileStore.isShopCollectionFetching(tmp);
    if (!result) {
      const obj = GameProfileHttpUtils;
      const shopCollection = obj.getShopCollection(tmp);
    }
  }, items1);
  if (skuIds == null) {
    skuIds = closure_5;
  }
  const tmpResult = tmp(tmp2[4]);
  const collectiblesShopProducts = tmpResult.useCollectiblesShopProducts(skuIds, { flattenVariants: true });
  const items2 = [skuIds, collectiblesShopProducts];
  const obj2 = {
    products: closure_3(() => {
      const mapped = skuIds.map((item) => {
        let product;
        if (collectiblesShopProducts[item] != null) {
          product = tmp.product;
        }
        return product;
      });
      return mapped.filter((item) => null != item);
    }, items2),
    isLoading: tmp8
  };
  tmp8 = null != collectionId;
  if (tmp8) {
    let tmp9 = !hasFetched;
    if (hasFetched) {
      tmp9 = isFetching;
    }
    if (!tmp9) {
      tmp9 = skuIds.length > 0 && tmp7;
    }
    tmp8 = tmp9;
  }
  return obj2;
};
