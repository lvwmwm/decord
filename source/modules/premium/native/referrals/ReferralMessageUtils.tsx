// Module ID: 11146
// Function ID: 11147
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [3953, 6854, 2]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 11146 (canOpenPremiumPlanDirectlyForReferralTrial)
import reset from "reset";
import emitChanges from "emitChanges";

let result = require("set").fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

export const canOpenPremiumPlanDirectlyForReferralTrial = function canOpenPremiumPlanDirectlyForReferralTrial() {
  const premiumTypeSubscription = reset.getPremiumTypeSubscription(false);
  let result = reset.hasFetchedSubscriptions();
  if (result) {
    result = null == premiumTypeSubscription;
  }
  if (result) {
    result = !isFetchingOfferResult;
  }
  return result;
};
