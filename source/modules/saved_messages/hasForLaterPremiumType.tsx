// Module ID: 8187
// Function ID: 8188
// Name: hasForLaterPremiumType
// Dependencies: [1874, 1876, 1897, 589, 2]
// Exports: default, useHasForLaterPremiumType

// Module 8187 (hasForLaterPremiumType)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1897) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(table[2]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
};
