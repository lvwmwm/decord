// Module ID: 7540
// Function ID: 7541
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7541, 7544, 2]
// Exports: default

// Module 7540 (openScheduledMessagesLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7541 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7544 */;

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
