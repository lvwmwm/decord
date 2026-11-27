// Module ID: 9820
// Function ID: 9821
// Name: useIsPremiumSubscriber
// Dependencies: [1387, 1389, 504, 2109, 2]
// Exports: useIsPremiumSubscriber

// Module 9820 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1389 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2109 */;
import UserStore from "UserStore" /* 1387 */;
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
