// Module ID: 11416
// Function ID: 11417
// Name: useIsPremiumSubscriber
// Dependencies: [1383, 1385, 504, 1983, 2]
// Exports: useIsPremiumSubscriber

// Module 11416 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1385 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import UserStore from "UserStore" /* 1383 */;
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
