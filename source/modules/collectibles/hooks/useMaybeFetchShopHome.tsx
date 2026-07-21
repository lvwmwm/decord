// Module ID: 14353
// Function ID: 108391
// Name: useMaybeFetchCollectiblesShopHome
// Dependencies: []
// Exports: useMaybeFetchCollectiblesShopHome

// Module 14353 (useMaybeFetchCollectiblesShopHome)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useCallback: closure_4, useMemo: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[1]);
({ COLLECTIBLES_SHOP_CACHE_DURATION_MS: closure_9, COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchShopHome.tsx");

export const useMaybeFetchCollectiblesShopHome = function useMaybeFetchCollectiblesShopHome(HOME, arg1, memo) {
  let flag = arg3;
  arg1 = HOME;
  const dependencyMap = arg1;
  const callback = memo;
  if (arg3 === undefined) {
    flag = false;
  }
  let stateFromStores;
  let stateFromStores1;
  let tmp5;
  let closure_6;
  let closure_7;
  let closure_8;
  let tmp9;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let hasExpiredShopBlocks;
  let tmp16;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => tmp6.hasLoadedExperiments);
  const items1 = [closure_7];
  stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => tmp7.skipNumCategories);
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_8];
  const tmp3 = callback(arg1(dependencyMap[6]).useStateFromStoresArray(items2, () => {
    const items = [tmp8.getShopBlocks(arg0), , , , , , , ];
    const lastSuccessfulFetch = tmp8.getLastSuccessfulFetch(arg0);
    let num = 0;
    if (null != lastSuccessfulFetch) {
      num = lastSuccessfulFetch;
    }
    items[1] = num;
    const lastErrorTimestamp = tmp8.getLastErrorTimestamp(arg0);
    let num2 = 0;
    if (null != lastErrorTimestamp) {
      num2 = lastErrorTimestamp;
    }
    items[2] = num2;
    items[3] = tmp8.getLastFetchOptions(arg0);
    items[4] = tmp8.getFetchShopHomeError(arg0);
    items[5] = tmp8.getIsFetchingShopHome(arg0);
    items[6] = tmp8.getHasKnownStaleData(arg0);
    items[7] = tmp8.getShopHomeConfigOverride();
    return items;
  }), 8);
  const first = tmp3[0];
  tmp5 = tmp3[1];
  closure_6 = tmp6;
  closure_7 = tmp7;
  closure_8 = tmp8;
  tmp9 = tmp3[5];
  tmp10 = tmp3[6];
  tmp11 = tmp3[7];
  const items3 = [arg1, tmp11, stateFromStores1];
  tmp12 = tmp5(() => {
    const obj = {};
    const merged = Object.assign(arg1);
    obj["variantsReturnStyle"] = arg0(arg1[7]).ShopVariantsReturnStyle.VARIANTS_GROUP;
    obj["includeBundles"] = true;
    obj["includeDynamicBlocks"] = true;
    obj["shopHomeConfig"] = tmp11;
    obj["skipNumCategories"] = stateFromStores1;
    return obj;
  }, items3);
  const items4 = [tmp3[3], tmp12];
  tmp13 = tmp5(() => !arg0(arg1[8]).areRequestOptionsEqual(tmp7, tmp12), items4);
  const obj3 = arg1(dependencyMap[6]);
  let tmp14 = null != tmp9;
  if (tmp14) {
    tmp14 = tmp9;
  }
  hasExpiredShopBlocks = arg1(dependencyMap[9]).useHasExpiredShopBlocks(first, tmp14, flag);
  const items5 = [tmp5, hasExpiredShopBlocks];
  tmp16 = tmp5(() => {
    let tmp = !hasExpiredShopBlocks;
    if (tmp) {
      const _Date = Date;
      tmp = Date.now() - tmp5 < tmp9;
    }
    return tmp;
  }, items5);
  const items6 = [stateFromStores, tmp9, tmp3[4], tmp3[2], tmp16, tmp10, tmp13, tmp12, HOME, memo];
  stateFromStores(() => {
    if (stateFromStores) {
      if (!tmp9) {
        const _Date = Date;
        if (!tmp7) {
          let tmp8 = tmp13;
          if (!tmp13) {
            tmp8 = !tmp16;
          }
          if (!tmp8) {
            tmp8 = tmp10;
          }
          if (tmp8) {
            const collectiblesShopHome = arg0(arg1[8]).fetchCollectiblesShopHome(arg0, tmp12, arg2);
            const obj = arg0(arg1[8]);
          }
        }
        const tmp7 = null != tmp8 && Date.now() - null < tmp10;
      }
    }
  }, items6);
  const items7 = [HOME, tmp12, memo];
  obj = {
    isFetchingShopHome: tmp9,
    fetchShopHomeError: tmp8,
    shopBlocks: first,
    refreshShopHome: stateFromStores1(() => {
      const collectiblesShopHome = arg0(arg1[8]).fetchCollectiblesShopHome(arg0, tmp12, arg2);
    }, items7)
  };
  return obj;
};
