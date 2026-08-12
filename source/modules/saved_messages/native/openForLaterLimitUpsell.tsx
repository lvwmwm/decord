// Module ID: 10321
// Function ID: 10322
// Name: openForLaterLimitUpsell
// Dependencies: [8414, 8417, 8418, 2]
// Exports: default

// Module 10321 (openForLaterLimitUpsell)
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = require(8418) /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  importDefault(8414)(require(8417) /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
