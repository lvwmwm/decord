// Module ID: 14018
// Function ID: 14019
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [9679, 5028, 2]
// Exports: default

// Module 14018 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5028 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9679 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  const tmp = openPremiumUpsellActionSheetDefault;
  tmp(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, arg0);
};
