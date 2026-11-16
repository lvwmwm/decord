// Module ID: 11590
// Function ID: 11591
// Name: useIsPremiumSubscriber
// Dependencies: [1385, 1387, 504, 2107, 2]
// Exports: useIsPremiumSubscriber

// Module 11590 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export function useIsPremiumSubscriber(TIER_2) {
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
}
