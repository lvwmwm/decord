// Module ID: 11420
// Function ID: 11421
// Name: ReferralMessageUtils
// Dependencies: [4732, 7161, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11420 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import UserOfferStore from "UserOfferStore" /* 7161 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  const isFetchingOfferResult = UserOfferStore.isFetchingOffer();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
