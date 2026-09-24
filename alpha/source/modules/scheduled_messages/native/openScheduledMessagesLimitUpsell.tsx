// Module ID: 8179
// Function ID: 8180
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8180, 8183, 2]
// Exports: default

// Module 8179 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8180 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8183 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
