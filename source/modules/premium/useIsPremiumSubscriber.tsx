// Module ID: 9400
// Function ID: 9401
// Name: useIsPremiumSubscriber
// Dependencies: [1874, 1876, 589, 1897, 2]
// Exports: useIsPremiumSubscriber

// Module 9400 (useIsPremiumSubscriber)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [mergeGuildAvatar];
  return TIER_2(589).useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    return TIER_2(outer1_1[3]).isPremiumExactly(currentUser, TIER_2);
  });
};
