// Module ID: 10618
// Function ID: 10619
// Name: useIsPremiumSubscriber
// Dependencies: [1372, 1374, 504, 1970, 2]
// Exports: useIsPremiumSubscriber

// Module 10618 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1970 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let obj = TIER_2(504);
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    const obj = PremiumTypeUtils;
    return obj.isPremiumExactly(currentUser, TIER_2);
  });
};
