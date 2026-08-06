// Module ID: 8299
// Function ID: 8300
// Name: hasForLaterPremiumType
// Dependencies: [1903, 1905, 1926, 589, 2]
// Exports: default, useHasForLaterPremiumType

// Module 8299 (hasForLaterPremiumType)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1926) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(table[2]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
};
