// Module ID: 11003
// Function ID: 11004
// Name: useIsEligibleForBogoOffer
// Dependencies: [19, 4452, 10961, 1374, 504, 7721, 11002, 7691, 7714, 2]
// Exports: useIsEligibleForBogoOffer

// Module 11003 (useIsEligibleForBogoOffer)
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4452 */;
import PromotionsStore from "PromotionsStore" /* 10961 */;

const require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/hooks/useIsEligibleForBogoOffer.android.tsx");

export const useIsEligibleForBogoOffer = function useIsEligibleForBogoOffer() {
  const items = [PromotionsStore];
  const stateFromStores = forceUpdate(504).useStateFromStores(items, () => activeBogoRewardPromotion.getActiveBogoRewardPromotion());
  const obj = forceUpdate(504);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = forceUpdate(504).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = forceUpdate(504);
  const premiumTrialOffer = forceUpdate(7721).usePremiumTrialOffer();
  const obj4 = forceUpdate(7721);
  const premiumDiscountOffer = forceUpdate(11002).usePremiumDiscountOffer();
  const obj5 = forceUpdate(11002);
  const isPaymentsBlocked = forceUpdate(7691).useIsPaymentsBlocked();
  const obj6 = forceUpdate(7691);
  forceUpdate = forceUpdate(7714).useForceUpdate();
  let valueOfResult = null;
  if (null != stateFromStores) {
    const endDate = stateFromStores.endDate;
    valueOfResult = endDate.valueOf();
  }
  dependencyMap = valueOfResult;
  const items2 = [valueOfResult, forceUpdate];
  const effect = noop.useEffect(() => {
    if (null != valueOfResult) {
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
