// Module ID: 7526
// Function ID: 7527
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7527, 7530, 2]
// Exports: default

// Module 7526 (openScheduledMessagesLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7527 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7530 */;

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
