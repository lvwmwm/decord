// Module ID: 11380
// Function ID: 11381
// Name: useIsPremiumSubscriber
// Dependencies: [1384, 1386, 504, 1984, 2]
// Exports: useIsPremiumSubscriber

// Module 11380 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1386 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1984 */;
import UserStore from "UserStore" /* 1384 */;
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
