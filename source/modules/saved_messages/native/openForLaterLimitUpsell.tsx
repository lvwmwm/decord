// Module ID: 10190
// Function ID: 10191
// Name: openForLaterLimitUpsell
// Dependencies: [8181, 8184, 8185, 2]
// Exports: default

// Module 10190 (openForLaterLimitUpsell)
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0) {
  const PremiumUpsellSubfeatureNames = require(8185) /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  importDefault(8181)(require(8184) /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT);
};
