// Module ID: 6206
// Function ID: 55674
// Name: useIsEligibleForBogoOffer
// Dependencies: [31, 3783, 6207, 1852, 566, 6188, 6203, 6234, 6181, 2]
// Exports: useIsEligibleForBogoOffer

// Module 6206 (useIsEligibleForBogoOffer)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [closure_4];
  const stateFromStores = forceUpdate(566).useStateFromStores(items, () => outer1_4.getActiveBogoRewardPromotion());
  const obj = forceUpdate(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = forceUpdate(566).useStateFromStores(items1, () => outer1_3.getPremiumTypeSubscription());
  const obj2 = forceUpdate(566);
  const premiumTrialOffer = forceUpdate(6188).usePremiumTrialOffer();
  const obj4 = forceUpdate(6188);
  const premiumDiscountOffer = forceUpdate(6203).usePremiumDiscountOffer();
  const obj5 = forceUpdate(6203);
  const isPaymentsBlocked = forceUpdate(6234).useIsPaymentsBlocked();
  const obj6 = forceUpdate(6234);
  forceUpdate = forceUpdate(6181).useForceUpdate();
  let valueOfResult = null;
  if (null != stateFromStores) {
    const endDate = stateFromStores.endDate;
    valueOfResult = endDate.valueOf();
  }
  const dependencyMap = valueOfResult;
  const items2 = [valueOfResult, forceUpdate];
  const effect = React.useEffect(() => {
    if (null != closure_1) {
      const _Date = Date;
      const diff = closure_1 - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(timeout, diff);
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
