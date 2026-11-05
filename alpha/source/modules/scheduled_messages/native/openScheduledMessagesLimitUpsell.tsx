// Module ID: 14824
// Function ID: 14825
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9949, 5202, 2]
// Exports: default

// Module 14824 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5202 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9949 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
