// Module ID: 7434
// Function ID: 7435
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7435, 7438, 2]
// Exports: default

// Module 7434 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7435 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7438 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
