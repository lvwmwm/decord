// Module ID: 16116
// Function ID: 16117
// Name: useMaybeFetchShopHome
// Dependencies: [32, 19, 4977, 7257, 7299, 1087, 558, 576, 504, 7302, 7256, 16117, 2]

// Module 16116 (useMaybeFetchShopHome)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7302 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore_mod from "ExperimentStore" /* 4977 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import CollectiblesShopHomeStore from "CollectiblesShopHomeStore" /* 7299 */;
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
let ExperimentStore = ExperimentStore_mod;
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: c9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: c10 } = CollectiblesShopConstants);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  let hasLoadedExperiments;
  let skipNumCategories;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp5;
  let tmp6;
  let tmp9;
  _require = arg0;
  dependencyMap = arg2;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(35);
  const tmp4 = undefined !== arg3 && arg3;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ExperimentStore];
    class C {
      constructor() {
        return hasLoadedExperiments.hasLoadedExperiments;
      }
    }
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = C;
    tmp5 = items;
    tmp6 = C;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [skipNumCategories];
    class C {
      constructor() {
        return hasLoadedExperiments.hasLoadedExperiments;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp12;
    tmp10 = tmp12;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [closure_8];
    class C {
      constructor() {
        return hasLoadedExperiments.hasLoadedExperiments;
      }
    }
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const fn = function y() {
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
    };
    cResult[5] = arg0;
    class C {
      constructor() {
        return hasLoadedExperiments.hasLoadedExperiments;
      }
    }
    cResult[6] = fn;
    tmp16 = fn;
  } else {
    tmp16 = cResult[6];
  }
  const tmpResult4 = tmp(504);
  const tmp17 = stateFromStores(tmpResult4.useStateFromStoresArray(tmp14, tmp16), 8);
  const first = tmp17[0];
  let closure_3 = tmp20;
  let closure_4 = tmp22;
  let closure_5 = tmp23;
  ExperimentStore = tmp24;
  if (cResult[7] === arg1) {
    if (cResult[8] === tmp17[7]) {
      let tmp26;
      if (cResult[9] === stateFromStores1) {
        tmp26 = cResult[10];
      }
      skipNumCategories = tmp26;
      if (cResult[11] === tmp26) {
        let tmp28;
        if (cResult[12] === tmp17[3]) {
          tmp28 = cResult[13];
        }
        closure_8 = tmp30;
        class C {
          constructor() {
            return hasLoadedExperiments.hasLoadedExperiments;
          }
        }
        let flag = tmp23;
        const useHasExpiredShopBlocks = tmp31.useHasExpiredShopBlocks;
        if (tmp17[5] == null) {
          flag = false;
        }
        const hasExpiredShopBlocks = useHasExpiredShopBlocks(first, flag, tmp4);
        let tmp34 = !hasExpiredShopBlocks;
        if (tmp34) {
          let _Date = Date;
          tmp34 = Date.now() - tmp19 < closure_9;
        }
        closure_9 = tmp34;
        if (cResult[14] === stateFromStores) {
          if (cResult[15] === tmp34) {
            if (cResult[16] === tmp26) {
              if (cResult[17] === !tmp28) {
                if (cResult[18] === tmp17[4]) {
                  if (cResult[19] === tmp17[6]) {
                    if (cResult[20] === tmp17[5]) {
                      if (cResult[21] === tmp17[2]) {
                        if (cResult[22] === arg2) {
                          let tmp36;
                          let tmp37;
                          if (cResult[23] === arg0) {
                            tmp36 = cResult[24];
                            tmp37 = cResult[25];
                          }
                          closure_3(tmp37, tmp36);
                          class C {
                            constructor() {
                              return hasLoadedExperiments.hasLoadedExperiments;
                            }
                          }
                          class G {
                            constructor() {
                              const obj = CollectiblesActionCreators;
                              const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, skipNumCategories, closure_1);
                            }
                          }
                          cResult[26] = tmp26;
                          cResult[27] = arg2;
                          cResult[28] = arg0;
                          cResult[29] = G;
                          class U {
                            constructor() {
                              const tmp = stateFromStores;
                              if (tmp) {
                                const tmp2 = closure_5;
                                if (!tmp2) {
                                  const _Date = Date;
                                  const tmp8 = null != closure_4 && Date.now() - closure_3 < authStore;
                                  if (!tmp8) {
                                    const tmp9 = closure_8 || !closure_9 || hasLoadedExperiments;
                                    if (tmp9) {
                                      const obj = CollectiblesActionCreators;
                                      const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, skipNumCategories, closure_1);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        class U {
          constructor() {
            const tmp = stateFromStores;
            if (tmp) {
              const tmp2 = closure_5;
              if (!tmp2) {
                const _Date = Date;
                const tmp8 = null != closure_4 && Date.now() - closure_3 < authStore;
                if (!tmp8) {
                  const tmp9 = closure_8 || !closure_9 || hasLoadedExperiments;
                  if (tmp9) {
                    const obj = CollectiblesActionCreators;
                    const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, skipNumCategories, closure_1);
                  }
                }
              }
            }
          }
        }
        const items3 = [stateFromStores, tmp17[5], tmp17[4], tmp17[2], tmp34, tmp17[6], !tmp28, tmp26, arg0, arg2];
        cResult[14] = stateFromStores;
        cResult[15] = tmp34;
        cResult[16] = tmp26;
        cResult[17] = !tmp28;
        cResult[18] = tmp17[4];
        cResult[19] = tmp17[6];
        cResult[20] = tmp17[5];
        cResult[21] = tmp17[2];
        cResult[22] = arg2;
        cResult[23] = arg0;
        cResult[24] = items3;
        cResult[25] = U;
        tmp37 = U;
        tmp36 = items3;
      }
      class C {
        constructor() {
          return hasLoadedExperiments.hasLoadedExperiments;
        }
      }
      cResult[11] = tmp26;
      cResult[12] = tmp17[3];
      cResult[13] = tmp29;
      tmp28 = tmp29;
    }
  }
  const obj2 = { variantsReturnStyle: tmp(7302).ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, includeDynamicBlocks: true, shopHomeConfig: tmp17[7], skipNumCategories: stateFromStores1 };
  const merged = Object.assign(arg1);
  cResult[7] = arg1;
  cResult[8] = tmp17[7];
  cResult[9] = stateFromStores1;
  cResult[10] = obj2;
  tmp26 = obj2;
}) : (function useMaybeFetchCollectiblesShopHome(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp4;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  _slicedToArray = arg2;
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
  let closure_12 = tmp13;
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
  const items6 = [stateFromStores, tmp9, tmp8, tmp6, tmp12Result, tmp10, tmp14, tmp13, arg0, arg2];
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
            const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
          }
        }
      }
    }
  }, items6);
  const items7 = [arg0, tmp13, arg2];
  const obj4 = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: tmp4,
    refreshShopHome: stateFromStores1(() => {
      const obj = CollectiblesActionCreators;
      const collectiblesShopHome = obj.fetchCollectiblesShopHome(closure_0, closure_12, closure_2);
    }, items7)
  };
  return obj4;
});
const result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = tmp4;
