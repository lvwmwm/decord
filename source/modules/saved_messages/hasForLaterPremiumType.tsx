// Module ID: 9536
// Function ID: 74277
// Name: hasForLaterPremiumType
// Dependencies: [1849, 1851, 1872, 2]
// Exports: default

// Module 9536 (hasForLaterPremiumType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1872) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
