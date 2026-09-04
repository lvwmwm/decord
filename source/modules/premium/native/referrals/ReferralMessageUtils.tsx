// Module ID: 11746
// Function ID: 11747
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [4145, 7384, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11746 (canOpenPremiumPlanDirectlyForReferralTrial)
import closure_0 from "reset" /* 4145 */;
import closure_1 from "emitChanges" /* 7384 */;

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
