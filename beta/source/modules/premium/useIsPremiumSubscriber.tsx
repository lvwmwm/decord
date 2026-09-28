// Module ID: 10618
// Function ID: 10619
// Name: useIsPremiumSubscriber
// Dependencies: [1372, 1374, 504, 1970, 2]
// Exports: useIsPremiumSubscriber

// Module 10618 (useIsPremiumSubscriber)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PremiumTypes = fn(1374).PremiumTypes;
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
