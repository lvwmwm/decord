// Module ID: 10171
// Function ID: 10172
// Name: useIsEligibleForBogoOffer
// Dependencies: [19, 4494, 10128, 1374, 504, 6867, 10170, 6837, 6860, 2]
// Exports: useIsEligibleForBogoOffer

// Module 10171 (useIsEligibleForBogoOffer)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  let activeBogoRewardPromotion;
  let forceUpdate;
  let premiumTypeSubscription;
  const items = [PromotionsStore];
  const obj = forceUpdate(504);
  const stateFromStores = obj.useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const items1 = [SubscriptionStore];
  const obj2 = forceUpdate(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj4 = forceUpdate(6867);
  const premiumTrialOffer = obj4.usePremiumTrialOffer();
  const obj5 = forceUpdate(10170);
  const premiumDiscountOffer = obj5.usePremiumDiscountOffer();
  const obj6 = forceUpdate(6837);
  const isPaymentsBlocked = obj6.useIsPaymentsBlocked();
  const obj7 = forceUpdate(6860);
  forceUpdate = obj7.useForceUpdate();
  let valueOfResult = null;
  if (null != stateFromStores) {
    const endDate = stateFromStores.endDate;
    valueOfResult = endDate.valueOf();
  }
  dependencyMap = valueOfResult;
  const items2 = [valueOfResult, forceUpdate];
  const effect = react.useEffect(() => {
    if (null != dependencyMap) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(forceUpdate, diff);
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
