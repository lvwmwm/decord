// Module ID: 12464
// Function ID: 12465
// Name: ReferralMessageUtils
// Dependencies: [4834, 7393, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 12464 (ReferralMessageUtils)
import SubscriptionStore from "SubscriptionStore" /* 4834 */;
import UserOfferStore from "UserOfferStore" /* 7393 */;
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
