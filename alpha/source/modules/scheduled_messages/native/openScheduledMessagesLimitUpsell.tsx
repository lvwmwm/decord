// Module ID: 8092
// Function ID: 8093
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8093, 8096, 2]
// Exports: default

// Module 8092 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8093 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8096 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
