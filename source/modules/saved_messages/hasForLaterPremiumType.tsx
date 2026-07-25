// Module ID: 9493
// Function ID: 74073
// Name: hasForLaterPremiumType
// Dependencies: [1850, 1852, 1873, 2]
// Exports: default

// Module 9493 (hasForLaterPremiumType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
const result = require("isPremiumAtLeast").fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  currentUser = currentUser.getCurrentUser();
  return require(1873) /* isPremiumAtLeast */.isPremium(currentUser, PremiumTypes.TIER_2);
};
