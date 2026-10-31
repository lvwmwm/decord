// Module ID: 17818
// Function ID: 17819
// Name: useMaybeFetchShopHome
// Dependencies: [32, 19, 5238, 7720, 5688, 1074, 504, 7762, 7719, 17819, 2]
// Exports: useMaybeFetchCollectiblesShopHome

// Module 17818 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7719 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7762 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 5238 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7720 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 5688 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c3;
let c9;
let closure_4;
let hasOwnProperty;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useCallback: closure_4, useMemo: hasOwnProperty } = react);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo, arg3, arg4) {
  let closure_1;
  let hasLoadedExperiments;
  let tmp4;
  let tmp5;
  _require = HOME;
  dependencyMap = arg1;
  _slicedToArray = memo;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  let c6;
  let skipNumCategories;
  let closure_8;
  let hasExpiredShopBlocks;
  let closure_16;
  let obj = require("get initialized");
  let items = [c6];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const items1 = [skipNumCategories];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => skipNumCategories.skipNumCategories);
  const items2 = [closure_8];
  const obj3 = require("get initialized");
  let tmp3 = _slicedToArray(obj3.useStateFromStoresArray(items2, () => {
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
  c6 = tmp5;
  skipNumCategories = tmp6;
  closure_8 = tmp7;
  let closure_9 = tmp8;
  let tmp9 = tmp3[5];
  let closure_10 = tmp9;
  let tmp10 = tmp3[6];
  let closure_11 = tmp10;
  const shopHomeConfig = tmp11;
  const items3 = [arg1, tmp11, stateFromStores1];
  const tmp13 = stateFromStores1(() => {
    const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, includeDynamicBlocks: true, shopHomeConfig, skipNumCategories: stateFromStores1 };
    const merged = Object.assign(closure_1);
    return obj;
  }, items3);
  let closure_13 = tmp13;
  const items4 = [tmp7, tmp13];
  const tmp14 = stateFromStores1(() => {
    const obj = CollectiblesActionCreators;
    return !obj.areRequestOptionsEqual(closure_8, closure_13);
  }, items4);
  let closure_14 = tmp14;
  let flag3 = tmp9;
  const useHasExpiredShopBlocks = require("useHasExpiredShopBlocks").useHasExpiredShopBlocks;
  const tmp12 = stateFromStores1;
  const tmp15 = require("useHasExpiredShopBlocks");
  if (tmp9 == null) {
    flag3 = false;
  }
  hasExpiredShopBlocks = useHasExpiredShopBlocks(tmp4, flag3, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  const tmp12Result = tmp12(() => {
    let tmp = !hasExpiredShopBlocks;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - c6 < React4;
    }
    return tmp;
  }, items5);
  closure_16 = tmp12Result;
  const items6 = [flag2, stateFromStores, tmp9, tmp8, tmp6, tmp12Result, tmp10, tmp14, tmp13, HOME, memo];
  flag2(() => {
    const tmp = flag2;
    if (!tmp) {
      const tmp2 = stateFromStores;
      if (tmp2) {
        const tmp3 = c10;
        if (!tmp3) {
          const _Date = Date;
          const tmp9 = null != closure_9 && Date.now() - skipNumCategories < authStore;
          if (!tmp9) {
            const tmp10 = closure_14 || !closure_16 || closure_11;
            if (tmp10) {
              const obj = CollectiblesActionCreators;
              const collectiblesShopHome = obj.fetchCollectiblesShopHome(HOME, closure_13, memo);
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [HOME, tmp13, memo];
  const obj4 = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp3[4],
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores(() => {
      const obj = CollectiblesActionCreators;
      const collectiblesShopHome = obj.fetchCollectiblesShopHome(HOME, closure_13, memo);
    }, items7)
  };
  return obj4;
}
