// Module ID: 11645
// Function ID: 11646
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8593, 8597, 2]
// Exports: default

// Module 11645 (openScheduledMessagesLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8593 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8597 */;

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
