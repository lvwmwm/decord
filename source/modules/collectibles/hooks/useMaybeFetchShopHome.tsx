// Module ID: 14475
// Function ID: 110587
// Name: useMaybeFetchCollectiblesShopHome
// Dependencies: [57, 31, 4044, 6774, 6821, 655, 566, 6824, 6773, 14476, 2]
// Exports: useMaybeFetchCollectiblesShopHome

// Module 14475 (useMaybeFetchCollectiblesShopHome)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import items from "items";

let closure_10;
let closure_3;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
({ useEffect: closure_3, useCallback: closure_4, useMemo: closure_5 } = result);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_10 } = items);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  let flag = arg3;
  const _require = HOME;
  const dependencyMap = arg1;
  const callback = memo;
  if (arg3 === undefined) {
    flag = false;
  }
  let stateFromStores;
  let stateFromStores1;
  let callback2;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let hasExpiredShopBlocks;
  let c15;
  let obj = _require(566);
  let items = [c6];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.hasLoadedExperiments);
  const items1 = [c7];
  stateFromStores1 = _require(566).useStateFromStores(items1, () => _undefined2.skipNumCategories);
  const obj2 = _require(566);
  const items2 = [c8];
  const tmp3 = callback(_require(566).useStateFromStoresArray(items2, () => {
    const items = [_undefined3.getShopBlocks(closure_0), , , , , , , ];
    const lastSuccessfulFetch = _undefined3.getLastSuccessfulFetch(closure_0);
    let num = 0;
    if (null != lastSuccessfulFetch) {
      num = lastSuccessfulFetch;
    }
    items[1] = num;
    const lastErrorTimestamp = _undefined3.getLastErrorTimestamp(closure_0);
    let num2 = 0;
    if (null != lastErrorTimestamp) {
      num2 = lastErrorTimestamp;
    }
    items[2] = num2;
    items[3] = _undefined3.getLastFetchOptions(closure_0);
    items[4] = _undefined3.getFetchShopHomeError(closure_0);
    items[5] = _undefined3.getIsFetchingShopHome(closure_0);
    items[6] = _undefined3.getHasKnownStaleData(closure_0);
    items[7] = _undefined3.getShopHomeConfigOverride();
    return items;
  }), 8);
  const first = tmp3[0];
  callback2 = tmp5;
  c6 = tmp6;
  c7 = tmp7;
  c8 = tmp8;
  c9 = tmp9;
  c10 = tmp10;
  c11 = tmp11;
  const items3 = [arg1, tmp3[7], stateFromStores1];
  const tmp12 = callback2(() => {
    const obj = {};
    const merged = Object.assign(dependencyMap);
    obj["variantsReturnStyle"] = HOME(6824).ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj["includeBundles"] = true;
    obj["includeDynamicBlocks"] = true;
    obj["shopHomeConfig"] = c11;
    obj["skipNumCategories"] = stateFromStores1;
    return obj;
  }, items3);
  c12 = tmp12;
  const items4 = [tmp3[3], tmp12];
  const tmp13 = callback2(() => !HOME(6773).areRequestOptionsEqual(c7, c12), items4);
  c13 = tmp13;
  const obj3 = _require(566);
  let tmp14 = null != tmp9;
  if (tmp14) {
    tmp14 = tmp9;
  }
  hasExpiredShopBlocks = _require(14476).useHasExpiredShopBlocks(first, tmp14, flag);
  const items5 = [tmp3[1], hasExpiredShopBlocks];
  const tmp16 = callback2(() => {
    let tmp = !hasExpiredShopBlocks;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - c5 < c9;
    }
    return tmp;
  }, items5);
  c15 = tmp16;
  const items6 = [stateFromStores, tmp3[5], tmp3[4], tmp3[2], tmp16, tmp3[6], tmp13, tmp12, HOME, memo];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!c9) {
        const _Date = Date;
        if (!tmp7) {
          let tmp8 = c13;
          if (!c13) {
            tmp8 = !c15;
          }
          if (!tmp8) {
            tmp8 = c10;
          }
          if (tmp8) {
            const collectiblesShopHome = HOME(6773).fetchCollectiblesShopHome(HOME, c12, _slicedToArray);
            const obj = HOME(6773);
          }
        }
        tmp7 = null != c8 && Date.now() - c6 < c10;
      }
    }
  }, items6);
  const items7 = [HOME, tmp12, memo];
  obj = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: first,
    refreshShopHome: stateFromStores1(() => {
      const collectiblesShopHome = HOME(6773).fetchCollectiblesShopHome(HOME, c12, _slicedToArray);
    }, items7)
  };
  return obj;
};
