// Module ID: 11320
// Function ID: 11321
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [4114, 7142, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11320 (canOpenPremiumPlanDirectlyForReferralTrial)
import closure_0 from "reset" /* 4114 */;
import closure_1 from "emitChanges" /* 7142 */;

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
