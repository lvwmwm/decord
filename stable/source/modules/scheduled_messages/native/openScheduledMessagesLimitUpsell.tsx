// Module ID: 8124
// Function ID: 8125
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8125, 8128, 2]
// Exports: default

// Module 8124 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8125 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8128 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
