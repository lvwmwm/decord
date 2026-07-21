// Module ID: 10948
// Function ID: 85136
// Name: canOpenPremiumPlanDirectlyForReferralTrial
// Dependencies: [270270464, 266338304, 1441792]
// Exports: canOpenPremiumPlanDirectlyForReferralTrial

// Module 10948 (canOpenPremiumPlanDirectlyForReferralTrial)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/native/referrals/ReferralMessageUtils.tsx");

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
