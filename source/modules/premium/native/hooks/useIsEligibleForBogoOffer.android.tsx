// Module ID: 6258
// Function ID: 6259
// Name: useIsEligibleForBogoOffer
// Dependencies: [19, 3841, 6259, 1876, 589, 6239, 6255, 6288, 6232, 2]
// Exports: useIsEligibleForBogoOffer

// Module 6258 (useIsEligibleForBogoOffer)
import noop from "noop";
import reset from "reset";
import createEmptyPromotionsByType from "createEmptyPromotionsByType";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("createEmptyPromotionsByType").fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [createEmptyPromotionsByType];
  const stateFromStores = forceUpdate(589).useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const obj = forceUpdate(589);
  const items1 = [reset];
  const stateFromStores1 = forceUpdate(589).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = forceUpdate(589);
  const premiumTrialOffer = forceUpdate(6239).usePremiumTrialOffer();
  const obj4 = forceUpdate(6239);
  const premiumDiscountOffer = forceUpdate(6255).usePremiumDiscountOffer();
  const obj5 = forceUpdate(6255);
  const isPaymentsBlocked = forceUpdate(6288).useIsPaymentsBlocked();
  const obj6 = forceUpdate(6288);
  forceUpdate = forceUpdate(6232).useForceUpdate();
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
      const diff = tmp - Date.now();
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
      if (stateFromStores1 != null) {
        hasPremiumAtLeastResult = stateFromStores1.hasPremiumAtLeast(PremiumTypes.TIER_2);
      }
      tmp9 = true !== hasPremiumAtLeastResult;
    }
    tmp8 = tmp9;
  }
  return tmp8;
};
