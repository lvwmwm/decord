// Module ID: 9557
// Function ID: 9558
// Name: hasForLaterPremiumType
// Dependencies: [1874, 1876, 1897, 2]
// Exports: default

// Module 9557 (hasForLaterPremiumType)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1897) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
