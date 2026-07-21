// Module ID: 11836
// Function ID: 91740
// Name: useGameProfileShopCollection
// Dependencies: []
// Exports: useGameProfileShopCollection

// Module 11836 (useGameProfileShopCollection)
const useEffect = require(dependencyMap[0]).useEffect;
let closure_3 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/game_profile/hooks/useGameProfileShopCollection.tsx");

export const useGameProfileShopCollection = function useGameProfileShopCollection(collectionId) {
  const require = collectionId;
  const items = [closure_3];
  const stateFromStoresObject = require(dependencyMap[2]).useStateFromStoresObject(items, () => {
    const obj = {};
    let result = null != arg0;
    if (result) {
      result = closure_3.hasShopCollectionBeenFetched(arg0);
    }
    obj.hasFetched = result;
    let shopCollectionSkuIds;
    if (null != arg0) {
      shopCollectionSkuIds = closure_3.getShopCollectionSkuIds(arg0);
    }
    obj.skuIds = shopCollectionSkuIds;
    return obj;
  });
  const hasFetched = stateFromStoresObject.hasFetched;
  const dependencyMap = hasFetched;
  let skuIds = stateFromStoresObject.skuIds;
  const items1 = [collectionId, hasFetched];
  useEffect(() => {
    let result = null == arg0 || hasFetched;
    if (!result) {
      result = closure_3.isShopCollectionFetching(arg0);
    }
    if (!result) {
      const shopCollection = arg0(hasFetched[3]).getShopCollection(arg0);
      const obj = arg0(hasFetched[3]);
    }
  }, items1);
  if (null == skuIds) {
    skuIds = [];
  }
  return skuIds;
};
