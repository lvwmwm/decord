// Module ID: 9545
// Function ID: 9546
// Name: useIsPremiumSubscriber
// Dependencies: [1922, 1924, 589, 1945, 2]
// Exports: useIsPremiumSubscriber

// Module 9545 (useIsPremiumSubscriber)
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
