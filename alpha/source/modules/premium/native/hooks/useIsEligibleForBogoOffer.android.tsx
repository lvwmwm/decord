// Module ID: 10552
// Function ID: 10553
// Name: useIsEligibleForBogoOffer
// Dependencies: [19, 2053, 9606, 1386, 504, 7620, 10551, 7595, 10553, 2]
// Exports: useIsEligibleForBogoOffer

// Module 10552 (useIsEligibleForBogoOffer)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;
import PromotionsStore from "PromotionsStore" /* 9606 */;
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
  const obj4 = forceUpdate(7620);
  const premiumTrialOffer = obj4.usePremiumTrialOffer();
  const obj5 = forceUpdate(10551);
  const premiumDiscountOffer = obj5.usePremiumDiscountOffer();
  const obj6 = forceUpdate(7595);
  const isPaymentsBlocked = obj6.useIsPaymentsBlocked();
  const obj7 = forceUpdate(10553);
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
