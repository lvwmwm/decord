// Module ID: 11156
// Function ID: 11157
// Name: useIsPremiumSubscriber
// Dependencies: [1371, 1373, 504, 1885, 2]
// Exports: useIsPremiumSubscriber

// Module 11156 (useIsPremiumSubscriber)
import closure_2 from "mergeGuildAvatar" /* 1371 */;
import { PremiumTypes } from "GuildFeatures" /* 1373 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [closure_2];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = closure_1_2.getCurrentUser();
    return TIER_2(closure_1_1[3]).isPremiumExactly(currentUser, TIER_2);
  });
};
