// Module ID: 7951
// Function ID: 62976
// Name: useMaybeFetchCollectiblesCategoriesShared
// Dependencies: [57, 31, 4044, 6774, 655, 566, 6823, 6773, 2]
// Exports: useMaybeFetchCollectiblesCategoriesShared

// Module 7951 (useMaybeFetchCollectiblesCategoriesShared)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import items from "items";

let closure_3;
let closure_4;
let closure_7;
let closure_8;
const require = arg1;
({ useEffect: closure_3, useCallback: closure_4 } = result);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_7, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_8 } = items);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = function useMaybeFetchCollectiblesCategoriesShared(arg0, noOp, arg2) {
  const _require = arg0;
  const dependencyMap = noOp;
  const callback = arg2;
  let obj = _require(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => tmp4.hasLoadedExperiments);
  const items1 = [closure_6];
  const tmp2 = callback(_require(566).useStateFromStoresArray(items1, () => {
    let lastErrorTimestamp;
    const items = [, , , , , , ];
    ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = tmp5);
    let num = 0;
    if (null != lastErrorTimestamp) {
      num = lastErrorTimestamp;
    }
    items[3] = num;
    const lastSuccessfulFetch = tmp5.lastSuccessfulFetch;
    let num2 = 0;
    if (null != lastSuccessfulFetch) {
      num2 = lastSuccessfulFetch;
    }
    items[4] = num2;
    ({ categories: arr[5], skipNumCategories: arr[6] } = tmp5);
    return items;
  }), 7);
  const callback2 = tmp3;
  _isNativeReflectConstruct = tmp4;
  closure_6 = tmp5;
  let closure_7 = tmp6;
  let closure_8 = tmp7;
  const items2 = [stateFromStores, tmp2[1], tmp2[4], arg0, tmp2[2], tmp2[3], noOp, arg2, tmp2[6]];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!tmp5.isFetchingCategories) {
        const _Date = Date;
        const _Boolean = Boolean;
        tmp5 = Date.now() - tmp5 < closure_8;
        if (!Boolean(_isNativeReflectConstruct)) {
          const obj = {};
          const merged = Object.assign(callback);
          obj["variantsReturnStyle"] = callback(noOp[6]).ShopVariantsReturnStyle.VARIANTS_GROUP;
          obj["includeBundles"] = true;
          obj["skipNumCategories"] = closure_8;
          const tmp14 = !callback(noOp[7]).areRequestOptionsEqual(closure_4, obj);
          const _Date2 = Date;
          let tmp17 = !tmp14;
          if (!tmp14) {
            tmp17 = Date.now() - closure_7 < closure_7;
          }
          if (!tmp17) {
            const collectiblesCategories = callback(noOp[7]).fetchCollectiblesCategories(obj, noOp, _slicedToArray);
            const obj3 = callback(noOp[7]);
          }
          const obj2 = callback(noOp[7]);
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp2[6]];
  obj = {
    isFetching: tmp2[0],
    categories: tmp2[5],
    fetchCategoriesError: tmp4,
    refreshCategories: callback2(() => {
      const obj = {};
      const merged = Object.assign(callback);
      obj["variantsReturnStyle"] = callback(noOp[6]).ShopVariantsReturnStyle.VARIANTS_GROUP;
      obj["includeBundles"] = true;
      obj["skipNumCategories"] = closure_8;
      const collectiblesCategories = callback(noOp[7]).fetchCollectiblesCategories(obj, undefined, _slicedToArray);
    }, items3)
  };
  return obj;
};
