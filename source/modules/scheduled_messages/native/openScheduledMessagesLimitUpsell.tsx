// Module ID: 7781
// Function ID: 7782
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7782, 7785, 2]
// Exports: default

// Module 7781 (openScheduledMessagesLimitUpsell)
import set from "set" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7782 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7785 */;

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
