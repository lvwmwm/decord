// Module ID: 7264
// Function ID: 7265
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7265, 7268, 2]
// Exports: default

// Module 7264 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7265 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7268 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
