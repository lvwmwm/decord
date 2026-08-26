// Module ID: 11446
// Function ID: 11447
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [4113, 7123, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11446 (canOpenPremiumPlanDirectlyForReferralTrial)
import closure_0 from "reset" /* 4113 */;
import closure_1 from "emitChanges" /* 7123 */;

let result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = closure_0.getPremiumTypeSubscription(false);
  let result = closure_0.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
