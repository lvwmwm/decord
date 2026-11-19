// Module ID: 14113
// Function ID: 14114
// Name: useIsPremiumSubscriber
// Dependencies: [1388, 1390, 504, 2110, 2]
// Exports: useIsPremiumSubscriber

// Module 14113 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import UserStore from "UserStore" /* 1388 */;
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
