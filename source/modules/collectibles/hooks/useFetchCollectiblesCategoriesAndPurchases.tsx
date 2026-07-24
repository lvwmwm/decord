// Module ID: 7948
// Function ID: 62960
// Name: useFetchPurchases
// Dependencies: [57, 31, 4044, 6790, 624, 6773, 7949, 2]
// Exports: useGetOrFetchCollectiblesCategoriesAndPurchases, useGetOrFetchPurchase, useGetOrFetchPurchases

// Module 7948 (useFetchPurchases)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

let closure_4;
let closure_5;
const require = arg1;
function useFetchPurchases(flag) {
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let isFetching;
  let fetchPurchasesError;
  let hasPreviouslyFetched;
  let callback;
  let _isNativeReflectConstruct;
  let closure_7;
  let items = [_isNativeReflectConstruct];
  stateFromStores = flag(isFetching[4]).useStateFromStores(items, () => ref2.hasLoadedExperiments);
  let obj = flag(isFetching[4]);
  const items1 = [closure_7];
  const isClaiming = fetchPurchasesError(flag(isFetching[4]).useStateFromStoresArray(items1, () => {
    const items = [closure_7.isFetching, closure_7.isClaiming, closure_7.fetchError, closure_7.claimError, closure_7.purchases, closure_7.hasPreviouslyFetched];
    return items;
  }), 6);
  isFetching = isClaiming[0];
  fetchPurchasesError = isClaiming[2];
  hasPreviouslyFetched = isClaiming[5];
  callback = callback(closure_7.hasPreviouslyFetched);
  const items2 = [hasPreviouslyFetched];
  hasPreviouslyFetched(() => {
    closure_5.current = hasPreviouslyFetched;
  }, items2);
  _isNativeReflectConstruct = callback(closure_7.fetchError);
  const items3 = [fetchPurchasesError];
  hasPreviouslyFetched(() => {
    _isNativeReflectConstruct.current = fetchPurchasesError;
  }, items3);
  closure_7 = callback(closure_7.isFetching);
  const items4 = [isFetching];
  hasPreviouslyFetched(() => {
    closure_7.current = isFetching;
  }, items4);
  const items5 = [flag, stateFromStores];
  hasPreviouslyFetched(() => {
    let current = !stateFromStores;
    if (!current) {
      current = closure_7.current;
    }
    if (!current) {
      let current2 = true === flag;
      if (current2) {
        current2 = ref.current;
      }
      if (current2) {
        current2 = null == ref2.current;
      }
      current = current2;
    }
    if (!current) {
      const collectiblesPurchases = flag(isFetching[5]).fetchCollectiblesPurchases();
      const obj = flag(isFetching[5]);
    }
  }, items5);
  return { isClaiming: isClaiming[1], fetchPurchasesError, claimError: isClaiming[3], isFetching, purchases: isClaiming[4], hasPreviouslyFetched };
}
function useFetchCollectiblesCategoriesAndPurchases(paymentGateway) {
  let categories;
  let claimError;
  let fetchCategoriesError;
  let fetchPurchasesError;
  let isClaiming;
  let refreshCategories;
  paymentGateway = undefined;
  if (null != paymentGateway) {
    paymentGateway = paymentGateway.paymentGateway;
  }
  let obj = { paymentGateway };
  let noOp;
  if (null != paymentGateway) {
    noOp = paymentGateway.noOp;
  }
  obj.noOp = noOp;
  let logPerf;
  if (null != paymentGateway) {
    logPerf = paymentGateway.logPerf;
  }
  obj.logPerf = logPerf;
  let countryCode;
  if (null != paymentGateway) {
    countryCode = paymentGateway.countryCode;
  }
  obj.countryCode = countryCode;
  const tmp2Result = importDefault(7949)(obj, arg1);
  const isFetching = tmp2Result.isFetching;
  let stalePurchasesOK;
  ({ categories, fetchCategoriesError, refreshCategories } = tmp2Result);
  if (null != paymentGateway) {
    stalePurchasesOK = paymentGateway.stalePurchasesOK;
  }
  const tmp7Result = useFetchPurchases(stalePurchasesOK);
  const isFetching2 = tmp7Result.isFetching;
  obj = {};
  let tmp10 = isFetching;
  ({ isClaiming, fetchPurchasesError, claimError } = tmp7Result);
  if (!isFetching) {
    tmp10 = isFetching2;
  }
  obj.isFetching = tmp10;
  obj.isFetchingCategories = isFetching;
  obj.isFetchingPurchases = isFetching2;
  obj.isClaiming = isClaiming;
  obj.categories = categories;
  obj.purchases = tmp7Result.purchases;
  obj.fetchCategoriesError = fetchCategoriesError;
  obj.fetchPurchasesError = fetchPurchasesError;
  obj.claimError = claimError;
  obj.refreshCategories = refreshCategories;
  obj.hasPreviouslyFetched = tmp7Result.hasPreviouslyFetched;
  return obj;
}
({ useEffect: closure_4, useRef: closure_5 } = result);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx");

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
  obj = {};
  if (null == arg0) {
    obj = {};
  }
  const merged = Object.assign(obj);
  obj["stalePurchasesOK"] = true;
  return useFetchCollectiblesCategoriesAndPurchases(obj);
};
