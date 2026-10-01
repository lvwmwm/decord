// Module ID: 10201
// Function ID: 10202
// Name: useMaybeFetchCollectiblesCategoriesShared
// Dependencies: [32, 19, 4750, 6962, 1076, 504, 7008, 6961, 2]
// Exports: useMaybeFetchCollectiblesCategoriesShared

// Module 10201 (useMaybeFetchCollectiblesCategoriesShared)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7008 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
({ useEffect: c3, useCallback: closure_4 } = react);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: metroImportDefault, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: metroImportAll } = CollectiblesShopConstants);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = function useMaybeFetchCollectiblesCategoriesShared(arg0, noOp, arg2, skipFetch) {
  let closure_0;
  let closure_2;
  let first;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = arg0;
  dependencyMap = noOp;
  _slicedToArray = arg2;
  let flag = skipFetch;
  if (skipFetch === undefined) {
    flag = false;
  }
  let hasLoadedExperiments;
  let closure_6;
  let obj = require("get initialized");
  let items = [hasLoadedExperiments];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  let obj2 = require("get initialized");
  const items1 = [closure_6];
  [first, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = obj2.useStateFromStoresArray(items1, () => {
    let lastErrorTimestamp;
    const items = [, , , , , , ];
    ({ isFetchingCategories: arr[0], lastFetchOptions: arr[1], error: arr[2], lastErrorTimestamp } = closure_6);
    if (lastErrorTimestamp == null) {
      lastErrorTimestamp = 0;
    }
    items[3] = lastErrorTimestamp;
    let num = tmp.lastSuccessfulFetch;
    if (num == null) {
      num = 0;
    }
    items[4] = num;
    ({ categories: arr[5], skipNumCategories: arr[6] } = closure_6);
    return items;
  });
  hasLoadedExperiments = tmp4;
  closure_6 = tmp5;
  let closure_7 = tmp6;
  let closure_8 = tmp7;
  const skipNumCategories = tmp9;
  const items2 = [flag, stateFromStores, tmp4, tmp7, arg0, tmp5, tmp6, noOp, arg2, tmp9];
  flag(() => {
    const tmp = flag;
    if (!tmp) {
      const tmp2 = stateFromStores;
      if (tmp2) {
        if (!CollectiblesCategoryStore.isFetchingCategories) {
          const _Date = Date;
          const _Boolean = Boolean;
          Date.now() - metroImportDefault < metroImportAll;
          if (!Boolean(closure_6)) {
            const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, skipNumCategories };
            const merged = Object.assign(closure_0);
            const obj2 = CollectiblesActionCreators;
            const result = obj2.areRequestOptionsEqual(hasLoadedExperiments, obj);
            const _Date2 = Date;
            let tmp20 = !(!result);
            const tmp12 = require;
            if (result) {
              tmp20 = Date.now() - metroImportAll < metroImportDefault;
            }
            if (!tmp20) {
              const tmp12Result = tmp12(6961);
              const collectiblesCategories = tmp12Result.fetchCollectiblesCategories(obj, noOp, closure_2);
            }
          }
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp9];
  const obj3 = {
    isFetching: first,
    categories: tmp8,
    fetchCategoriesError: tmp5,
    refreshCategories: stateFromStores(() => {
      const obj = { variantsReturnStyle: ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP, includeBundles: true, skipNumCategories };
      const merged = Object.assign(closure_0);
      const obj2 = CollectiblesActionCreators;
      const collectiblesCategories = obj2.fetchCollectiblesCategories(obj, undefined, closure_2);
    }, items3)
  };
  return obj3;
};
