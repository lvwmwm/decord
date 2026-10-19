// Module ID: 12546
// Function ID: 12547
// Name: ReferralMessageUtils
// Dependencies: [4870, 7439, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12546 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4870 */;
import UserOfferStore from "UserOfferStore" /* 7439 */;
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
