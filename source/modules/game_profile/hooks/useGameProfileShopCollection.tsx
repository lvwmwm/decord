// Module ID: 11876
// Function ID: 92045
// Name: useGameProfileShopCollection
// Dependencies: [31, 8638, 566, 8700, 2]
// Exports: useGameProfileShopCollection

// Module 11876 (useGameProfileShopCollection)
import { useEffect } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  const _require = collectionId;
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = _require(hasFetched[2]).useStateFromStoresObject(items, () => {
    const obj = {};
    let result = null != closure_0;
    if (result) {
      result = outer1_3.hasShopCollectionBeenFetched(closure_0);
    }
    obj.hasFetched = result;
    let shopCollectionSkuIds;
    if (null != closure_0) {
      shopCollectionSkuIds = outer1_3.getShopCollectionSkuIds(closure_0);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  hasFetched = stateFromStoresObject.hasFetched;
  let skuIds = stateFromStoresObject.skuIds;
  const items1 = [collectionId, hasFetched];
  useEffect(() => {
    let result = null == collectionId || hasFetched;
    if (!result) {
      result = outer1_3.isShopCollectionFetching(collectionId);
    }
    if (!result) {
      const shopCollection = collectionId(hasFetched[3]).getShopCollection(collectionId);
      const obj = collectionId(hasFetched[3]);
    }
  }, items1);
  if (null == skuIds) {
    skuIds = [];
  }
  return skuIds;
};
