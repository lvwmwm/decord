// Module ID: 10198
// Function ID: 10199
// Name: useFetchCollectiblesCategoriesAndPurchases
// Dependencies: [32, 19, 4750, 6977, 563, 6961, 10199, 2]
// Exports: useGetOrFetchCollectiblesCategoriesAndPurchases, useGetOrFetchPurchase, useGetOrFetchPurchases

// Module 10198 (useFetchCollectiblesCategoriesAndPurchases)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import useMaybeFetchCollectiblesCategoriesDefault from "useMaybeFetchCollectiblesCategories" /* 10199 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4750 */;
import CollectiblesPurchaseStore_mod from "CollectiblesPurchaseStore" /* 6977 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function useFetchPurchases(flag) {
  let ref3;
  if (flag === undefined) {
    flag = false;
  }
  let isFetching;
  let fetchPurchasesError;
  let ref;
  let ref2;
  CollectiblesPurchaseStore = undefined;
  let obj = flag(isFetching[4]);
  let items = [ref2];
  const stateFromStores = obj.useStateFromStores(items, () => ref2.hasLoadedExperiments);
  const items1 = [CollectiblesPurchaseStore];
  const obj2 = flag(isFetching[4]);
  const tmp2 = fetchPurchasesError(obj2.useStateFromStoresArray(items1, () => {
    const items = [, , , , , ];
    ({ isFetching: arr[0], isClaiming: arr[1], fetchError: arr[2], claimError: arr[3], purchases: arr[4], hasPreviouslyFetched: arr[5] } = ref3);
    return items;
  }), 6);
  isFetching = tmp2[0];
  fetchPurchasesError = tmp2[2];
  const hasPreviouslyFetched = tmp2[5];
  const isClaiming = tmp2[1];
  const claimError = tmp2[3];
  const purchases = tmp2[4];
  ref = ref(CollectiblesPurchaseStore.hasPreviouslyFetched);
  const items2 = [hasPreviouslyFetched];
  hasPreviouslyFetched(() => {
    ref.current = hasPreviouslyFetched;
  }, items2);
  ref2 = ref(CollectiblesPurchaseStore.fetchError);
  const items3 = [fetchPurchasesError];
  hasPreviouslyFetched(() => {
    ref2.current = fetchPurchasesError;
  }, items3);
  CollectiblesPurchaseStore = ref(CollectiblesPurchaseStore.isFetching);
  const items4 = [isFetching];
  hasPreviouslyFetched(() => {
    ref3.current = isFetching;
  }, items4);
  const items5 = [flag, stateFromStores];
  hasPreviouslyFetched(() => {
    let current = !stateFromStores;
    if (stateFromStores) {
      current = ref3.current;
    }
    if (!current) {
      const current2 = true === flag && ref.current && null == ref2.current;
      current = current2;
    }
    if (!current) {
      const obj = CollectiblesActionCreators;
      const collectiblesPurchases = obj.fetchCollectiblesPurchases();
    }
  }, items5);
  return { isClaiming, fetchPurchasesError, claimError, isFetching, purchases, hasPreviouslyFetched };
}
function useFetchCollectiblesCategoriesAndPurchases(paymentGateway, arg1) {
  let categories;
  let claimError;
  let countryCode;
  let fetchCategoriesError;
  let fetchPurchasesError;
  let isClaiming;
  let logPerf;
  let noOp;
  let refreshCategories;
  let skipFetch;
  paymentGateway = undefined;
  if (paymentGateway != null) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  const obj = { paymentGateway, noOp, logPerf, countryCode, skipFetch };
  noOp = undefined;
  const tmp2 = useMaybeFetchCollectiblesCategoriesDefault;
  if (paymentGateway != null) {
    noOp = paymentGateway.noOp;
  }
  logPerf = undefined;
  if (paymentGateway != null) {
    logPerf = paymentGateway.logPerf;
  }
  countryCode = undefined;
  if (paymentGateway != null) {
    countryCode = paymentGateway.countryCode;
  }
  skipFetch = undefined;
  if (paymentGateway != null) {
    skipFetch = paymentGateway.skipFetch;
  }
  const tmp2Result = tmp2(obj, arg1);
  const isFetching = tmp2Result.isFetching;
  let stalePurchasesOK;
  ({ categories, fetchCategoriesError, refreshCategories } = tmp2Result);
  const tmp8 = useFetchPurchases;
  if (paymentGateway != null) {
    stalePurchasesOK = paymentGateway.stalePurchasesOK;
  }
  const tmp8Result = tmp8(stalePurchasesOK);
  const isFetching2 = tmp8Result.isFetching;
  let tmp11 = isFetching;
  ({ isClaiming, fetchPurchasesError, claimError } = tmp8Result);
  if (!isFetching) {
    tmp11 = isFetching2;
  }
  return { isFetching: tmp11, isFetchingCategories: isFetching, isFetchingPurchases: isFetching2, isClaiming, categories, purchases: tmp8Result.purchases, fetchCategoriesError, fetchPurchasesError, claimError, refreshCategories, hasPreviouslyFetched: tmp8Result.hasPreviouslyFetched };
}
({ useEffect: closure_4, useRef: hasOwnProperty } = react);
let CollectiblesPurchaseStore = CollectiblesPurchaseStore_mod;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx");

export default useFetchCollectiblesCategoriesAndPurchases;
export { useFetchPurchases };
export const useGetOrFetchPurchases = function useGetOrFetchPurchases() {
  return useFetchPurchases(true);
};
export const useGetOrFetchPurchase = function useGetOrFetchPurchase(selectedGiftingPromotionReward, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const purchases = useFetchPurchases(flag).purchases;
  let value;
  if (null != selectedGiftingPromotionReward) {
    value = purchases.get(selectedGiftingPromotionReward);
  }
  return value;
};
export const useGetOrFetchCollectiblesCategoriesAndPurchases = function useGetOrFetchCollectiblesCategoriesAndPurchases(arg0) {
  let obj = arg0;
  const tmp = useFetchCollectiblesCategoriesAndPurchases;
  if (arg0 == null) {
    obj = {};
  }
  const obj2 = { stalePurchasesOK: true };
  const merged = Object.assign(obj);
  return tmp(obj2);
};
