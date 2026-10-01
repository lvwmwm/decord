// Module ID: 15422
// Function ID: 15423
// Name: useMaybeFetchShopHome
// Dependencies: [32, 19, 4750, 6962, 7005, 1076, 504, 7008, 6961, 15423, 2]
// Exports: useMaybeFetchCollectiblesShopHome

// Module 15422 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7008 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7005 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_12, dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = react);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  let closure_1;
  let tmp4;
  let tmp5;
  _require = HOME;
  dependencyMap = arg1;
  _slicedToArray = memo;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let skipNumCategories;
  let closure_8;
  let hasExpiredShopBlocks;
  let closure_15;
  let obj = require("get initialized");
  let items = [hasLoadedExperiments];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [skipNumCategories];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const items2 = [closure_8];
  const obj3 = require("get initialized");
  const tmp3 = _slicedToArray(obj3.useStateFromStoresArray(items2, () => {
    const items = [CollectiblesShopHomeStore.getShopBlocks(HOME), , , , , , , ];
    let num = CollectiblesShopHomeStore.getLastSuccessfulFetch(HOME);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = obj.getLastErrorTimestamp(tmp);
    if (num2 == null) {
      num2 = 0;
    }
    items[2] = num2;
    items[3] = CollectiblesShopHomeStore.getLastFetchOptions(HOME);
    items[4] = CollectiblesShopHomeStore.getFetchShopHomeError(HOME);
    items[5] = CollectiblesShopHomeStore.getIsFetchingShopHome(HOME);
    items[6] = CollectiblesShopHomeStore.getHasKnownStaleData(HOME);
    items[7] = CollectiblesShopHomeStore.getShopHomeConfigOverride();
    return items;
  }), 8);
  [tmp4, tmp5] = tmp3;
  let c5 = tmp5;
  hasLoadedExperiments = tmp6;
  skipNumCategories = tmp7;
  let tmp8 = tmp3[4];
  closure_8 = tmp8;
  let tmp9 = tmp3[5];
  let closure_9 = tmp9;
  let closure_10 = tmp10;
  const shopHomeConfig = tmp11;
  const items3 = [arg1, tmp11, stateFromStores1];
  const tmp13 = c5(() => {
    const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, includeDynamicBlocks: true, shopHomeConfig, skipNumCategories: stateFromStores1 };
    const merged = Object.assign(closure_1);
    return obj;
  }, items3);
  closure_12 = tmp13;
  const items4 = [tmp7, tmp13];
  const tmp14 = c5(() => {
    const obj = CollectiblesActionCreators;
    return !obj.areRequestOptionsEqual(skipNumCategories, closure_12);
  }, items4);
  let closure_13 = tmp14;
  let flag2 = tmp9;
  const useHasExpiredShopBlocks = require("useHasExpiredShopBlocks").useHasExpiredShopBlocks;
  const tmp12 = c5;
  const tmp15 = require("useHasExpiredShopBlocks");
  if (tmp9 == null) {
    flag2 = false;
  }
  hasExpiredShopBlocks = useHasExpiredShopBlocks(tmp4, flag2, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - c5 < React4;
    }
    return tmp;
  }, items5);
  closure_15 = tmp12Result;
  const items6 = [stateFromStores, tmp9, tmp8, tmp6, tmp12Result, tmp10, tmp14, tmp13, HOME, memo];
  stateFromStores(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const tmp2 = closure_9;
      if (!tmp2) {
        const _Date = Date;
        const tmp8 = null != closure_8 && Date.now() - hasLoadedExperiments < authStore;
        if (!tmp8) {
          const tmp9 = closure_13 || !closure_15 || c10;
          if (tmp9) {
            const obj = CollectiblesActionCreators;
            const collectiblesShopHome = obj.fetchCollectiblesShopHome(HOME, closure_12, memo);
          }
        }
      }
    }
  }, items6);
  const items7 = [HOME, tmp13, memo];
  const obj4 = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const obj = CollectiblesActionCreators;
      const collectiblesShopHome = obj.fetchCollectiblesShopHome(HOME, closure_12, memo);
    }, items7)
  };
  return obj4;
};
