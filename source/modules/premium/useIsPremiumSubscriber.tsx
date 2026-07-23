// Module ID: 8529
// Function ID: 67972
// Name: useIsPremiumSubscriber
// Dependencies: [1849, 1851, 566, 1872, 2]
// Exports: useIsPremiumSubscriber

// Module 8529 (useIsPremiumSubscriber)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [_isNativeReflectConstruct];
  return TIER_2(566).useStateFromStores(items, () => {
    const currentUser = outer1_2.getCurrentUser();
    return TIER_2(outer1_1[3]).isPremiumExactly(currentUser, TIER_2);
  });
};
