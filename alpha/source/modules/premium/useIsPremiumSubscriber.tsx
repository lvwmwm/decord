// Module ID: 9777
// Function ID: 9778
// Name: useIsPremiumSubscriber
// Dependencies: [1386, 1388, 504, 2108, 2]
// Exports: useIsPremiumSubscriber

// Module 9777 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2108 */;
import UserStore from "UserStore" /* 1386 */;
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
