// Module ID: 7479
// Function ID: 7480
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7480, 7483, 2]
// Exports: default

// Module 7479 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7480 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
