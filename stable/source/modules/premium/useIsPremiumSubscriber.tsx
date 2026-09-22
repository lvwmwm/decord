// Module ID: 11294
// Function ID: 11295
// Name: useIsPremiumSubscriber
// Dependencies: [1371, 1373, 504, 1885, 2]
// Exports: useIsPremiumSubscriber

// Module 11294 (useIsPremiumSubscriber)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1885 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [UserStore];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
  });
};
