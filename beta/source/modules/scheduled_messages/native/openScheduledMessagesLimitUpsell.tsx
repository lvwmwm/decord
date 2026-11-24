// Module ID: 8544
// Function ID: 8545
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8545, 8547, 2]
// Exports: default

// Module 8544 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8545 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8547 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
