// Module ID: 8177
// Function ID: 8178
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8178, 8181, 2]
// Exports: default

// Module 8177 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8178 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8181 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
