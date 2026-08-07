// Module ID: 9417
// Function ID: 9418
// Name: useIsPremiumSubscriber
// Dependencies: [1903, 1905, 589, 1926, 2]
// Exports: useIsPremiumSubscriber

// Module 9417 (useIsPremiumSubscriber)
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
