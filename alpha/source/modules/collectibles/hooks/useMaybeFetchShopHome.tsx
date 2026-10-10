// Module ID: 16178
// Function ID: 16179
// Name: useMaybeFetchShopHome
// Dependencies: [32, 19, 5016, 7263, 7305, 1087, 558, 576, 504, 7308, 7262, 16179, 2]

// Module 16178 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7262 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7308 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 5016 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7263 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7305 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2, arg3, arg4) {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_4;
  let closure_5;
  let hasLoadedExperiments;
  let skipNumCategories;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  _require = arg0;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(36);
  _slicedToArray = undefined !== arg4 && arg4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    class E {
      constructor() {
        return closure_6.hasLoadedExperiments;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = E;
    tmp4 = items;
    tmp5 = E;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp10 = CollectiblesCategoryStore;
    const items1 = [CollectiblesCategoryStore];
    class R {
      constructor() {
        return closure_7.skipNumCategories;
      }
    }
    cResult[2] = items1;
    cResult[3] = R;
    tmp9 = R;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [CollectiblesShopHomeStore];
    class R {
      constructor() {
        return closure_7.skipNumCategories;
      }
    }
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class L {
      constructor() {
        obj = closure_8;
        tmp = closure_0;
        items = [, , , , , , , ];
        items[0] = closure_8.getShopBlocks(closure_0);
        num = closure_8.getLastSuccessfulFetch(closure_0);
        if (num == null) {
          num = 0;
        }
        items[1] = num;
        num2 = obj.getLastErrorTimestamp(tmp);
        if (num2 == null) {
          num2 = 0;
        }
        items[2] = num2;
        items[3] = obj.getLastFetchOptions(tmp);
        items[4] = obj.getFetchShopHomeError(tmp);
        items[5] = obj.getIsFetchingShopHome(tmp);
        items[6] = obj.getHasKnownStaleData(tmp);
        items[7] = obj.getShopHomeConfigOverride();
        return items;
      }
    }
    cResult[5] = arg0;
    class R {
      constructor() {
        return closure_7.skipNumCategories;
      }
    }
    cResult[6] = L;
    tmp14 = L;
  } else {
    class L {
      constructor() {
        obj = closure_8;
        tmp = closure_0;
        items = [, , , , , , , ];
        items[0] = closure_8.getShopBlocks(closure_0);
        num = closure_8.getLastSuccessfulFetch(closure_0);
        if (num == null) {
          num = 0;
        }
        items[1] = num;
        num2 = obj.getLastErrorTimestamp(tmp);
        if (num2 == null) {
          num2 = 0;
        }
        items[2] = num2;
        items[3] = obj.getLastFetchOptions(tmp);
        items[4] = obj.getFetchShopHomeError(tmp);
        items[5] = obj.getIsFetchingShopHome(tmp);
        items[6] = obj.getHasKnownStaleData(tmp);
        items[7] = obj.getShopHomeConfigOverride();
        return items;
      }
    }
  }
  const tmpResult4 = tmp(504);
  [, , closure_4, , closure_5, ExperimentStore, CollectiblesCategoryStore, tmp16] = tmpResult4.useStateFromStoresArray(tmp12, tmp14);
  if (cResult[7] === arg1) {
    class L {
      constructor() {
        obj = closure_8;
        tmp = closure_0;
        items = [, , , , , , , ];
        items[0] = closure_8.getShopBlocks(closure_0);
        num = closure_8.getLastSuccessfulFetch(closure_0);
        if (num == null) {
          num = 0;
        }
        items[1] = num;
        num2 = obj.getLastErrorTimestamp(tmp);
        if (num2 == null) {
          num2 = 0;
        }
        items[2] = num2;
        items[3] = obj.getLastFetchOptions(tmp);
        items[4] = obj.getFetchShopHomeError(tmp);
        items[5] = obj.getIsFetchingShopHome(tmp);
        items[6] = obj.getHasKnownStaleData(tmp);
        items[7] = obj.getShopHomeConfigOverride();
        return items;
      }
    }
  }
  const obj2 = { variantsReturnStyle: tmp(7308).ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, includeDynamicBlocks: true, shopHomeConfig: tmp16, skipNumCategories: stateFromStores1 };
  const merged = Object.assign(arg1);
  cResult[7] = arg1;
  cResult[8] = tmp16;
  cResult[9] = stateFromStores1;
  cResult[10] = obj2;
}) : (function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let hasLoadedExperiments;
  let tmp4;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
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
    const items = [CollectiblesShopHomeStore.getShopBlocks(closure_0), , , , , , , ];
    let num = CollectiblesShopHomeStore.getLastSuccessfulFetch(closure_0);
    if (num == null) {
      num = 0;
    }
    items[1] = num;
    let num2 = obj.getLastErrorTimestamp(tmp);
    if (num2 == null) {
      num2 = 0;
    }
    items[2] = num2;
    items[3] = CollectiblesShopHomeStore.getLastFetchOptions(closure_0);
    items[4] = CollectiblesShopHomeStore.getFetchShopHomeError(closure_0);
    items[5] = CollectiblesShopHomeStore.getIsFetchingShopHome(closure_0);
    items[6] = CollectiblesShopHomeStore.getHasKnownStaleData(closure_0);
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
  const items6 = [flag2, stateFromStores, tmp9, tmp8, tmp6, tmp12Result, tmp10, tmp14, tmp13, arg0, arg2];
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
              const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_13, closure_2);
            }
          }
        }
      }
    }
  }, items6);
  const items7 = [arg0, tmp13, arg2];
  const obj4 = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp3[4],
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores(() => {
      const obj = CollectiblesActionCreators;
      const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_13, closure_2);
    }, items7)
  };
  return obj4;
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = tmp4;
