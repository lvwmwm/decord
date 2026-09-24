// Module ID: 8129
// Function ID: 8130
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8130, 8133, 2]
// Exports: default

// Module 8129 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8130 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8133 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
