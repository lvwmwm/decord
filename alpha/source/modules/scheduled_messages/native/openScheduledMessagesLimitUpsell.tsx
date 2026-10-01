// Module ID: 7443
// Function ID: 7444
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7444, 7447, 2]
// Exports: default

// Module 7443 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7444 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7447 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
