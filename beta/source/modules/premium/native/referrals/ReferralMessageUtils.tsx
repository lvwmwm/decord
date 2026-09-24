// Module ID: 11979
// Function ID: 11980
// Name: ReferralMessageUtils
// Dependencies: [4456, 7729, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11979 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4456 */;
import UserOfferStore from "UserOfferStore" /* 7729 */;

const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
  let result = SubscriptionStore.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
