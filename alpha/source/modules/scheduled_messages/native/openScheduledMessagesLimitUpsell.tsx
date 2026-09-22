// Module ID: 8095
// Function ID: 8096
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8096, 8099, 2]
// Exports: default

// Module 8095 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8096 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
