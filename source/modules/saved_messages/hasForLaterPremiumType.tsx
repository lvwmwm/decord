// Module ID: 9572
// Function ID: 74486
// Name: hasForLaterPremiumType
// Dependencies: [1849, 1851, 1872, 2]
// Exports: default

// Module 9572 (hasForLaterPremiumType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1872) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
