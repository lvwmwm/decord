// Module ID: 11943
// Function ID: 11944
// Name: ReferralMessageUtils
// Dependencies: [4424, 7697, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11943 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4424 */;
import UserOfferStore from "UserOfferStore" /* 7697 */;

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
