// Module ID: 7124
// Function ID: 57254
// Name: useIsEligibleForBogoOffer
// Dependencies: []
// Exports: useIsEligibleForBogoOffer

// Module 7124 (useIsEligibleForBogoOffer)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const PremiumTypes = arg1(dependencyMap[3]).PremiumTypes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = arg1(dependencyMap[4]);
  const premiumTrialOffer = arg1(dependencyMap[5]).usePremiumTrialOffer();
  const obj4 = arg1(dependencyMap[5]);
  const premiumDiscountOffer = arg1(dependencyMap[6]).usePremiumDiscountOffer();
  const obj5 = arg1(dependencyMap[6]);
  const isPaymentsBlocked = arg1(dependencyMap[7]).useIsPaymentsBlocked();
  const obj6 = arg1(dependencyMap[7]);
  const forceUpdate = arg1(dependencyMap[8]).useForceUpdate();
  const arg1 = forceUpdate;
  let valueOfResult = null;
  if (null != stateFromStores) {
    const endDate = stateFromStores.endDate;
    valueOfResult = endDate.valueOf();
  }
  const dependencyMap = valueOfResult;
  const items2 = [valueOfResult, forceUpdate];
  const effect = React.useEffect(() => {
    if (null != valueOfResult) {
      const _Date = Date;
      const diff = valueOfResult - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(timeout, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items2);
  let tmp8 = null != stateFromStores && !isPaymentsBlocked;
  if (tmp8) {
    let tmp9 = null == premiumTrialOffer && null == premiumDiscountOffer;
    if (tmp9) {
      let hasPremiumAtLeastResult;
      if (null != stateFromStores1) {
        hasPremiumAtLeastResult = stateFromStores1.hasPremiumAtLeast(PremiumTypes.TIER_2);
      }
      tmp9 = true !== hasPremiumAtLeastResult;
    }
    tmp8 = tmp9;
  }
  return tmp8;
};
