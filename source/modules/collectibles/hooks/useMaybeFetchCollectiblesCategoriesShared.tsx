// Module ID: 7851
// Function ID: 62585
// Name: useMaybeFetchCollectiblesCategoriesShared
// Dependencies: []
// Exports: useMaybeFetchCollectiblesCategoriesShared

// Module 7851 (useMaybeFetchCollectiblesCategoriesShared)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useCallback: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_7, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx");

export const useMaybeFetchCollectiblesCategoriesShared = function useMaybeFetchCollectiblesCategoriesShared(arg0, noOp, arg2) {
  noOp = arg0;
  const dependencyMap = noOp;
  const callback = arg2;
  let obj = noOp(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp4.hasLoadedExperiments);
  const items1 = [closure_6];
  const tmp2 = callback(noOp(dependencyMap[5]).useStateFromStoresArray(items1, () => {
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
  const tmp3 = tmp2[1];
  closure_5 = tmp4;
  closure_6 = tmp5;
  const tmp6 = tmp2[4];
  const tmp7 = tmp2[6];
  const items2 = [stateFromStores, tmp3, tmp6, arg0, tmp2[2], tmp2[3], noOp, arg2, tmp7];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!tmp5.isFetchingCategories) {
        const _Date = Date;
        const _Boolean = Boolean;
        const tmp5 = Date.now() - tmp5 < tmp7;
        if (!Boolean(tmp7)) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["variantsReturnStyle"] = arg0(arg1[6]).ShopVariantsReturnStyle.VARIANTS_GROUP;
          obj["includeBundles"] = true;
          obj["skipNumCategories"] = arg0;
          const tmp14 = !arg0(arg1[7]).areRequestOptionsEqual(tmp3, obj);
          const _Date2 = Date;
          let tmp17 = !tmp14;
          if (!tmp14) {
            tmp17 = Date.now() - tmp6 < tmp6;
          }
          if (!tmp17) {
            const collectiblesCategories = arg0(arg1[7]).fetchCollectiblesCategories(obj, arg1, arg2);
            const obj3 = arg0(arg1[7]);
          }
          const obj2 = arg0(arg1[7]);
        }
      }
    }
  }, items2);
  const items3 = [arg0, arg2, tmp7];
  obj = {
    isFetching: tmp2[0],
    categories: tmp2[5],
    fetchCategoriesError: tmp4,
    refreshCategories: tmp3(() => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["variantsReturnStyle"] = arg0(arg1[6]).ShopVariantsReturnStyle.VARIANTS_GROUP;
      obj["includeBundles"] = true;
      obj["skipNumCategories"] = tmp7;
      const collectiblesCategories = arg0(arg1[7]).fetchCollectiblesCategories(obj, undefined, arg2);
    }, items3)
  };
  return obj;
};
