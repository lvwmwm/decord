// Module ID: 8518
// Function ID: 67900
// Name: useIsPremiumSubscriber
// Dependencies: []
// Exports: useIsPremiumSubscriber

// Module 8518 (useIsPremiumSubscriber)
let closure_2 = importDefault(dependencyMap[0]);
const PremiumTypes = arg1(dependencyMap[1]).PremiumTypes;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const arg1 = TIER_2;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    return TIER_2(closure_1[3]).isPremiumExactly(currentUser, TIER_2);
  });
};
