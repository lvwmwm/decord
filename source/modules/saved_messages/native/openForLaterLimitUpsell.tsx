// Module ID: 11174
// Function ID: 11175
// Name: openForLaterLimitUpsell
// Dependencies: [8440, 8443, 8444, 2]
// Exports: default

// Module 11174 (openForLaterLimitUpsell)
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = require(8444) /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  importDefault(8440)(require(8443) /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
