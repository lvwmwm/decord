// Module ID: 8097
// Function ID: 8098
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8098, 8101, 2]
// Exports: default

// Module 8097 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8098 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8101 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
