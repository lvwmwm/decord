// Module ID: 8381
// Function ID: 8382
// Name: hasForLaterPremiumType
// Dependencies: [1922, 1924, 1945, 589, 2]
// Exports: default, useHasForLaterPremiumType

// Module 8381 (hasForLaterPremiumType)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1945) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = function useHasForLaterPremiumType() {
  const items = [mergeGuildAvatar];
  return require(589) /* initialize */.useStateFromStores(items, () => callback(table[2]).isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2));
};
