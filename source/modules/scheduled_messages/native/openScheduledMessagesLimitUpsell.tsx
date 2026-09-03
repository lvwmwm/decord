// Module ID: 7604
// Function ID: 7605
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7605, 7608, 2]
// Exports: default

// Module 7604 (openScheduledMessagesLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7605 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7608 */;

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
