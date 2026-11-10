// Module ID: 15594
// Function ID: 15595
// Name: useIsUserEligibleForThirdPartyPerks
// Dependencies: [1385, 2176, 504, 2107, 15595, 2]
// Exports: useIsUserEligibleForThirdPartyPerks

// Module 15594 (useIsUserEligibleForThirdPartyPerks)
import get_initialized from "get initialized" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import ThirdPartyPerkUtils from "ThirdPartyPerkUtils" /* 15595 */;
import UserStore from "UserStore" /* 1385 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/partner_perks/useIsUserEligibleForThirdPartyPerks.tsx");

export function useIsUserEligibleForThirdPartyPerks() {
  let currentUser;
  let tmpResult4;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [SubscriptionStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SubscriptionStore.getPremiumTypeSubscription());
  const items2 = [SubscriptionStore];
  const obj3 = get_initialized;
  if (!obj3.useStateFromStores(items2, () => SubscriptionStore.hasFetchedSubscriptions())) {
    const tmpResult = PremiumTypeUtils;
    if (tmpResult.isPremium(stateFromStores)) {
      return null;
    }
  }
  const tmpResult3 = ThirdPartyPerkUtils;
  const result = tmpResult3.isUserEligibleForThirdPartyPerks(stateFromStores, stateFromStores1);
  const reason = result.reason;
  const obj4 = { isEligible: result.isEligible, state: tmpResult4.getThirdPartyPerkClaimState(reason), reason };
  tmpResult4 = ThirdPartyPerkUtils;
  return obj4;
}
