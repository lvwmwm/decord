// Module ID: 10192
// Function ID: 10193
// Name: openForLaterLimitUpsell
// Dependencies: [8293, 8296, 8297, 2]
// Exports: default

// Module 10192 (openForLaterLimitUpsell)
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = require(8297) /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  importDefault(8293)(require(8296) /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};
