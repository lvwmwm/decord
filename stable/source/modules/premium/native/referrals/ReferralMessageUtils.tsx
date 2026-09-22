// Module ID: 11948
// Function ID: 11949
// Name: ReferralMessageUtils
// Dependencies: [4300, 7553, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11948 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4300 */;
import UserOfferStore from "UserOfferStore" /* 7553 */;

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
