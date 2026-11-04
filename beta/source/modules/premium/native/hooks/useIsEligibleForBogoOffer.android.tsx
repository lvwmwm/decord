// Module ID: 10572
// Function ID: 10573
// Name: useIsEligibleForBogoOffer
// Dependencies: [19, 2052, 9626, 1385, 504, 7627, 10571, 7602, 10573, 2]
// Exports: useIsEligibleForBogoOffer

// Module 10572 (useIsEligibleForBogoOffer)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import PromotionsStore from "PromotionsStore" /* 9626 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export function useIsEligibleForBogoOffer() {
  let activeBogoRewardPromotion;
  let forceUpdate;
  let premiumTypeSubscription;
  const items = [PromotionsStore];
  const obj = forceUpdate(504);
  const stateFromStores = obj.useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const items1 = [SubscriptionStore];
  const obj2 = forceUpdate(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj4 = forceUpdate(7627);
  const premiumTrialOffer = obj4.usePremiumTrialOffer();
  const obj5 = forceUpdate(10571);
  const premiumDiscountOffer = obj5.usePremiumDiscountOffer();
  const obj6 = forceUpdate(7602);
  const isPaymentsBlocked = obj6.useIsPaymentsBlocked();
  const obj7 = forceUpdate(10573);
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
}
