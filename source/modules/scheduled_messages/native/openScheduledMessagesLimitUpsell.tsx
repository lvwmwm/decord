// Module ID: 7561
// Function ID: 7562
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7562, 7565, 2]
// Exports: default

// Module 7561 (openScheduledMessagesLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7562 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7565 */;

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
