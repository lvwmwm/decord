// Module ID: 9523
// Function ID: 74196
// Name: hasForLaterPremiumType
// Dependencies: []
// Exports: default

// Module 9523 (hasForLaterPremiumType)
let closure_2 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = currentUser.getCurrentUser();
  return arg1(dependencyMap[2]).isPremium(currentUser, PremiumTypes.TIER_2);
};
