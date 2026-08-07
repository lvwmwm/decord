// Module ID: 10208
// Function ID: 10209
// Name: openForLaterLimitUpsell
// Dependencies: [8310, 8313, 8314, 2]
// Exports: default

// Module 10208 (openForLaterLimitUpsell)
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = require(8314) /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  importDefault(8310)(require(8313) /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
